import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Film,
  Layers,
  Music,
  Quote,
  Sparkles,
} from "lucide-react";

import { VideoTile } from "../components/video-tile";
import { sampleVideos } from "../lib/sample-videos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ali Raza Creations" },
      {
        name: "description",
        content:
          "Short-form video editor. Hooks, pacing, captions, sound design, and scroll-stopping edits.",
      },
    ],
  }),
  component: HomePage,
});

const heroStats = [
  { value: "20M+", label: "Total Views" },
  { value: "700+", label: "Total Projects Done" },
  { value: "60+", label: "Creators Edited For" },
  { value: "+38%", label: "Avg. Watch-Time Lift" },
];

const tools = [
  { name: "Premiere Pro", icon: Film },
  { name: "After Effects", icon: Layers },
  { name: "CapCut", icon: Sparkles },
  { name: "DaVinci Resolve", icon: Film },
  { name: "Sound Design", icon: Music },
];

const steps = [
  {
    n: "01",
    t: "Brief",
    d: "We talk about the channel, the goal, and the audience. I review raw footage and references.",
  },
  {
    n: "02",
    t: "Hook",
    d: "I draft 3 different opening hooks. We pick the one that breaks the scroll.",
  },
  {
    n: "03",
    t: "Cut",
    d: "First draft within 48h. Pacing tuned to retention curves, not gut feel.",
  },
  {
    n: "04",
    t: "Polish",
    d: "Sound design, captions, color, motion. Export. Ship. Watch it climb.",
  },
];

const quotes = [
  {
    name: "Maya R.",
    handle: "@mayalifts",
    followers: "3.2M",
    lift: "+412% avg views",
    quote:
      "Ali turned my dead channel into a 3M follower machine in eight months. The hooks alone are worth the retainer.",
  },
  {
    name: "Devon K.",
    handle: "@devonbuilds",
    followers: "880K",
    lift: "+220% retention",
    quote:
      "I've worked with five editors. Nobody else makes me look this fast and this clean. Period.",
  },
  {
    name: "PRIME LABS",
    handle: "@primelabs",
    followers: "1.4M",
    lift: "12 viral hits in Q1",
    quote:
      "Our paid social CPMs dropped 38% after switching to organic-style edits from Ali. It just works.",
  },
  {
    name: "Jules A.",
    handle: "@julesattheparty",
    followers: "2.1M",
    lift: "+1.8B total views",
    quote:
      "Async, on time, brilliant taste. I never have to explain a reference twice.",
  },
  {
    name: "NEON FM",
    handle: "@neonfm",
    followers: "640K",
    lift: "+5x repost rate",
    quote:
      "Ali understands music edits in a way most editors don't. The transitions hit like the drop.",
  },
  {
    name: "Theo L.",
    handle: "@theotalksmoney",
    followers: "1.1M",
    lift: "First 10M-view video",
    quote:
      "Sent him a rambling 18-minute monologue. He gave me back the best 47 seconds of my life.",
  },
];

const logos = [
  "Dr.B Bay",
  "Vertex Marketing Agency",
  "Adadvisors",
  "Valley Furniture",
  "Happy Lawn",
];

const monthly = [
  { month: "Jun", views: 78 },
  { month: "Jul", views: 112 },
  { month: "Aug", views: 145 },
  { month: "Sep", views: 198 },
  { month: "Oct", views: 234 },
  { month: "Nov", views: 287 },
  { month: "Dec", views: 312 },
  { month: "Jan", views: 268 },
  { month: "Feb", views: 341 },
  { month: "Mar", views: 402 },
  { month: "Apr", views: 478 },
  { month: "May", views: 524 },
];

const big = [
  { value: "20M+", label: "Total Views" },
  { value: "700+", label: "Total Projects Done" },
  { value: "60+", label: "Creators Edited For" },
  { value: "+38%", label: "Avg. Watch-Time Lift" },
];

