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
      <div className="rounded-sm border-2 border-soil-foreground/25 p-7">
        <p className="display-md">Thank you.</p>
        <p className="mt-3 text-xl leading-relaxed">
          {chosen ? `$${chosen} ` : ""}
          {freq === "monthly" ? "every month" : "one time"}. Someone from The Mustard Seed will call
          or email you personally to finish setting this up.
        </p>
      </div>
    );
  }

  const label = "mb-2 block text-lg font-semibold";
  const field =
    "w-full rounded-sm border-2 border-forest-foreground/35 bg-transparent px-4 py-4 text-xl outline-none placeholder:text-forest-foreground/50 focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div>
        <p className="mb-3 text-lg font-semibold">How often would you like to give?</p>
        <div
          role="radiogroup"
          aria-label="Giving frequency"
          className="grid grid-cols-2 gap-2 rounded-sm border-2 border-forest-foreground/35 p-1"
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
              className={`rounded-sm px-4 py-4 text-xl font-semibold transition-colors ${
                freq === f
                  ? "bg-gold text-gold-foreground"
                  : "text-forest-foreground hover:bg-forest-foreground/10"
              }`}
            >
              {f === "monthly" ? "Every month" : "Just once"}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-lg font-semibold">Choose your gift amount</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={amount === p}
              onClick={() => setAmount(p)}
              className={`rounded-sm border-2 px-3 py-5 font-display text-3xl font-semibold transition-colors ${
                amount === p
                  ? "border-gold bg-gold text-gold-foreground"
                  : "border-forest-foreground/35 hover:border-gold"
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
          className={`mt-3 w-full rounded-sm border-2 px-3 py-4 text-xl font-semibold transition-colors ${
            amount === "custom"
              ? "border-gold text-gold"
              : "border-forest-foreground/35 hover:border-gold"
          }`}
        >
          Enter another amount
        </button>
        {amount === "custom" && (
          <div className="mt-4">
            <label htmlFor="customAmount" className={label}>
              Your amount in dollars
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
              placeholder="75"
              className={field}
            />
          </div>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Your name
          </label>
          <input id="name" name="name" required className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Your email
          </label>
          <input id="email" name="email" type="email" required className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className={label}>
          Anything you would like us to know{" "}
          <span className="font-normal opacity-80">(optional)</span>
        </label>
        <textarea id="notes" name="notes" rows={3} className={field} />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-gold px-8 py-5 font-display text-2xl font-semibold text-gold-foreground transition-opacity hover:opacity-90"
      >
        {freq === "monthly"
          ? `Give $${chosen || "—"} every month`
          : `Give $${chosen || "—"} one time`}
      </button>
      <p className="text-lg leading-relaxed">
        Your card is not charged on this page. We will contact you personally to set up your gift.
      </p>
    </form>
  );
}
