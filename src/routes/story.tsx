import { createFileRoute } from "@tanstack/react-router";
import dutchImg from "@/assets/dutch.jpg";
import crisisImg from "@/assets/crisis-tree.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BackBar } from "@/components/site/BackBar";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Jason \"Dutch\" Brown — the kid, the idea he set down, the tree" },
      {
        name: "description",
        content:
          "Born into poverty in Georgia. Grass at eight, accounts at ten, pine straw at $2.35 a bag. Three industries changed without a degree. And on June 16, 2025, a tree came through his roof.",
      },
      { property: "og:title", content: "Jason \"Dutch\" Brown — the founder of The Mustard Seed" },
      {
        property: "og:description",
        content:
          "He was the kid. He refused the fast money. Then it started raining.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <div>
      <SiteHeader tone="dark" back={{ to: "/", label: "Home" }} />

      <section className="relative min-h-[70vh] bg-soil text-soil-foreground">
        <img
          src={dutchImg}
          alt="Dutch standing in a shop doorway at dusk"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/75 to-soil/40" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-end px-5 pb-14 pt-40 sm:px-6">
          <p className="eyebrow text-gold">Jason "Dutch" Brown, founder</p>
          <h1 className="display-lg mt-4">Our founder was one of those kids.</h1>
        </div>
      </section>

      <article className="mx-auto max-w-2xl px-5 py-16 sm:px-6 md:py-24">
        <div className="space-y-6 text-xl leading-relaxed">
          <p>
            Born into poverty in Georgia. Cutting grass at eight. Holding the accounts at ten —
            assigning yards to the other kids and splitting the take.
          </p>
          <p>
            Baling pine straw at $2.35 a bag and selling it a hundred bags at a time to the
            landscapers at his church.
          </p>
          <p>
            He quit school when his father fell off a ladder and broke his back. Took a GED. Went to
            work. Handed the money to the family.
          </p>
          <p>
            Somewhere in there a teenager got on his knees and asked God for one thing: that he
            would not have to live the way his parents lived.
          </p>
        </div>

        <hr className="my-14 border-t border-border" />

        <h2 className="display-md">The pattern</h2>
        <div className="mt-6 space-y-6 text-xl leading-relaxed">
          <p>
            He has never held a degree, a license, or a title. And he changed the world around us in
            three different industries.
          </p>
          <p className="text-muted-foreground">
            That is the proof, not the point. The long version lives at{" "}
            <a
              href="https://jasondutchbrown.com"
              rel="noreferrer"
              className="text-foreground underline underline-offset-4"
            >
              jasondutchbrown.com
            </a>
            .
          </p>
        </div>

        <hr className="my-14 border-t border-border" />

        <h2 className="display-md">The idea he set down</h2>
        <div className="mt-6 space-y-6 text-xl leading-relaxed">
          <p>
            He wanted it built so cleanly that people would look at it and think: if that's what God
            is, that's what I want to be.
          </p>
          <p>
            He knew the fast way to fund it — leverage people's faith to open their wallets. He
            refused it. A thing built to be pure cannot be built on manipulation.
          </p>
          <p>
            So he set it down. Stopped thinking about it. And told God plainly that if this was
            supposed to open, he would have to be shown.
          </p>
        </div>
      </article>

      <section className="bg-soil text-soil-foreground">
        <img
          src={crisisImg}
          alt="A fallen tree through the roof of a house at dawn"
          width={1536}
          height={1024}
          loading="lazy"
          className="h-[40vh] w-full object-cover opacity-80 md:h-[55vh]"
        />
        <div className="mx-auto max-w-2xl px-5 py-16 sm:px-6 md:py-24">
          <h2 className="display-md">The tree</h2>
          <div className="mt-6 space-y-6 text-xl leading-relaxed text-soil-foreground/90">
            <p>June 16, 2025.</p>
            <p>
              Gas hissing from the line. Two air conditioners crushed. A retaining wall that held
              and caught the tree as it came off the house.
            </p>
            <p>Six trades. Roughly $60,000. Ten days.</p>
            <p className="text-gold">Twelve calls per service before anyone answered.</p>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-2xl px-5 py-16 sm:px-6 md:py-24">
        <h2 className="display-md">The heart</h2>
        <div className="mt-6 space-y-6 text-xl leading-relaxed">
          <p>
            In his words: despite his heart toward people, his heart had hardened. The tree is what
            healed it.
          </p>
          <p>Clarity came on every front.</p>
        </div>

        <blockquote className="mt-16 border-l-2 border-gold pl-6 font-display text-3xl leading-snug md:text-4xl">
          <p>I know what Noah must have felt like — building an ark in the desert.</p>
          <p className="mt-6 text-gold">And then it started raining.</p>
        </blockquote>
      </article>

      <div className="mx-auto max-w-2xl px-5 pb-20 sm:px-6">
        <div className="flex flex-wrap gap-6 border-t border-border pt-8">
          <a
            href="https://jasondutchbrown.com"
            rel="noreferrer"
            className="text-lg underline underline-offset-8"
          >
            jasondutchbrown.com <span className="text-gold">→</span>
          </a>
          <a
            href="https://meetemmy.com/the-tree"
            rel="noreferrer"
            className="text-lg underline underline-offset-8"
          >
            meetemmy.com/the-tree <span className="text-gold">→</span>
          </a>
        </div>
      </div>

      <BackBar to="/" label="Back to home" />
      <SiteFooter />
    </div>
  );
}
