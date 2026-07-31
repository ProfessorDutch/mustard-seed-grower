import { useState, type FormEvent, type ReactNode } from "react";

export function LeadForm({
  fields,
  buttonLabel,
  note,
  thanks,
  tone = "light",
  children,
}: {
  fields: {
    name: string;
    label: string;
    type?: "text" | "email" | "tel" | "textarea" | "select" | "number";
    options?: string[];
    optional?: boolean;
    placeholder?: string;
  }[];
  buttonLabel: string;
  note?: ReactNode;
  thanks: string;
  tone?: "light" | "dark";
  children?: ReactNode;
}) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    tone === "dark"
      ? "w-full rounded-sm border border-soil-foreground/25 bg-transparent px-4 py-3 text-base text-soil-foreground outline-none placeholder:text-soil-foreground/35 focus:border-gold"
      : "w-full rounded-sm border border-border bg-card px-4 py-3 text-base outline-none placeholder:text-muted-foreground/60 focus:border-gold";

  if (sent) {
    return (
      <div
        className={`rounded-sm border p-8 ${tone === "dark" ? "border-soil-foreground/20" : "border-border bg-card"}`}
      >
        <p className="display-md">Got it.</p>
        <p className="mt-3 lede opacity-80">{thanks}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {fields.map((f) => (
        <div key={f.name}>
          <label htmlFor={f.name} className="mb-2 block text-sm font-medium">
            {f.label}
            {f.optional && <span className="ml-2 text-xs opacity-55">optional</span>}
          </label>
          {f.type === "textarea" ? (
            <textarea
              id={f.name}
              name={f.name}
              rows={4}
              placeholder={f.placeholder}
              required={!f.optional}
              className={inputClass}
            />
          ) : f.type === "select" ? (
            <select id={f.name} name={f.name} className={inputClass} defaultValue={f.options?.[0]}>
              {f.options?.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={f.name}
              name={f.name}
              type={f.type ?? "text"}
              placeholder={f.placeholder}
              required={!f.optional}
              className={inputClass}
            />
          )}
        </div>
      ))}
      {children}
      <button
        type="submit"
        className="rounded-sm bg-gold px-8 py-4 font-display text-lg text-gold-foreground transition-opacity hover:opacity-90"
      >
        {buttonLabel}
      </button>
      {note && <p className="text-sm opacity-65">{note}</p>}
    </form>
  );
}
