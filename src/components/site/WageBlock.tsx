import { WAGE_SOURCE, money } from "@/data/trades";

export function WageBlock({
  wages,
  socCode,
  note,
  labels = ["Starting out", "Median", "Experienced"],
}: {
  wages: { start: number; median: number; experienced: number };
  socCode?: string;
  note?: string;
  labels?: [string, string, string] | string[];
}) {
  const values = [wages.start, wages.median, wages.experienced];
  return (
    <div>
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {values.map((v, i) => (
          <div key={labels[i]} className="border-t border-current/20 pt-4">
            <dt className="eyebrow opacity-60">{labels[i]}</dt>
            <dd className="figure-gold mt-2">{money(v)}</dd>
          </div>
        ))}
      </dl>
      {note && <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80">{note}</p>}
      <p className="mt-5 max-w-2xl text-xs leading-relaxed opacity-55">
        {WAGE_SOURCE}
        {socCode ? ` SOC ${socCode}.` : ""} Real numbers only — never estimated, never rounded up.
      </p>
    </div>
  );
}

