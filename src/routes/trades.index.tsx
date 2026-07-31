import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BackBar } from "@/components/site/BackBar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { TRADE_GROUPS, money, tradeBySlug } from "@/data/trades";

export const Route = createFileRoute("/trades/")({
  head: () => ({
    meta: [
      { title: "All 24 trades — what they are and what they pay | The Mustard Seed" },
      {
        name: "description",
        content:
          "Twenty-four skilled trades, grouped plainly, with starting pay on every one. Electrical, HVAC, welding, elevator repair, diesel, aviation, and more.",
      },
      { property: "og:title", content: "All 24 trades — what they are and what they pay" },
      {
        property: "og:description",
        content: "Twenty-four skilled trades with real BLS wage figures and how to get into each.",
      },
    ],
  }),
  component: TradesIndex,
});

function TradesIndex() {
  return (
    <div>
      <SiteHeader back={{ to: "/", label: "Home" }} />
      <header className="mx-auto max-w-5xl px-6 pb-12 pt-32 md:pt-40">
        <h1 className="display-lg">Twenty-four ways in.</h1>
        <p className="mt-6 max-w-2xl lede text-muted-foreground">
          Grouped by what the work actually does, not by job title. Every number below is starting
          pay from the U.S. Bureau of Labor Statistics.
        </p>
      </header>

      <div className="mx-auto max-w-5xl px-6 pb-24">
        {TRADE_GROUPS.map((group) => (
          <section key={group.title} className="mb-16">
            <h2 className="display-md border-b border-border pb-4">{group.title}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.slugs.map((slug) => {
                const t = tradeBySlug(slug)!;
                return (
                  <Link
                    key={slug}
                    to="/trades/$trade"
                    params={{ trade: slug }}
                    className="group overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-gold"
                  >
                    <img
                      src={t.image}
                      alt={`${t.name} work`}
                      width={1536}
                      height={1024}
                      loading="lazy"
                      className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="p-5">
                      <p className="font-display text-lg">{t.name}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Starts around{" "}
                        <span className="font-display text-base text-[var(--gold)]">
                          {money(t.wages.start)}
                        </span>
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      <BackBar to="/" label="Back to home" />
      <SiteFooter />
    </div>
  );
}
