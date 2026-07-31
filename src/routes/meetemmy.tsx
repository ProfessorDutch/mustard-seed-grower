import { createFileRoute, Link } from "@tanstack/react-router";
import crisisImg from "@/assets/crisis-tree.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BackBar } from "@/components/site/BackBar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/meetemmy")({
  head: () => ({
    meta: [
      { title: "MeetEmmy — the trades are paying to build the trades | The Mustard Seed" },
      {
        name: "description",
        content:
          "A crisis response system for home service businesses. Customer reviews become funding for a young person's way into the trade — and he goes to work for a business just like yours.",
      },
      { property: "og:title", content: "MeetEmmy — the trades are paying to build the trades" },
      {
        property: "og:description",
        content:
          "Crisis answered, review written, kid funded, kid in a truck answering the next crisis. A closed circuit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EmmyPage,
});

const circuit = [
  { step: "A crisis", body: "6 AM. A tree through the roof, a line burst, no heat in January." },
  { step: "An answered call", body: "A real person picks up, and a crew gets routed to the house." },
  { step: "A review", body: "The customer writes down what happened on the worst morning of their year." },
  { step: "Funding", body: "That review becomes a gift to The Mustard Seed. Nobody was asked for anything." },
  { step: "Training", body: "Tuition, tools, certification, and a mentor who stays with him." },
  { step: "A kid in a truck", body: "He goes to work for a home service business. The same industry." },
  { step: "The next crisis", body: "And he's the one who answers it." },
];

function EmmyPage() {
  return (
    <div>
      <SiteHeader tone="dark" back={{ to: "/", label: "Home" }} />

      <section className="relative min-h-[70vh] bg-soil text-soil-foreground">
        <img
          src={crisisImg}
          alt="A fallen tree through the roof of a house at dawn, with a service truck arriving"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/80 to-soil/45" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-end px-5 pb-16 pt-40 sm:px-6">
          <p className="eyebrow text-gold">MeetEmmy</p>
          <h1 className="display-lg mt-4">The trades are paying to build the trades.</h1>
          <p className="mt-6 lede text-soil-foreground/85">
            The money came out of the trades. It goes back into the trades. Nobody had to be asked
            for anything.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 md:py-24">
        <h2 className="display-md">The circuit, drawn.</h2>
        <ol className="mt-10 space-y-4">
          {circuit.map((c, i) => (
            <li key={c.step} className="relative rounded-sm border-2 border-border p-5 sm:p-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-xl text-gold">0{i + 1}</span>
                <div>
                  <p className="font-display text-2xl leading-snug">{c.step}</p>
                  <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </div>
              <span
                aria-hidden
                className="absolute -bottom-4 left-8 z-10 text-2xl leading-none text-gold"
              >
                {i < circuit.length - 1 ? "↓" : "↺"}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-14 font-display text-2xl leading-snug md:text-3xl">
          It closes. The industry is paying to build its own pipeline, and it is paying with the
          record of its best days.
        </p>
      </section>

      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="display-md">What Emmy actually is.</h2>
            <p className="mt-6 text-xl leading-relaxed">
              A crisis response system for home service businesses — roofers, plumbers, HVAC
              companies, restoration crews. The businesses that answer emergencies.
            </p>
            <p className="mt-5 text-xl leading-relaxed text-forest-foreground/85">
              Emmy catches the call at 6 AM when a tree is through somebody's roof and a family
              needs a person on the phone. Booked jobs and captured reviews are what comes out of
              that. They are outcomes, not the thing.
            </p>
          </div>
          <div>
            <h2 className="display-md">What it costs you.</h2>
            <p className="mt-6 text-xl leading-relaxed">
              A flat monthly subscription for the system, quoted by company size. No per-call fees
              and no cut of your jobs.
            </p>
            <p className="mt-5 text-xl leading-relaxed text-forest-foreground/85">
              The giving is a portion of what your reviews generate, set by you, and it is stated in
              dollars before you agree to it. Nothing is taken out of a customer's pocket.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-6 md:py-24">
        <h2 className="display-md">Why a business should care beyond the giving.</h2>
        <div className="mt-8 space-y-6 text-xl leading-relaxed">
          <p>
            You are short-handed. You know it. There are not enough people in the trucks, the ones
            you have are getting older, and no amount of ad spend produces a twenty-year-old who
            wants to learn the trade.
          </p>
          <p>
            A business that funds this is not making a charitable gesture. It is buying the only
            thing it actually cannot buy.
          </p>
        </div>
        <Link
          to="/business"
          className="mt-10 flex items-center justify-between gap-4 rounded-sm border-2 border-border px-6 py-6 transition-colors hover:border-gold"
        >
          <span className="font-display text-xl sm:text-2xl">
            What partnering looks like for your company
          </span>
          <span aria-hidden className="text-2xl text-gold">
            →
          </span>
        </Link>
      </section>

      <section className="bg-soil text-soil-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="display-md">Talk to us.</h2>
            <p className="mt-5 text-xl leading-relaxed text-soil-foreground/85">
              Tell us what you run and how many calls you miss. We will show you the numbers for a
              company your size.
            </p>
            <a
              href="https://meetemmy.com"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-lg underline underline-offset-8"
            >
              meetemmy.com <span className="text-gold">→</span>
            </a>
          </div>
          <div className="rounded-sm border border-soil-foreground/20 p-6 sm:p-8">
            <LeadForm
              buttonLabel="Start the conversation"
              thanks="Thank you. Someone will call you — a real person, which is rather the point."
              fields={[
                { name: "name", label: "Your name" },
                { name: "business", label: "Your business" },
                { name: "trade", label: "What you do", optional: true },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Phone", optional: true },
              ]}
            />
          </div>
        </div>
      </section>

      <BackBar to="/" label="Back to home" />
      <SiteFooter />
    </div>
  );
}
