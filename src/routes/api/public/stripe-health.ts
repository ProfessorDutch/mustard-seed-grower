import { createFileRoute } from "@tanstack/react-router";

/**
 * Deployment diagnostic for giving.
 *
 * Reports whether the server runtime can see STRIPE_SECRET_KEY and whether
 * Stripe accepts it. Never returns the key itself — only its shape and mode.
 */
export const Route = createFileRoute("/api/public/stripe-health")({
  server: {
    handlers: {
      GET: async () => {
        const key = process.env["STRIPE_SECRET_KEY"];

        const result: Record<string, unknown> = {
          runtime: typeof navigator !== "undefined" ? navigator.userAgent : "node",
          keyPresent: Boolean(key),
          keyLength: key ? key.length : 0,
          keyMode: key ? (key.startsWith("sk_live") ? "live" : key.startsWith("sk_test") ? "test" : "unknown-prefix") : null,
        };

        if (key) {
          try {
            const res = await fetch("https://api.stripe.com/v1/balance", {
              headers: { Authorization: `Bearer ${key}` },
            });
            result["stripeStatus"] = res.status;
            result["stripeAccepts"] = res.ok;
            if (!res.ok) result["stripeError"] = (await res.text()).slice(0, 400);
          } catch (err) {
            result["stripeAccepts"] = false;
            result["stripeError"] = err instanceof Error ? err.message : String(err);
          }
        }

        return new Response(JSON.stringify(result, null, 2), {
          headers: { "content-type": "application/json", "cache-control": "no-store" },
        });
      },
    },
  },
});
