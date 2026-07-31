import { Link } from "@tanstack/react-router";

const columns: { title: string; links: { to: string; label: string }[] }[] = [
  {
    title: "Young people",
    links: [
      { to: "/start", label: "Start here" },
      { to: "/trades", label: "All 24 trades" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { to: "/give", label: "Give" },
      { to: "/ambassadors", label: "Ambassadors" },
      { to: "/business", label: "For businesses" },
      { to: "/churches", label: "For churches" },
    ],
  },
  {
    title: "About",
    links: [
      { to: "/story", label: "The story" },
      { to: "/memories", label: "Share a memory" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-soil text-soil-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl">The Mustard Seed</p>
          <p className="mt-2 text-sm text-soil-foreground/60">Faith that moves mountains</p>
          <p className="mt-6 text-sm text-soil-foreground/60">Woodstock, Georgia</p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="eyebrow text-gold">{col.title}</p>
            <ul className="mt-4 space-y-2">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-soil-foreground/80 underline-offset-4 hover:text-gold hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {col.title === "About" && (
                <li>
                  <a
                    href="https://thegenesismoment.com"
                    className="text-sm text-soil-foreground/80 underline-offset-4 hover:text-gold hover:underline"
                    rel="noreferrer"
                  >
                    The Genesis Moment
                  </a>
                </li>
              )}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-soil-foreground/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-soil-foreground/50">
          © {new Date().getFullYear()} The Mustard Seed. Wage figures from the U.S. Bureau of Labor
          Statistics.
        </p>
      </div>
    </footer>
  );
}
