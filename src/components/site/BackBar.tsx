import { Link, type LinkProps } from "@tanstack/react-router";

type Props = {
  to: LinkProps["to"];
  label: string;
  /** Optional second exit, usually home. */
  alsoTo?: LinkProps["to"];
  alsoLabel?: string;
  tone?: "light" | "dark";
};

/**
 * Bottom-of-page exit. Every page gets one so nobody dead-ends.
 */
export function BackBar({ to, label, alsoTo, alsoLabel, tone = "light" }: Props) {
  const border = tone === "dark" ? "border-soil-foreground/15" : "border-border";
  const text = tone === "dark" ? "text-soil-foreground" : "text-foreground";

  return (
    <nav aria-label="Back" className={`border-t ${border} ${text}`}>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-8 text-lg">
        <Link to={to} className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
          <span aria-hidden className="text-gold">
            ←
          </span>
          {label}
        </Link>
        {alsoTo && (
          <Link
            to={alsoTo}
            className="inline-flex items-center gap-2 opacity-70 underline-offset-4 hover:underline"
          >
            <span aria-hidden className="text-gold">
              ←
            </span>
            {alsoLabel ?? "Home"}
          </Link>
        )}
      </div>
    </nav>
  );
}
