import { createFileRoute } from "@tanstack/react-router";
import businessImg from "@/assets/business-owner.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "For home service businesses — reviews become funding | The Mustard Seed" },
      {
        name: "description",
        content:
          "Your customer reviews can fund the next generation of tradespeople. Partner with The Mustard Seed through MeetEmmy, and mentor the kids who end up in your shop.",
      },
      { property: "og:title", content: "Your customer reviews can fund this" },
      {
        property: "og:description",
        content:
          "Home service businesses turn reviews into scholarships — and mentor the young people who end up on their crews.",
      },
    ],
  }),
  component: BusinessPage,
});

function BusinessPage() {
  return (
    <div>
      <SiteHeader tone="dark" />

      <section className="relative min-h-[65vh] bg-soil text-soil-foreground">
        <img
          src={businessImg}
          alt="A home service business owner beside a work van"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/75 to-soil/40" />
        <div className="relative mx-auto flex min-h-[65vh] max-w-3xl flex-col justify-end px-6 pb-14 pt-40">
          <h1 className="display-lg">
            Your customer reviews can <span className="text-gold">fund this.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="display-md">How it works</h2>
        <div className="mt-8 space-y-5 lede">
          <p>MeetEmmy collects reviews from your customers after every job.</p>
          <p>You set an amount that gets donated to The Mustard Seed for each review that comes in.</p>
          <p>The reviews grow your business, which is the reason you'd do it anyway.</p>
          <p>Every review becomes a seed planted in a kid going into your trade.</p>
        </div>
        <a
          href="https://meetemmy.com"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 underline underline-offset-8"
        >
          See how MeetEmmy works <span className="text-gold">→</span>
        </a>
      </section>

      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="display-md">The other ask</h2>
          <p className="mt-6 lede text-forest-foreground/85">
            These are the businesses where the kids end up. Take one on. Let a young person ride
            along, hold a meter, run a route with somebody who knows what he's doing. That's the
            part money can't buy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-20">
        <h2 className="display-md">Partner with us</h2>
        <div className="mt-8">
          <LeadForm
            buttonLabel="Start the conversation."
            thanks="Thank you. Somebody will reach out to talk through what fits your shop."
            fields={[
              { name: "name", label: "Your name" },
              { name: "company", label: "Company" },
              { name: "email", label: "Email", type: "email" },
              { name: "phone", label: "Phone", type: "tel", optional: true },
              { name: "trade", label: "What trade are you in?" },
              {
                name: "interest",
                label: "What you're interested in",
                type: "select",
                options: [
                  "Reviews that fund scholarships (MeetEmmy)",
                  "Mentoring a young person",
                  "Hiring an apprentice",
                  "All of it",
                ],
              },
            ]}
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
