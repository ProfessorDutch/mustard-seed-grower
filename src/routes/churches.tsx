import { createFileRoute } from "@tanstack/react-router";
import churchImg from "@/assets/church.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BackBar } from "@/components/site/BackBar";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/churches")({
  head: () => ({
    meta: [
      { title: "For churches — bring this to your young people | The Mustard Seed" },
      {
        name: "description",
        content:
          "Partner with The Mustard Seed to bring trades mentorship to the young people in your congregation — and help a family find a church home.",
      },
      { property: "og:title", content: "Bring this to the young people in your congregation" },
      {
        property: "og:description",
        content:
          "Church partnership for trades mentorship, and help finding a church for a young person or family who doesn't have one.",
      },
    ],
  }),
  component: ChurchesPage,
});

function ChurchesPage() {
  return (
    <div>
      <SiteHeader tone="dark" back={{ to: "/", label: "Home" }} />

      <section className="relative min-h-[60vh] bg-soil text-soil-foreground">
        <img
          src={churchImg}
          alt="A congregation gathered outside a small country church"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil via-soil/75 to-soil/40" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-end px-6 pb-14 pt-40">
          <h1 className="display-lg">
            There's a kid in your church who's good with his hands and{" "}
            <span className="text-gold">nobody has told him it matters.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="display-md">Bring this to your congregation</h2>
        <p className="mt-6 lede">
          We'll come talk to your youth, bring the trade material, and stay with the young people
          who raise a hand. There is no cost to the church and no cost to the family.
        </p>
        <div className="mt-10">
          <LeadForm
            buttonLabel="Let's talk."
            thanks="Thank you. Somebody from The Mustard Seed will follow up with you directly."
            fields={[
              { name: "name", label: "Your name" },
              { name: "church", label: "Church" },
              { name: "role", label: "Your role", optional: true },
              { name: "email", label: "Email", type: "email" },
              { name: "city", label: "City and state" },
            ]}
          />
        </div>
      </section>

      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <h2 className="display-md">Find a church</h2>
          <p className="mt-6 lede text-forest-foreground/85">
            If you or your family don't have one, tell us where you are and we'll point you to
            churches near you that we know and trust.
          </p>
          <div className="mt-8">
            <LeadForm
              tone="dark"
              buttonLabel="Help me find one."
              thanks="We'll send you a few churches near you, with a name to ask for at each one."
              fields={[
                { name: "name", label: "Your name" },
                { name: "email", label: "Email", type: "email" },
                { name: "city", label: "City and state" },
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
