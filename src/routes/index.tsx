import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-young-worker.jpg";
import dutchImg from "@/assets/dutch.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";
import businessImg from "@/assets/business-owner.jpg";
import churchImg from "@/assets/church.jpg";
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
        <div className="relative mx-auto flex min-h-[92vh] max-w-4xl flex-col justify-end px-6 pb-20 pt-40 text-soil-foreground">
          <h1 className="display-xl">
            God doesn't make mistakes.
            <br />
            <span className="text-gold">That's why you are here.</span>
          </h1>
          <div className="mt-10 max-w-2xl space-y-5 lede text-soil-foreground/85">
            <p>
              Somebody along the way told you that what you're good at with your hands is the lesser
              thing.
            </p>
            <p>That was never true, and it was never God's idea.</p>
            <p>
              The Mustard Seed puts young people into skilled trades — mentorship, training,
              scholarships, and a real way in.
            </p>
          </div>
        </div>
      </section>

      {/* 2 · What the work holds up */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <h2 className="display-lg">Look at what's holding you up.</h2>
          <div className="mt-12 space-y-8 lede text-forest-foreground/85">
            <p>Somebody wired the room you're sitting in.</p>
            <p>Somebody kept the hospital cold enough to store blood.</p>
            <p>
              Somebody welded the bridge you drove over this morning without thinking about it once.
            </p>
            <p>
              Somebody was on a roof in July so a family could sleep through a storm in October.
            </p>
          </div>
          <p className="mt-14 font-display text-2xl leading-snug md:text-3xl">
            None of them needed anyone's permission.{" "}
            <span className="text-gold">All of them got paid.</span>
          </p>
        </div>
      </section>

      {/* 3 · One trade, shown completely */}
      <section className="bg-background">
        <img
          src={electrical.image}
          alt="An electrician pulling wire in an unfinished building"
          width={1536}
          height={1024}
          loading="lazy"
          className="h-[45vh] w-full object-cover md:h-[60vh]"
        />
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
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

          <div className="mt-16 border-t border-border pt-10">
            <p className="text-sm text-muted-foreground">
              Photograph, first name, age, and one sentence in their own words — to be supplied.
            </p>
          </div>

          <Link
            to="/trades"
            className="mt-12 inline-flex items-center gap-3 font-display text-2xl underline-offset-8 hover:underline"
          >
            There are twenty-three more <span className="text-gold">→</span>
          </Link>
        </div>
      </section>

      {/* 4 · Why this exists */}
      <section className="bg-soil text-soil-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <img
            src={dutchImg}
            alt="Dutch standing in a shop doorway at dusk"
            width={1536}
            height={1024}
            loading="lazy"
            className="w-full object-cover"
          />
          <div>
            <blockquote className="font-display text-2xl leading-snug md:text-3xl">
              <p>
                I had people who invested in me and believed in me long before I ever knew my own
                worth.
              </p>
              <p className="mt-6 text-gold">I'm still talking about them to this day.</p>
            </blockquote>
            <p className="mt-10 text-soil-foreground/80">
              That's the whole idea. Somebody does that for a kid, and the kid spends the rest of
              his life telling people about it.
            </p>
            <Link
              to="/story"
              className="mt-8 inline-flex items-center gap-3 underline-offset-8 hover:underline"
            >
              The rest of the story <span className="text-gold">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5 · The doors */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <p className="eyebrow text-muted-foreground">Which one are you?</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
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
                  className="h-64 w-full object-cover opacity-65 transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-soil-foreground">
                  <p className="font-display text-2xl">{d.title}</p>
                  <p className="mt-2 text-sm text-soil-foreground/80">{d.line}</p>
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

      {/* 6 · The loop */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-28">
          <h2 className="display-md">It comes back around.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "The Genesis Moment",
                body: "A podcast about home service business owners and the people who believed in them first. The stories bring in the mentors, the partners, and the people who fund this.",
              },
              {
                title: "MeetEmmy",
                body: "Businesses donate to The Mustard Seed directly out of their customer reviews. Every review becomes a seed planted.",
              },
              {
                title: "The Mustard Seed",
                body: "Scholarships, mentorship, and a way into the trades for a kid who didn't have one.",
              },
            ].map((p, i) => (
              <div key={p.title} className="border-t border-forest-foreground/25 pt-5">
                <p className="eyebrow text-gold">0{i + 1}</p>
                <p className="mt-3 font-display text-xl">{p.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-forest-foreground/80">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 max-w-2xl font-display text-xl leading-snug md:text-2xl">
            The kids this funds go into the trades. The trades are the businesses the podcast came
            from. It comes back around.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
