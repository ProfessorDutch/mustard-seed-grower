import { createServerFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/react-start/server";
import { z } from "zod";
import { readServerEnv } from "./env.server";

const giftSchema = z.object({
  amount: z.number().int().min(1).max(1_000_000),
  frequency: z.enum(["once", "monthly"]),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  notes: z.string().trim().max(1000).optional(),
});

export const createGiftCheckout = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => giftSchema.parse(data))
  .handler(async ({ data }) => {
    const secretKey = process.env["STRIPE_SECRET_KEY"];
    if (!secretKey) {
      throw new Error(
        "Giving isn't connected yet: the server can't see STRIPE_SECRET_KEY. (Check /api/public/stripe-health.)",
      );
    }


    const origin = getRequestUrl().origin;
    const monthly = data.frequency === "monthly";
    const cents = data.amount * 100;

    const body = new URLSearchParams({
      mode: monthly ? "subscription" : "payment",
      success_url: `${origin}/give?gift=thanks`,
      cancel_url: `${origin}/give?gift=cancelled#give`,
      customer_email: data.email,
      "line_items[0][quantity]": "1",
      "line_items[0][price_data][currency]": "usd",
      "line_items[0][price_data][unit_amount]": String(cents),
      "line_items[0][price_data][product_data][name]": monthly
        ? "Foundation Member — monthly gift"
        : "Gift to The Mustard Seed",
      "metadata[donor_name]": data.name,
      "metadata[frequency]": data.frequency,
    });
    if (monthly) {
      body.set("line_items[0][price_data][recurring][interval]", "month");
    }
    if (data.notes) body.set("metadata[notes]", data.notes.slice(0, 450));

    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`Stripe checkout failed [${res.status}]: ${text}`);
      let detail = "";
      try {
        detail = (JSON.parse(text) as { error?: { message?: string } }).error?.message ?? "";
      } catch {
        detail = "";
      }
      throw new Error(
        `Stripe rejected the request (${res.status})${detail ? `: ${detail}` : ""}`,
      );
    }


    const session = (await res.json()) as { url?: string };
    if (!session.url) throw new Error("Stripe did not return a checkout link.");
    return { url: session.url };
  });
