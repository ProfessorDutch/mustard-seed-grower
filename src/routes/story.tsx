import { createFileRoute } from "@tanstack/react-router";
import dutchImg from "@/assets/dutch.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "The story — Dutch, the mustard seed, the tree, the ark | The Mustard Seed" },
      {
        name: "description",
        content:
          "Why The Mustard Seed exists, in Dutch's own words: the seed carried for years, the tree, and the ark built in the desert before it started raining.",
      },
      { property: "og:title", content: "The story behind The Mustard Seed" },
      {
        property: "og:description",
        content: "Dutch, the mustard seed carried for years, the tree, and the ark in the desert.",
      },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <div>
      <SiteHeader tone="dark" />

      <section className="relative min-h-[70vh] bg-soil text-soil-foreground">
        <img
          src={dutchImg}
          alt="Dutch standing in a shop doorway at dusk"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/75 to-soil/40" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-end px-6 pb-14 pt-40">
          <h1 className="display-lg">
            He carried the seed for years <span className="text-gold">before he planted it.</span>
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-2xl px-6 py-20">
        <blockquote className="space-y-8 font-display text-2xl leading-snug">
          <p>
            I had people who invested in me and believed in me long before I ever knew my own worth.
          </p>
          <p className="text-[var(--gold)]">I'm still talking about them to this day.</p>
        </blockquote>

        <div className="mt-14 space-y-6 lede">
          <p className="rounded-sm border border-dashed border-border p-6 text-base text-muted-foreground">
            Dutch's full account goes here, unedited and at length — the mustard seed carried for
            years and set down rather than funded the easy way, the tree, and the ark built in the
            desert before it started raining. No commentary appended. To be supplied.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-6">
          <a
            href="https://jasondutchbrown.com"
            rel="noreferrer"
            className="underline underline-offset-8"
          >
            jasondutchbrown.com <span className="text-[var(--gold)]">→</span>
          </a>
          <a
            href="https://meetemmy.com/the-tree"
            rel="noreferrer"
            className="underline underline-offset-8"
          >
            meetemmy.com/the-tree <span className="text-[var(--gold)]">→</span>
          </a>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
