import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/ambassadors")({
  head: () => ({
    meta: [
      { title: "Ambassadors — share it, it costs nothing | The Mustard Seed" },
      {
        name: "description",
        content:
          "Hand this to a young person who needs it. Sign up as an ambassador and get links, images, and the four sentences worth sending to somebody.",
      },
      { property: "og:title", content: "Ambassadors — share it, it costs nothing" },
      {
        property: "og:description",
        content: "Every post, every introduction, every time you hand this to a kid who needs it.",
      },
    ],
  }),
  component: AmbassadorsPage,
});

const kit = [
  "The Mustard Seed puts young people into skilled trades — mentorship, training, scholarships, and a real way in.",
  "Twenty-four trades, with what each one actually pays and how you get in, written for a seventeen-year-old.",
  "It's free. There is nothing to qualify for and no application to wait on.",
  "If you know a kid who's good with his hands and short on direction, send him to themustardseed.co/start.",
];

function AmbassadorsPage() {
  return (
    <div>
      <SiteHeader />
      <header className="mx-auto max-w-3xl px-6 pb-10 pt-32 md:pt-40">
        <h1 className="display-lg">Share it.</h1>
        <p className="mt-6 lede text-muted-foreground">
          Every post, every introduction, every time you hand this to a kid who needs it. It costs
          nothing and it is the single most useful thing most people can do.
        </p>
      </header>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="display-md">The four sentences worth sending</h2>
        <ul className="mt-6 space-y-4">
          {kit.map((line) => (
            <li key={line} className="border-l-2 border-gold pl-5 text-lg">
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <h2 className="display-md">Sign up as an ambassador</h2>
          <p className="mt-3 text-muted-foreground">
            We'll send you the links and images, and nothing else.
          </p>
          <div className="mt-8">
            <LeadForm
              buttonLabel="Count me in."
              thanks="We'll send the kit to your inbox shortly."
              fields={[
                { name: "name", label: "Name" },
                { name: "email", label: "Email", type: "email" },
                { name: "where", label: "Where you'll share it", optional: true },
              ]}
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
