import { WAGE_SOURCE, money } from "@/data/trades";

export function WageBlock({
  wages,
  socCode,
  note,
  verified = true,
  labels = ["Starting out", "Median", "Experienced"],
}: {
  wages: { start: number; median: number; experienced: number };
  socCode?: string;
  note?: string;
  verified?: boolean;
  labels?: [string, string, string] | string[];
}) {
  const values = [wages.start, wages.median, wages.experienced];

  if (!verified) {
    return (
      <div>
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {labels.map((l) => (
            <div key={l} className="border-t border-current/20 pt-4">
              <dt className="eyebrow opacity-60">{l}</dt>
              <dd className="figure-gold mt-2 opacity-40">—</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80">
          We have not finished checking this occupation
          {socCode ? ` (SOC ${socCode})` : ""} against the published May 2024 wage
          release, so we are not printing a number yet. When it is verified, it goes
          here — exactly as the government published it.
        </p>
        {note && <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-80">{note}</p>}
      </div>
    );
  }

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
