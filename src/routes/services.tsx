import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Rates — Ali Raza Creations" },
      { name: "description", content: "Single edits, monthly retainers, and full channel management for short-form video. Transparent rates." },
      { property: "og:title", content: "Services & Rates — Ali Raza Creations" },
      { property: "og:description", content: "Choose the package that fits your channel." },
    ],
  }),
  component: ServicesPage,
});

const tiers = [
  {
    name: "Per Video",
    price: "$30",
    cadence: "/ video",
    blurb: "One-off vertical edit. The fastest way to test the vibe.",
    features: [
      "Up to 60s vertical edit",
      "Hook + captions + B-roll",
      "Sound design & music sync",
      "2 revision rounds",
      "48h turnaround",
    ],
    highlight: false,
  },
  {
    name: "Hourly",
    price: "$15",
    cadence: "/ hour",
    blurb: "Pay only for the time I spend on your timeline.",
    features: [
      "Edit, color, sound, motion — your call",
      "Daily timesheet, transparent logs",
      "Great for ongoing tweaks",
      "No minimum hours",
      "Async-friendly",
    ],
    highlight: false,
  },
  {
    name: "Monthly Subscription",
    price: "Custom",
    cadence: "/ month",
    blurb: "A set number of videos every month at a locked rate. The sweet spot for serious creators.",
    features: [
      "Volume-based discount",
      "Hook A/B variants",
      "Trend tracking",
      "Unlimited revisions",
      "Shared Frame.io workspace",
      "Direct WhatsApp line to me",
    ],
    highlight: true,
  },
];

const faqs = [
  { q: "How fast is turnaround?", a: "Single edits: 48 hours. Retainers: typically same-day to 24 hours depending on volume." },
  { q: "Do you handle raw footage?", a: "Yes. Drop a Drive/Dropbox link or sync via Frame.io. I sort, label, and back everything up." },
  { q: "What if I don't love the cut?", a: "Revisions are unlimited on retainers and capped at 2 rounds for single edits. Most clients land it on round 1." },
  { q: "Can you match my channel's style?", a: "That's the job. Send me 3-5 reference videos and I'll dial in pacing, captions, and sound design to match." },
  { q: "Do you offer a trial?", a: "First retainer month is risk-free. If you don't see lift in retention or views, you don't pay." },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">Services & Rates</div>
      <h1 className="mt-2 max-w-4xl font-display text-6xl leading-[0.95] md:text-7xl">
        Pick a lane. <span className="text-gradient-neon">Start shipping.</span>
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Transparent pricing. No retainers held hostage. Cancel anytime.</p>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={
              "relative rounded-3xl border bg-card p-8 transition-transform hover:-translate-y-1 " +
              (t.highlight ? "border-neon shadow-neon" : "border-border")
            }
          >
            {t.highlight && (
              <div className="absolute -top-3 left-8 rounded-full bg-gradient-neon px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                Most popular
              </div>
            )}
            <div className="font-display text-3xl">{t.name}</div>
            <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-5xl">{t.price}</span>
              <span className="text-sm text-muted-foreground">{t.cadence}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={
                "mt-8 inline-flex w-full justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors " +
                (t.highlight
                  ? "bg-gradient-neon text-primary-foreground shadow-neon"
                  : "border border-border text-foreground hover:bg-muted")
              }
            >
              Get started
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-24 max-w-3xl">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">FAQ</div>
        <h2 className="mt-2 font-display text-5xl md:text-5xl">Questions, answered.</h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-lg">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
