import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BackBar } from "@/components/site/BackBar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WageBlock } from "@/components/site/WageBlock";
import { LeadForm } from "@/components/site/LeadForm";
import { tradeBySlug } from "@/data/trades";

export const Route = createFileRoute("/trades/$trade")({
  loader: ({ params }) => {
    const trade = tradeBySlug(params.trade);
    if (!trade) throw notFound();
    return { slug: trade.slug };
  },
  head: ({ params }) => {
    const t = tradeBySlug(params.trade);
    if (!t) {
      return {
        meta: [{ title: "Trade not found | The Mustard Seed" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${t.name} — What it is, what it pays, and how you get in | The Mustard Seed`;
    const description = `${t.name}: a plain look at the work, real BLS wage figures, the path in, and what it turns into.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Occupation",
                name: t.name,
                description: t.whatItIs,
                occupationalCategory: t.socCode,
                occupationLocation: {
                  "@type": "State",
                  name: "Georgia",
                },
                ...(t.wagesVerified === false
                  ? {}
                  : {
                      estimatedSalary: [
                        {
                          "@type": "MonetaryAmountDistribution",
                          name: "base",
                          currency: "USD",
                          duration: "P1Y",
                          percentile10: t.wages.start,
                          median: t.wages.median,
                          percentile90: t.wages.experienced,
                        },
                      ],
                    }),
              },
              {
                "@type": "HowTo",
                name: `How to get into ${t.name}`,
                step: t.howYouGetIn.map((s, i) => ({
                  "@type": "HowToStep",
                  position: i + 1,
                  text: s,
                })),
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  ...(t.wagesVerified === false
                    ? []
                    : [
                        {
                          "@type": "Question",
                          name: `What does ${t.name.toLowerCase()} pay?`,
                          acceptedAnswer: {
                            "@type": "Answer",
                            text: `Starting around $${t.wages.start.toLocaleString("en-US")}, median $${t.wages.median.toLocaleString("en-US")}, and experienced workers around $${t.wages.experienced.toLocaleString("en-US")} per year (BLS OEWS, May 2024).`,
                          },
                        },
                      ]),
                  {
                    "@type": "Question",
                    name: `How do you get into ${t.name.toLowerCase()}?`,
                    acceptedAnswer: { "@type": "Answer", text: t.howYouGetIn.join(" ") },
                  },
                  {
                    "@type": "Question",
                    name: `What do you need before you start?`,
                    acceptedAnswer: { "@type": "Answer", text: t.before.join(" ") },
                  },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: TradePage,
});

function TradePage() {
  const { slug } = Route.useLoaderData();
  const t = tradeBySlug(slug)!;

  return (
    <div>
      <SiteHeader tone="dark" back={{ to: "/trades", label: "All 24 trades" }} />

      <section className="relative h-[70vh] bg-soil">
        <img
          src={t.image}
          alt={`${t.name} work in progress`}
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/60 to-soil/30" />
        <div className="relative mx-auto flex h-full max-w-4xl flex-col justify-end px-6 pb-14 text-soil-foreground">
          <p className="eyebrow text-gold">{t.group}</p>
          <h1 className="display-xl mt-3">{t.name}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="lede">{t.whatItIs}</p>

        <section className="mt-16">
          <h2 className="display-md">A day in it</h2>
          <ul className="mt-6 space-y-3 border-l-2 border-gold pl-6">
            {t.day.map((line) => (
              <li key={line} className="text-lg leading-relaxed">
                {line}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="display-md">What it pays</h2>
          <div className="mt-6">
            <WageBlock
              wages={t.wages}
              socCode={t.socCode}
              note={t.wageNote}
              verified={t.wagesVerified !== false}
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="display-md">How you get in</h2>
          <ul className="mt-6 space-y-3">
            {t.howYouGetIn.map((s) => (
              <li key={s} className="flex gap-3 text-lg">
                <span className="text-gold">—</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="display-md">What you need before you start</h2>
          <ul className="mt-6 space-y-3">
            {t.before.map((s) => (
              <li key={s} className="flex gap-3 text-lg">
                <span className="text-gold">—</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-sm border border-dashed border-border p-6">
          <h2 className="display-md">Someone doing it</h2>
          <p className="mt-4 text-muted-foreground">
            Photograph, first name, age, and three or four sentences in their own words — to be
            supplied.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="display-md">What it turns into</h2>
          <p className="mt-6 text-lg">{t.becomes}</p>
        </section>
      </div>

      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <h2 className="display-md">Want to talk to somebody doing this?</h2>
          <p className="mt-4 text-forest-foreground/80">
            Two fields. A person reads it and texts you back.
          </p>
          <div className="mt-8">
            <LeadForm
              tone="dark"
              buttonLabel="Send it."
              thanks="Somebody with a name will text you in the next few days."
              fields={[
                { name: "name", label: "Your name" },
                { name: "phone", label: "Phone", type: "tel" },
              ]}
            />

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="eyebrow text-muted-foreground">Related trades</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {t.related.map((slug) => {
            const r = tradeBySlug(slug)!;
            return (
              <Link
                key={slug}
                to="/trades/$trade"
                params={{ trade: slug }}
                className="rounded-sm border border-border bg-card p-5 transition-colors hover:border-gold"
              >
                <p className="font-display text-lg">{r.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.group}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <BackBar to="/trades" label="Back to all 24 trades" alsoTo="/" alsoLabel="Home" />
      <SiteFooter />
    </div>
  );
}
