import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-young-worker.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { WageBlock } from "@/components/site/WageBlock";
import { LeadForm } from "@/components/site/LeadForm";
import { EXPLORER_SLUGS, trades, tradeBySlug } from "@/data/trades";

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [
      { title: "You are not behind. You're early. | The Mustard Seed" },
      {
        name: "description",
        content:
          "Free mentorship, training, and scholarships to help young people get into a skilled trade. Nothing to qualify for. A real person reads what you send.",
      },
      { property: "og:title", content: "You are not behind. You're early." },
      {
        property: "og:description",
        content:
          "Explore skilled trades, see what they pay, and talk to a real person about getting in.",
      },
    ],
  }),
  component: StartPage,
});

function StartPage() {
  const [active, setActive] = useState(EXPLORER_SLUGS[0]);
  const trade = tradeBySlug(active)!;

  return (
    <div>
      <SiteHeader tone="dark" />

      <section className="relative min-h-[80vh] bg-soil">
        <img
          src={heroImg}
          alt="A young man working on a job site"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/75 to-soil/40" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-end px-6 pb-16 pt-40 text-soil-foreground">
          <h1 className="display-xl">
            You are not behind.
            <br />
            <span className="text-gold">You're early.</span>
          </h1>
          <p className="mt-8 max-w-xl lede text-soil-foreground/85">
            Half the people doing this work started exactly where you are. Some of them didn't
            finish school either.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="lede">
          This is mentorship, training, scholarships, and help getting into a trade. It's free.
          There is nothing to qualify for. It isn't a program you apply to and then wait on.
        </p>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="display-md">Pick one and look at it.</h2>

          <div className="mt-8 flex flex-wrap gap-2">
            {EXPLORER_SLUGS.map((slug) => {
              const t = tradeBySlug(slug)!;
              const on = slug === active;
              return (
                <button
                  key={slug}
                  onClick={() => setActive(slug)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    on
                      ? "border-gold bg-gold text-gold-foreground"
                      : "border-border bg-card hover:border-gold"
                  }`}
                >
                  {t.name}
                </button>
              );
            })}
          </div>

          <article className="mt-10 overflow-hidden rounded-sm border border-border bg-card">
            <img
              src={trade.image}
              alt={`${trade.name} work`}
              width={1536}
              height={1024}
              loading="lazy"
              className="h-64 w-full object-cover md:h-80"
            />
            <div className="p-7 md:p-10">
              <h3 className="display-md">{trade.name}</h3>
              <p className="mt-5 lede">{trade.whatItIs}</p>

              <div className="mt-10">
                <WageBlock wages={trade.wages} socCode={trade.socCode} />
              </div>

              <div className="mt-10">
                <p className="eyebrow text-muted-foreground">How you get in</p>
                <ul className="mt-4 space-y-2">
                  {trade.howYouGetIn.map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="text-gold">—</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/trades/$trade"
                params={{ trade: trade.slug }}
                className="mt-10 inline-flex items-center gap-2 underline underline-offset-8"
              >
                Everything about {trade.name} <span className="text-gold">→</span>
              </Link>
            </div>
          </article>

          <p className="mt-10">
            There are{" "}
            <Link to="/trades" className="underline underline-offset-4">
              two dozen more
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-soil text-soil-foreground">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="display-md">What happens after you send this</h2>
          <div className="mt-8 space-y-5 lede text-soil-foreground/85">
            <p>A person reads it. Not a system.</p>
            <p>You get an email back within a few days, from somebody with a name.</p>
            <p>
              Then we talk about what you're interested in and what's near you. That's the whole
              thing. There is no application and nothing to qualify for.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-20">
        <LeadForm
          buttonLabel="Send it."
          thanks="A person on our team is reading this. You'll hear back from somebody with a name within a few days."
          note="If you're under 18, we'll loop in a parent or guardian before anything starts."
          fields={[
            { name: "name", label: "Your name" },
            { name: "email", label: "Email", type: "email" },
            { name: "city", label: "City and state" },
            { name: "phone", label: "Phone", type: "tel", optional: true },
            { name: "age", label: "Age", type: "number", optional: true },
            {
              name: "trade",
              label: "A trade you're curious about",
              type: "select",
              optional: true,
              options: ["Still deciding", ...trades.map((t) => t.name)],
            },
            {
              name: "notes",
              label: "Anything you want us to know",
              type: "textarea",
              optional: true,
            },
          ]}
        >
          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" required className="mt-1 accent-[var(--gold)]" />
            <span>It's okay to contact me about getting into a trade.</span>
          </label>
        </LeadForm>
      </section>

      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-display text-2xl leading-snug md:text-3xl">
            Faith the size of a seed is enough to start.{" "}
            <span className="text-gold">That's the whole requirement.</span>
          </p>
        </div>
      </section>
    </div>
  );
}
