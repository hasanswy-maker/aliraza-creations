import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { VideoTile } from "../components/video-tile";
import { sampleVideos } from "../lib/sample-videos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ali Raza Creations — Short-form video editor with 20M+ views" },
      { name: "description", content: "I'm Ali Raza — I edit short-form videos that go viral. Hooks, pacing, and cuts that earn billions of views on TikTok, Reels, and Shorts." },
      { property: "og:title", content: "Ali Raza Creations — Short-form video editor" },
      { property: "og:description", content: "Hooks, pacing, and cuts that earn billions of views." },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "Total Views", value: "20M+" },
  { label: "Total Projects Done", value: "700+" },
  { label: "Creators Edited For", value: "60+" },
  { label: "Avg. Watch-Time Lift", value: "+38%" },
];

const logos = ["Dr.B Bay","Vertex Marketing Agency","Adadvisors","Valley Furniture","Happy Lawn"];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground backdrop-blur">
              <Sparkles className="h-3 w-3 text-neon" />
              Now booking Q3 2026
            </div>
            <h1 className="mt-6 font-display text-6xl leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
              We edit shorts <br />
              that <span className="text-gradient-neon">hit millions.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Vertical video editor for creators and brands who refuse to be skipped. Hook in 1.5 seconds. Hold to the last frame. Loop them back in.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
 <Link
  to="https://wa.me/923486356131?text=%F0%9F%91%8B%20Hi%20Ali,%20I%20would%20like%20to%20discuss%20my%20project%20with%20you"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-muted"
>
  Get a quote
  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</Link>
              {/* <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Let's chat
              </Link> */}
            </div>
          </motion.div>

          {/* Stat ticker */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-background p-6"
              >
                <div className="font-display text-4xl text-foreground md:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED REEL */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Featured / 2026</div>
            <h2 className="mt-2 font-display text-5xl md:text-5xl">Cuts that broke the algorithm</h2>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            All work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {sampleVideos.slice(0, 4).map((v, i) => <VideoTile key={v.id} item={v} index={i} />)}
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <section className="border-y border-border bg-surface/50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center text-xs uppercase tracking-widest text-muted-foreground">Trusted by creators & brands</div>
          <div className="mt-6 overflow-hidden">
            <div className="marquee flex w-max gap-16 whitespace-nowrap font-display text-2xl text-muted-foreground">
              {[...logos, ...logos].map((l, i) => (
                <span key={i} className="opacity-60 transition-opacity hover:opacity-100">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <TrendingUp className="mx-auto h-10 w-10 text-neon" />
        <h2 className="mt-6 font-display text-5xl md:text-6xl">Got a video that deserves to pop off?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Tell me about the channel, the goal, and the deadline. I'll tell you if I can make it move.</p>
 <Link
  to="https://wa.me/923486356131?text=%F0%9F%91%8B%20Hi%20Ali,%20I%20would%20like%20to%20discuss%20my%20project%20with%20you"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-muted"
>
  Get a quote
  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
</Link>
      </section>
    </div>
  );
}
