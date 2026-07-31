import { createFileRoute, Link } from "@tanstack/react-router";
import genesisImg from "@/assets/genesis-moment.jpg";
import businessImg from "@/assets/business-owner.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/the-genesis-moment")({
  head: () => ({
    meta: [
      { title: "The Genesis Moment — somebody bet on him first | The Mustard Seed" },
      {
        name: "description",
        content:
          "A podcast where home service business owners name the person who believed in them before they had earned it. Fifty of those is not a podcast. It's proof.",
      },
      { property: "og:title", content: "The Genesis Moment — somebody bet on him first" },
      {
        property: "og:description",
        content:
          "Home service business owners, on the record, about the person who bet on them first.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GenesisPage,
});

const episodes = [
  {
    img: businessImg,
    title: "The truck he never asked for",
    line: "A roofing owner in north Georgia on the man who handed him keys and a ladder rack.",
  },
  {
    img: mentorshipImg,
    title: "Six useless months",
    line: "A plumber on the boss who kept him on payroll long past the point it made sense.",
  },
  {
    img: genesisImg,
    title: "The collection nobody mentioned",
    line: "An HVAC owner on a church that covered his first van and never brought it up again.",
  },
];

function GenesisPage() {
  return (
    <div>
      <SiteHeader tone="dark" />

      <section className="relative min-h-[70vh] bg-soil text-soil-foreground">
        <img
          src={genesisImg}
          alt="A home service business owner telling his story into a broadcast microphone"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/80 to-soil/45" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-end px-5 pb-16 pt-40 sm:px-6">
          <p className="eyebrow text-gold">The Genesis Moment</p>
          <h1 className="display-lg mt-4">Somebody bet on him first.</h1>
          <p className="mt-6 lede text-soil-foreground/85">
            Home service business owners, on the record, about the person who believed in them
            before they had earned it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-6">
        <div className="space-y-6 lede">
          <p>
            Every person who owns a trades business had somebody. A guy who handed him a truck. An
            uncle who co-signed. A boss who kept him on when he was useless for the first six
            months. A church that took up a collection nobody talked about afterward.
          </p>
          <p>
            None of them get named. The story that gets told is the one about grit — I built this
            myself, I outworked everybody. That version is popular and it is almost never the whole
            truth, and the part that gets left out is the part this organization runs on.
          </p>
          <p className="font-display text-2xl leading-snug">
            The Genesis Moment goes and gets that part.
          </p>
          <p>
            It is not marketing for The Mustard Seed. It is evidence for it. Do that fifty times and
            you have not made a podcast — you have documented the mechanism by which the trades
            actually get built, in the words of the people it happened to.
          </p>
        </div>
      </section>

      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 md:py-24">
          <h2 className="display-md">Three questions, every episode.</h2>
          <ol className="mt-10 space-y-6">
            {[
              "Who bet on you?",
              "Did you ever tell them?",
              "Who have you bet on since?",
            ].map((q, i) => (
              <li key={q} className="flex items-baseline gap-5 border-t border-forest-foreground/25 pt-5">
                <span className="font-display text-2xl text-gold">0{i + 1}</span>
                <span className="font-display text-2xl leading-snug md:text-3xl">{q}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <h2 className="display-md">Episodes</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((e) => (
            <article key={e.title} className="overflow-hidden rounded-sm border border-border">
              <img
                src={e.img}
                alt=""
                width={1536}
                height={1024}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-xl leading-snug">{e.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{e.line}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-base text-muted-foreground">
          New episodes as they're recorded.
        </p>
      </section>

      <section className="bg-soil text-soil-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="display-md">Be a guest.</h2>
            <p className="mt-5 text-xl leading-relaxed text-soil-foreground/85">
              This isn't exposure. You already have customers. It's that somebody deserves to be
              named, out loud, by the person they bet on.
            </p>
            <p className="mt-5 text-xl leading-relaxed text-soil-foreground/85">
              Twenty minutes. You talk about the best thing that ever happened to you.
            </p>
          </div>
          <div className="rounded-sm border border-soil-foreground/20 p-6 sm:p-8">
            <LeadForm
              buttonLabel="Put me on the list"
              thanks="Thank you. We'll reach out to schedule and send you the three questions ahead of time."
              fields={[
                { name: "name", label: "Your name" },
                { name: "business", label: "Your business" },
                { name: "email", label: "Email", type: "email" },
                { name: "who", label: "Who bet on you?", type: "textarea", optional: true },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-6 md:py-20">
        <Link
          to="/memories"
          className="flex items-center justify-between gap-4 rounded-sm border-2 border-border px-6 py-6 transition-colors hover:border-gold"
        >
          <span className="font-display text-xl sm:text-2xl">
            Nominate the person who believed in you
          </span>
          <span aria-hidden className="text-2xl text-gold">
            →
          </span>
        </Link>
        <a
          href="https://thegenesismoment.com"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-lg underline underline-offset-8"
        >
          thegenesismoment.com <span className="text-gold">→</span>
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}
