import { useState, type FormEvent } from "react";

const PRESETS: Record<"monthly" | "once", number[]> = {
  monthly: [25, 50, 100, 250],
  once: [100, 250, 500, 1000],
};

export function GiveForm() {
  const [freq, setFreq] = useState<"monthly" | "once">("monthly");
  const [amount, setAmount] = useState<number | "custom">(50);
  const [custom, setCustom] = useState("");
  const [sent, setSent] = useState(false);

  const presets = PRESETS[freq];
  const chosen = amount === "custom" ? custom : String(amount);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-sm border border-soil-foreground/20 p-7">
        <p className="display-md">Got it.</p>
        <p className="mt-3 lede opacity-80">
          {chosen ? `$${chosen} ` : ""}
          {freq === "monthly" ? "each month" : "one time"}. Somebody from The Mustard Seed will
          reach out personally to set this up.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-sm border border-forest-foreground/25 bg-transparent px-4 py-3 text-base outline-none placeholder:text-forest-foreground/40 focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <div>
        <p className="eyebrow mb-3 opacity-70">How often</p>
        <div
          role="radiogroup"
          aria-label="Giving frequency"
          className="grid grid-cols-2 gap-2 rounded-sm border border-forest-foreground/25 p-1"
        >
          {(["monthly", "once"] as const).map((f) => (
            <button
              key={f}
              type="button"
              role="radio"
              aria-checked={freq === f}
              onClick={() => {
                setFreq(f);
                setAmount(PRESETS[f][1]);
              }}
              className={`rounded-sm px-4 py-3 text-sm font-medium transition-colors ${
                freq === f
                  ? "bg-gold text-gold-foreground"
                  : "text-forest-foreground/80 hover:bg-forest-foreground/10"
              }`}
            >
              {f === "monthly" ? "Monthly" : "One time"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow mb-3 opacity-70">Choose your gift</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={amount === p}
              onClick={() => setAmount(p)}
              className={`rounded-sm border px-3 py-4 font-display text-xl transition-colors ${
                amount === p
                  ? "border-gold bg-gold text-gold-foreground"
                  : "border-forest-foreground/25 hover:border-gold"
              }`}
            >
              ${p}
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-pressed={amount === "custom"}
          onClick={() => setAmount("custom")}
          className={`mt-2 w-full rounded-sm border px-3 py-3 text-sm transition-colors ${
            amount === "custom"
              ? "border-gold text-gold"
              : "border-forest-foreground/25 hover:border-gold"
          }`}
        >
          Another amount
        </button>
        {amount === "custom" && (
          <div className="mt-3">
            <label htmlFor="customAmount" className="mb-2 block text-sm font-medium">
              Your amount (USD)
            </label>
            <input
              id="customAmount"
              name="customAmount"
              type="number"
              min={1}
              step={1}
              inputMode="decimal"
              required
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              placeholder="e.g. 75"
              className={field}
            />
          </div>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" required className={field} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input id="email" name="email" type="email" required className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="mb-2 block text-sm font-medium">
          Anything you'd like us to know <span className="ml-1 text-xs opacity-55">optional</span>
        </label>
        <textarea id="notes" name="notes" rows={3} className={field} />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-gold px-8 py-4 font-display text-lg text-gold-foreground transition-opacity hover:opacity-90 sm:w-auto"
      >
        {freq === "monthly"
          ? `Give $${chosen || "—"} a month`
          : `Give $${chosen || "—"} once`}
      </button>
      <p className="text-sm opacity-65">
        Nothing is charged here. We'll reach out personally to set it up.
      </p>
    </form>
  );
}
