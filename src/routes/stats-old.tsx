import { createFileRoute } from "@tanstack/react-router";
import { Film, Layers, Music, Quote, Sparkles } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { VideoTile } from "../components/video-tile";
import { sampleVideos } from "../lib/sample-videos";

export const Route = createFileRoute("/stats-old")({
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
  { v: "2.4B+", l: "Total views (lifetime)" },
  { v: "147", l: "Videos over 1M views" },
  { v: "23", l: "Videos over 10M views" },
  { v: "+38%", l: "Avg watch-time lift" },
];

function HomePage() {
  return (
    <main>
      {/* PORTFOLIO */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          The Work
        </div>

        <h1 className="mt-2 font-display text-6xl leading-[0.9] md:text-7xl">
          Selected cuts.
          <br />
          <span className="text-gradient-neon">Real numbers.</span>
        </h1>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          A rolling archive of edits.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {sampleVideos.map((v, i) => (
            <VideoTile key={v.id} item={v} index={i} />
          ))}
        </div>

        {sampleVideos.length === 0 && (
          <div className="mt-20 text-center text-muted-foreground">
            No videos yet.
          </div>
        )}
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
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

          <h2 className="mt-2 font-display text-5xl md:text-5xl">
            How it goes.
          </h2>

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

      {/* REVIEWS */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20">
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

          <h2 className="mt-2 font-display text-4xl md:text-4xl">
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

      {/* STATS */}
      <section id="stats" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          By the numbers
        </div>

        <h2 className="mt-2 max-w-4xl font-display text-6xl leading-[0.95] md:text-7xl">
          The data <span className="text-gradient-neon">behind the cuts.</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {big.map((s) => (
            <div key={s.l} className="bg-background p-6 md:p-8">
              <div className="font-display text-5xl text-foreground md:text-5xl">
                {s.v}
              </div>

              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card p-6 md:p-8">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Monthly views (millions)
              </div>

              <div className="mt-1 font-display text-3xl md:text-3xl">
                Last 12 months
              </div>
            </div>

            <div className="text-sm text-neon">+571% YoY</div>
          </div>

          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthly}>
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="oklch(0.72 0.27 340)"
                      stopOpacity={0.7}
                    />
                    <stop
                      offset="100%"
                      stopColor="oklch(0.72 0.27 340)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />

                <XAxis
                  dataKey="month"
                  stroke="oklch(0.68 0.02 285)"
                  tickLine={false}
                  axisLine={false}
                />

                <YAxis
                  stroke="oklch(0.68 0.02 285)"
                  tickLine={false}
                  axisLine={false}
                />

                <Tooltip
                  contentStyle={{
                    background: "oklch(0.17 0.015 285)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                    borderRadius: 12,
                    color: "oklch(0.97 0.005 285)",
                  }}
                  cursor={{
                    stroke: "oklch(0.72 0.27 340)",
                    strokeWidth: 1,
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="oklch(0.78 0.28 340)"
                  strokeWidth={2.5}
                  fill="url(#g)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Top 5 viral hits
          </div>

          <h2 className="mt-2 font-display text-5xl md:text-5xl">
            Greatest hits.
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
            {[...sampleVideos]
              .sort((a, b) => parseFloat(b.views) - parseFloat(a.views))
              .slice(0, 5)
              .map((v, i) => (
                <VideoTile key={v.id} item={v} index={i} />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}