function HomePage() {
  const maxViews = Math.max(...monthly.map((m) => m.views));

  return (
    <main>
      <section
        id="home"
        className="mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl scroll-mt-28 flex-col justify-center px-6 py-24"
      >
        <div className="max-w-5xl">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Short-form video editor
          </div>

          <h1 className="mt-4 font-display text-7xl leading-[0.85] md:text-8xl lg:text-9xl">
            We edit shorts
            <br />
            that hit <span className="text-gradient-neon">millions.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Vertical video editor for creators and brands who refuse to be
            skipped. Hook in 1.5 seconds. Hold to the last frame. Loop them back
            in.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">


            <a
              href="https://wa.me/923486356131?text=%F0%9F%91%8B%20Hi%20Ali,%20I%20would%20like%20to%20discuss%20my%20project%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-background p-6 md:p-8">
              <div className="font-display text-5xl text-foreground">
                {stat.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="portfolio"
        className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20"
      >
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          The Work
        </div>

        <h2 className="mt-2 font-display text-6xl leading-[0.9] md:text-7xl">
          Selected cuts.
          <br />
          <span className="text-gradient-neon">Real numbers.</span>
        </h2>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          A rolling archive of edits.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {sampleVideos.map((v, i) => (
            <VideoTile key={v.id} item={v} index={i} />
          ))}
        </div>
      </section>

      <section
        id="reviews"
        className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20"
      >
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          Clients & Testimonials
        </div>

        <h2 className="mt-2 max-w-4xl font-display text-6xl leading-[0.95] md:text-7xl">
          Receipts from{" "}
          <span className="text-gradient-neon">the people I edit for.</span>
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <div
              key={q.name}
              className="group relative rounded-3xl border border-border bg-card p-7 transition-colors hover:border-neon/60"
            >
              <Quote className="h-8 w-8 text-neon" />
              <p className="mt-4 text-foreground">"{q.quote}"</p>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <div className="font-semibold">{q.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {q.handle} · {q.followers}
                  </div>
                </div>

                <div className="rounded-full bg-neon/10 px-3 py-1 text-xs font-semibold text-neon">
                  {q.lift}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Brands & creators
          </div>

          <h2 className="mt-2 font-display text-4xl">
            A few names you might know.
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4 lg:grid-cols-6">
            {logos.map((l) => (
              <div
                key={l}
                className="grid h-24 place-items-center bg-background font-display text-base text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-neon/30 via-accent/20 to-surface shadow-elevated">
            <div className="absolute inset-0 grid place-items-center font-display text-9xl text-foreground/10">
              AR
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              About
            </div>

            <h2 className="mt-2 font-display text-5xl leading-[0.95] md:text-6xl">
              I make the{" "}
              <span className="text-gradient-neon">first 1.5 seconds</span>{" "}
              impossible to scroll past.
            </h2>

            <div className="mt-8 space-y-5 text-muted-foreground">
              <p>
                I'm Ali Raza. Six years editing short-form video for creators
                and brands. I've shipped over 4,000 vertical videos and watched
                a lot of retention curves.
              </p>
              <p>
                My philosophy is simple: the algorithm doesn't care about your
                edit. The viewer does. I cut for the human watching with their
                thumb already moving.
              </p>
              <p>
                I work async, I don't ghost, and I treat your channel like it's
                mine.
              </p>
            </div>

            <div className="mt-12">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Tools
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <div
                    key={t.name}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-sm"
                  >
                    <t.icon className="h-4 w-4 text-neon" />
                    {t.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Process
          </div>

          <h2 className="mt-2 font-display text-5xl">How it goes.</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="font-display text-5xl text-gradient-neon">
                  {s.n}
                </div>
                <div className="mt-3 font-display text-2xl">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stats"
        className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20"
      >
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          By the numbers
        </div>

        <h2 className="mt-2 max-w-4xl font-display text-6xl leading-[0.95] md:text-7xl">
          The data <span className="text-gradient-neon">behind the cuts.</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
{big.map((s) => (
  <div key={s.label} className="bg-background p-6 md:p-8">
    <div className="font-display text-5xl text-foreground">
      {s.value}
    </div>
    <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
      {s.label}
    </div>
  </div>
))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card p-6 md:p-8">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Monthly views
              </div>
              <div className="mt-1 font-display text-3xl">Last 12 months</div>
            </div>
            <div className="text-sm text-neon">+571% YoY</div>
          </div>

          <div className="mt-8 flex h-72 items-end gap-3">
            {monthly.map((m) => (
              <div key={m.month} className="flex h-full flex-1 flex-col justify-end gap-2">
                <div
                  className="rounded-t-lg bg-gradient-neon"
                  style={{ height: `${(m.views / maxViews) * 100}%` }}
                  title={`${m.month}: ${m.views}M`}
                />
                <div className="text-center text-xs text-muted-foreground">
                  {m.month}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}