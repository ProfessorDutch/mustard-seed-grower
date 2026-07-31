import { Link } from "@tanstack/react-router";

export function SiteHeader({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "dark" ? "text-soil-foreground" : "text-foreground";
  return (
    <header className={`absolute inset-x-0 top-0 z-20 ${text}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link to="/" className="font-display text-lg tracking-tight">
          The Mustard Seed
        </Link>
        <nav className="hidden items-center gap-7 text-sm sm:flex">
          <Link to="/trades" className="opacity-80 underline-offset-4 hover:underline">
            Trades
          </Link>
          <Link to="/story" className="opacity-80 underline-offset-4 hover:underline">
            Story
          </Link>
          <Link
            to="/start"
            className="rounded-sm bg-gold px-4 py-2 font-medium text-gold-foreground transition-opacity hover:opacity-90"
          >
            Start here
          </Link>
        </nav>
      </div>
    </header>
  );
}
