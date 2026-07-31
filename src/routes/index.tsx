import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-young-worker.jpg";
import dutchImg from "@/assets/dutch.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";
import genesisImg from "@/assets/genesis-moment.jpg";
import crisisImg from "@/assets/crisis-tree.jpg";
import businessImg from "@/assets/business-owner.jpg";
import churchImg from "@/assets/church.jpg";
import electricalImg from "@/assets/trade-electrical.jpg";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WageBlock } from "@/components/site/WageBlock";
import { tradeBySlug } from "@/data/trades";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Mustard Seed — God doesn't make mistakes. That's why you are here." },
      {
        name: "description",
        content:
          "The Mustard Seed puts young people into skilled trades — mentorship, training, scholarships, and a real way in. Woodstock, Georgia.",
      },
      {
        property: "og:title",
        content: "The Mustard Seed — a real way into the skilled trades",
      },
      {
        property: "og:description",
        content:
          "Mentorship, training, scholarships, and a real way into 24 skilled trades for young people.",
      },
    ],
  }),
  component: Home,
});

const doors = [
  {
    title: "I'm a young person",
    line: "Find your trade. We'll help you get in.",
    to: "/start",
    image: heroImg,
  },
  {
    title: "I want to give",
    line: "Fund a scholarship path, and the people who stay with these kids.",
    to: "/give",
    image: mentorshipImg,
  },
  {
    title: "I run a business",
    line: "Your customer reviews can fund this.",
    to: "/business",
    image: businessImg,
  },
  {
    title: "I'm with a church",
    line: "Bring this to the young people in your congregation.",
    to: "/churches",
    image: churchImg,
  },
];

