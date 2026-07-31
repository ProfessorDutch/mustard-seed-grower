import { useState } from "react";
import { Link, type LinkProps } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/start", label: "Start here" },
  { to: "/trades", label: "The 24 trades" },
  { to: "/give", label: "Give" },
  { to: "/the-genesis-moment", label: "The Genesis Moment" },
  { to: "/meetemmy", label: "MeetEmmy" },
  { to: "/business", label: "For businesses" },
  { to: "/churches", label: "For churches" },
  { to: "/ambassadors", label: "Ambassadors" },
  { to: "/story", label: "Dutch's story" },
  { to: "/memories", label: "Share a memory" },
];

export function SiteHeader({
  tone = "light",
  back,
}: {
  tone?: "light" | "dark";
  back?: { to: LinkProps["to"]; label: string };
}) {
  const [open, setOpen] = useState(false);
  const text = tone === "dark" ? "text-soil-foreground" : "text-foreground";

  return (
    <header className={`absolute inset-x-0 top-0 z-30 ${text}`}>
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <div className="min-w-0">
          <Link to="/" className="block truncate font-display text-lg tracking-tight">
            The Mustard Seed
          </Link>
          {back && (
            <Link
              to={back.to}
              className="mt-1 inline-flex items-center gap-1.5 text-sm opacity-75 underline-offset-4 hover:underline"
            >
              <span aria-hidden className="text-gold">
                ←
              </span>
              {back.label}
            </Link>
          )}
        </div>


        <nav className="hidden items-center gap-6 text-sm lg:flex">
          <Link to="/trades" className="opacity-80 underline-offset-4 hover:underline">
            Trades
          </Link>
          <Link to="/story" className="opacity-80 underline-offset-4 hover:underline">
            Story
          </Link>
          <Link to="/give" className="opacity-80 underline-offset-4 hover:underline">
            Give
          </Link>
          <Link
            to="/start"
            className="rounded-sm bg-gold px-4 py-2 font-medium text-gold-foreground transition-opacity hover:opacity-90"
          >
            Start here
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-current/25 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="mx-4 rounded-sm border border-soil-foreground/15 bg-soil px-5 py-4 text-soil-foreground shadow-xl">
            <ul className="divide-y divide-soil-foreground/10">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3.5 text-base"
                  >
                    {l.label}
                    <span className="text-gold">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
