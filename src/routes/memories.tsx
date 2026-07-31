import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BackBar } from "@/components/site/BackBar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/memories")({
  head: () => ({
    meta: [
      { title: "Who believed in you first? | The Mustard Seed" },
      {
        name: "description",
        content:
          "Share the person who believed in you before you'd earned it. These memories become episodes of The Genesis Moment — and they cost you nothing but the memory.",
      },
      { property: "og:title", content: "Who believed in you first?" },
      {
        property: "og:description",
        content:
          "A short form about the person who invested in you before you knew your own worth.",
      },
    ],
  }),
  component: MemoriesPage,
});

function MemoriesPage() {
  return (
    <div>
      <SiteHeader back={{ to: "/", label: "Home" }} />
      <header className="mx-auto max-w-3xl px-6 pb-10 pt-32 md:pt-40">
        <h1 className="display-lg">Who believed in you first?</h1>
        <p className="mt-6 lede text-muted-foreground">
          Before you had earned it. Before there was any reason to. Most people can name them in
          about two seconds, and most people have never told anyone the story.
        </p>
      </header>

      <section className="mx-auto max-w-2xl px-6 pb-20">
        <LeadForm
          buttonLabel="Tell it."
          thanks="Thank you. Some of these become episodes of The Genesis Moment — we'll ask you first if yours is one of them."
          fields={[
            { name: "their-name", label: "Their name" },
            { name: "what", label: "What they did", type: "textarea" },
            { name: "now", label: "Where you are now", type: "textarea", optional: true },
            { name: "your-name", label: "Your name", optional: true },
            { name: "email", label: "Email", type: "email", optional: true },
          ]}
        />
      </section>

      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="font-display text-2xl leading-snug">
            Somebody does that for a kid, and the kid spends the rest of his life telling people
            about it.
          </p>
          <a
            href="https://thegenesismoment.com"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 underline underline-offset-8"
          >
            The Genesis Moment <span className="text-gold">→</span>
          </a>
        </div>
      </section>

      <BackBar to="/" label="Back to home" />
      <SiteFooter />
    </div>
  );
}