function Home() {
  const electrical = tradeBySlug("electrical")!;

  return (
    <div>
      <SiteHeader tone="dark" />

      {/* 1 · Hero */}
      <section className="relative min-h-[92vh] overflow-hidden bg-soil">
        <img
          src={heroImg}
          alt="A young man working with his hands on an unfinished job site"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/70 to-soil/40" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-4xl flex-col justify-end px-5 pb-16 pt-32 text-soil-foreground sm:px-6 sm:pb-20 sm:pt-40">
          <h1 className="display-xl">
            God doesn't make mistakes.
            <br />
            <span className="text-gold">That's why you are here.</span>
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 lede text-soil-foreground/85">
            <p>
              Somebody along the way invested in you. Now it's time to return the favor.
            </p>
            <p>
              The Mustard Seed puts young people into skilled trades — mentorship, training,
              scholarships, and a real way in.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              to="/start"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 font-display text-lg text-gold-foreground transition-opacity hover:opacity-90"
            >
              Find your trade <span aria-hidden>→</span>
            </Link>
            <Link
              to="/give"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-soil-foreground/35 px-7 py-4 text-base transition-colors hover:border-gold hover:text-gold"
            >
              Give
            </Link>
            <a
              href="#holding-you-up"
              className="inline-flex items-center justify-center gap-2 py-2 text-sm text-soil-foreground/70 underline-offset-8 hover:text-gold hover:underline"
            >
              See why this matters <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2 · What the work holds up */}
      <section id="holding-you-up" className="scroll-mt-16 bg-forest text-forest-foreground">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 md:py-28">
          <p className="eyebrow text-gold">Look down. Look around.</p>
          <h2 className="display-lg mt-3 max-w-3xl">Look at what's holding you up.</h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              {
                num: "01",
                text: "Somebody poured the foundation under the room you're sitting in.",
              },
              {
                num: "02",
                text: "Somebody ran the lights, the water, and the power through the walls.",
              },
              {
                num: "03",
                text: "Somebody welded the bridge you drove over this morning.",
              },
              {
                num: "04",
                text: "Somebody laid the roof that protects the air conditioning you never think about.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="rounded-sm border border-forest-foreground/15 bg-forest-foreground/5 p-6 sm:p-8"
              >
                <span className="eyebrow text-gold">{item.num}</span>
                <p className="mt-3 font-display text-xl leading-snug sm:text-2xl">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 max-w-3xl space-y-6 text-lg leading-relaxed text-forest-foreground/85">
            <p>
              That's infrastructure. Poured, framed, wired, covered. Nobody sees it. Everybody stands on it.
            </p>
            <p>
              But infrastructure isn't only buildings.
            </p>
            <p>
              People get built the same way. Somebody pours a foundation into a kid before there's anything standing on it. Somebody frames him. Somebody covers him.
            </p>
          </div>

          <div className="mt-10 max-w-3xl space-y-3">
            {[
              "Poured into.",
              "Planted in faith.",
              "Purposeful in a community.",
            ].map((line) => (
              <p key={line} className="font-display text-2xl leading-snug text-forest-foreground md:text-3xl">
                <span aria-hidden className="mr-3 text-gold">—</span>
                {line}
              </p>
            ))}
          </div>

          <p className="mt-12 max-w-3xl font-display text-2xl leading-snug md:text-3xl">
            That's what a mustard seed is. The smallest thing anybody ever put in the ground, holding up everything that came after.
          </p>
          <p className="mt-6 max-w-3xl font-display text-2xl leading-snug text-gold md:text-3xl">
            Somebody poured into you.
          </p>

          <a
            href="#one-trade"
            className="mt-10 inline-flex items-center gap-3 text-base text-forest-foreground/80 underline-offset-8 hover:text-gold hover:underline"
          >
            Here's what one of them actually pays <span aria-hidden className="text-gold">↓</span>
          </a>
        </div>
      </section>


      {/* 3 · One trade, shown completely */}
      <section id="one-trade" className="scroll-mt-16 bg-background">
        <img
          src={electrical.image}
          alt="An electrician pulling wire in an unfinished building"
          width={1536}
          height={1024}
          loading="lazy"
          className="h-[38vh] w-full object-cover sm:h-[45vh] md:h-[60vh]"
        />
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 md:py-28">

          <p className="eyebrow text-muted-foreground">Here's one of them.</p>
          <h2 className="display-lg mt-3">Electrical</h2>
          <p className="mt-8 max-w-2xl lede">{electrical.whatItIs}</p>

          <div className="mt-14">
            <WageBlock
              wages={electrical.wages}
              socCode={electrical.socCode}
              labels={["Starting out", "Median", "Experienced"]}
            />
          </div>

          <p className="mt-12 border-l-2 border-gold pl-6 text-lg">
            <span className="font-semibold">How you start:</span> a four-year apprenticeship. You
            are paid from the first day of it.
          </p>

          <div className="mt-14 grid gap-3 sm:grid-cols-2">
            <Link
              to="/trades"
              className="inline-flex items-center justify-between gap-3 rounded-sm bg-soil px-6 py-5 font-display text-xl text-soil-foreground transition-opacity hover:opacity-90"
            >
              There are twenty-three more <span className="text-gold">→</span>
            </Link>
            <Link
              to="/start"
              className="inline-flex items-center justify-between gap-3 rounded-sm border border-border px-6 py-5 font-display text-xl transition-colors hover:border-gold"
            >
              Get started <span className="text-gold">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 4 · He was the kid — Dutch */}
      <section className="bg-soil text-soil-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 md:items-center md:gap-12 md:py-28">
          <img
            src={dutchImg}
            alt="Dutch standing in a shop doorway at dusk"
            width={1536}
            height={1024}
            loading="lazy"
            className="w-full rounded-sm object-cover"
          />
          <div>
            <h2 className="display-lg">He was the kid.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-soil-foreground/85">
              <p>
                Born into poverty in Georgia. Cutting grass at eight. Holding the accounts at ten.
                Baling pine straw at $2.35 a bag and selling it to the landscapers at his church.
              </p>
              <p>
                He quit school when his father fell off a ladder and broke his back. Took a GED.
                Went to work. Handed the money to the family.
              </p>
              <p>
                He has never held a degree, a license, or a title in any industry he changed. There
                have been three of them.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-gold pl-6 font-display text-2xl leading-snug">
              <p>
                I had people who invested in me and believed in me long before I ever knew my own
                worth.
              </p>
              <p className="mt-4 text-gold">I'm still talking about them to this day.</p>
              <footer className="mt-5 text-base font-sans text-soil-foreground/70">
                Jason "Dutch" Brown, founder
              </footer>
            </blockquote>
            <Link
              to="/story"
              className="mt-8 inline-flex items-center gap-3 text-lg underline-offset-8 hover:underline"
            >
              The rest of it <span className="text-gold">→</span>
            </Link>
          </div>
        </div>
      </section>


      {/* 5 · The doors */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-28">
          <p className="eyebrow text-muted-foreground">Which one are you?</p>
          <h2 className="display-md mt-3">Pick your door.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
            {doors.map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className="group relative block overflow-hidden rounded-sm bg-soil"
              >
                <img
                  src={d.image}
                  alt=""
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="h-52 w-full object-cover opacity-65 transition duration-500 group-hover:scale-105 group-hover:opacity-80 sm:h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-soil-foreground sm:p-7">
                  <div className="min-w-0">
                    <p className="font-display text-xl sm:text-2xl">{d.title}</p>
                    <p className="mt-2 text-sm text-soil-foreground/80">{d.line}</p>
                  </div>
                  <span
                    aria-hidden
                    className="shrink-0 text-2xl text-gold transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-muted-foreground">
            Or{" "}
            <Link to="/memories" className="text-foreground underline underline-offset-4">
              share a memory
            </Link>{" "}
            of the person who believed in you first.
          </p>
        </div>
      </section>

      {/* 6 · The Genesis Moment */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 md:items-center md:gap-12 md:py-28">
          <div>
            <p className="eyebrow text-gold">The Genesis Moment</p>
            <h2 className="display-lg mt-3">Somebody bet on him first.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-forest-foreground/85">
              <p>
                Every trades business in America has a person behind it that nobody names. The guy
                who handed over a truck. The boss who kept him on through six useless months. The
                uncle who co-signed.
              </p>
              <p>
                The story that gets told is the one about grit. It is almost never the whole truth.
              </p>
              <p>
                The Genesis Moment is a podcast that goes and gets the rest of it — home service
                business owners, on the record, about the person who believed in them before they
                had earned it.
              </p>
            </div>
            <p className="mt-7 font-display text-2xl leading-snug">
              Fifty of those is not a podcast. <span className="text-gold">It's proof.</span>
            </p>
            <Link
              to="/the-genesis-moment"
              className="mt-8 inline-flex items-center gap-3 rounded-sm bg-gold px-7 py-4 font-display text-lg text-gold-foreground transition-opacity hover:opacity-90"
            >
              The Genesis Moment <span aria-hidden>→</span>
            </Link>
          </div>
          <img
            src={genesisImg}
            alt="A home service business owner telling his story into a broadcast microphone"
            width={1536}
            height={1024}
            loading="lazy"
            className="w-full rounded-sm object-cover"
          />
        </div>
      </section>

      {/* 7 · MeetEmmy */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 md:items-center md:gap-12 md:py-28">
          <img
            src={crisisImg}
            alt="A fallen tree through the roof of a house at dawn, with a service truck arriving"
            width={1536}
            height={1024}
            loading="lazy"
            className="w-full rounded-sm object-cover"
          />
          <div>
            <p className="eyebrow text-muted-foreground">MeetEmmy</p>
            <h2 className="display-lg mt-3">The trades are paying to build the trades.</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed">
              <p>
                Somebody's worst morning. A tree through the roof, a line burst, no heat in January.
              </p>
              <p>
                A company answers, shows up, and fixes it. The customer writes down what happened.
              </p>
              <p>
                MeetEmmy turns that review into funding for a young person's way into the trade —
                and the young person goes to work for a business exactly like the one that just got
                reviewed.
              </p>
            </div>
            <p className="mt-7 font-display text-2xl leading-snug">
              The money came out of the trades. It goes back into the trades.
            </p>
            <p className="mt-3 text-lg text-muted-foreground">
              Nobody had to be asked for anything.
            </p>
            <Link
              to="/meetemmy"
              className="mt-8 inline-flex items-center gap-3 rounded-sm border-2 border-border px-7 py-4 font-display text-lg transition-colors hover:border-gold"
            >
              How it works <span aria-hidden className="text-gold">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8 · The loop, closed */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 md:py-24">
          <p className="font-display text-2xl leading-snug md:text-4xl">
            The podcast finds the people who were once the kid.{" "}
            <span className="text-gold">The Mustard Seed finds the kid.</span>
          </p>
          <p className="mt-6 font-display text-2xl leading-snug md:text-4xl">
            The trades pay for it, and the kid goes back into the trades.
          </p>
        </div>
      </section>


      {/* 7 · Closing ask */}
      <section className="bg-soil text-soil-foreground">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-6 md:py-24">
          <p className="eyebrow text-gold">One more thing</p>
          <h2 className="display-lg mt-3">Somebody did it for you once.</h2>
          <p className="mx-auto mt-6 max-w-xl lede text-soil-foreground/80">
            Give once or monthly, in whatever amount you choose.
          </p>
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/give"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 font-display text-lg text-gold-foreground transition-opacity hover:opacity-90"
            >
              Give <span aria-hidden>→</span>
            </Link>
            <Link
              to="/start"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-soil-foreground/35 px-8 py-4 text-base transition-colors hover:border-gold hover:text-gold"
            >
              I'm a young person
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />

    </div>
  );
}
