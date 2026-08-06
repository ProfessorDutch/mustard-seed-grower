import { createFileRoute } from "@tanstack/react-router";
import dutchImg from "@/assets/dutch.jpg";
import mentorshipImg from "@/assets/mentorship.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BackBar } from "@/components/site/BackBar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GiveForm } from "@/components/site/GiveForm";


export const Route = createFileRoute("/give")({
  validateSearch: (search: Record<string, unknown>) => ({
    gift: typeof search["gift"] === "string" ? (search["gift"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Become a Foundation Member | The Mustard Seed" },
      {
        name: "description",
        content:
          "A monthly gift that funds scholarship paths, the staff who stay with these kids, and the relationships that turn interest into a door a young person can walk through.",
      },
      { property: "og:title", content: "Become a Foundation Member — The Mustard Seed" },
      {
        property: "og:description",
        content:
          "Steady monthly giving that lets us commit to a young person before we know where the funding comes from.",
      },
    ],
  }),
  component: GivePage,
});

function GivePage() {
  const { gift } = Route.useSearch();

  return (
    <div>
      <SiteHeader tone="dark" back={{ to: "/", label: "Home" }} />

      <section className="relative min-h-[70vh] bg-soil text-soil-foreground">
        <img
          src={dutchImg}
          alt="Dutch standing in a shop doorway at dusk"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/80 to-soil/50" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-end px-6 pb-16 pt-40">
          <blockquote className="display-lg">
            <p>
              I had people who invested in me and believed in me long before I ever knew my own
              worth.
            </p>
            <p className="mt-6 text-gold">I'm still talking about them to this day.</p>
          </blockquote>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#give"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 font-display text-lg text-gold-foreground transition-opacity hover:opacity-90"
            >
              Give now <span aria-hidden>↓</span>
            </a>
            <a
              href="#where"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-soil-foreground/35 px-7 py-4 text-base transition-colors hover:border-gold hover:text-gold"
            >
              Where the money goes
            </a>
          </div>
        </div>

      </section>

      <section id="where" className="mx-auto max-w-3xl scroll-mt-16 px-6 py-20">

        <h1 className="display-md">Where the money goes</h1>
        <div className="mt-8 space-y-6 lede">
          <p>
            Scholarship paths for young people who can't cover tuition, tools, or certification.
          </p>
          <p>The staff who answer these kids and stay with them.</p>
          <p>
            The relationships — local shops, national brands, churches, training programs — that
            turn a kid's interest into a door he can walk through.
          </p>
        </div>
      </section>

      <section id="give" className="scroll-mt-16 bg-forest text-forest-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:gap-12 md:py-20">
          <div className="order-2 md:order-1">
            <img
              src={mentorshipImg}
              alt="An experienced tradesman teaching a teenager to use a tool"
              width={1536}
              height={1024}
              loading="lazy"
              className="w-full rounded-sm object-cover"
            />
            <p className="mt-6 text-sm text-forest-foreground/70">
              Monthly is the steady money that lets us commit to a kid before we know where the
              funding is coming from. One-time gifts go straight to the next scholarship.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="display-md">Give once, or every month</h2>
            <p className="mt-4 lede text-forest-foreground/85">
              Pick an amount, or enter your own.
            </p>
            <div className="mt-8">
              <GiveForm />
            </div>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-3xl px-6 py-20">
        <blockquote className="display-md">
          <p>
            &ldquo;Give, and it shall be given unto you; good measure, pressed down, and shaken
            together, and running over, shall men give into your bosom.&rdquo;
          </p>
          <footer className="mt-6 text-lg font-medium text-muted-foreground">— Luke 6:38</footer>
        </blockquote>
      </section>

      <BackBar to="/" label="Back to home" />
      <SiteFooter />
    </div>
  );
}
