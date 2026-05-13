import { createFileRoute } from "@tanstack/react-router";
import { Film, Layers, Music, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about-old")({
  head: () => ({
    meta: [
      { title: "About — Ali Raza Creations" },
      { name: "description", content: "I'm Ali Raza, a short-form video editor obsessed with hooks, pacing, and pattern interrupts. Based on the internet." },
      { property: "og:title", content: "About — Ali Raza Creations" },
      { property: "og:description", content: "Meet the editor behind the cuts." },
    ],
  }),
  component: AboutPage,
});

const tools = [
  { name: "Premiere Pro", icon: Film },
  { name: "After Effects", icon: Layers },
  { name: "CapCut", icon: Sparkles },
  { name: "DaVinci Resolve", icon: Film },
  { name: "Sound Design", icon: Music },
];

const steps = [
  { n: "01", t: "Brief", d: "We talk about the channel, the goal, and the audience. I review raw footage and references." },
  { n: "02", t: "Hook", d: "I draft 3 different opening hooks. We pick the one that breaks the scroll." },
  { n: "03", t: "Cut", d: "First draft within 48h. Pacing tuned to retention curves, not gut feel." },
  { n: "04", t: "Polish", d: "Sound design, captions, color, motion. Export. Ship. Watch it climb." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-neon/30 via-accent/20 to-surface shadow-elevated">
          <div className="absolute inset-0 grid place-items-center font-display text-9xl text-foreground/10">AR</div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">About</div>
          <h1 className="mt-2 font-display text-5xl leading-[0.95] md:text-6xl">
            I make the <span className="text-gradient-neon">first 1.5 seconds</span> impossible to scroll past.
          </h1>
          <div className="mt-8 space-y-5 text-muted-foreground">
            <p>I'm Ali Raza. Six years editing short-form video for creators and brands. I've shipped over 4,000 vertical videos and watched a lot of retention curves.</p>
            <p>My philosophy is simple: the algorithm doesn't care about your edit. The viewer does. I cut for the human watching with their thumb already moving.</p>
            <p>I work async, I don't ghost, and I treat your channel like it's mine.</p>
          </div>

          <div className="mt-12">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Tools</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((t) => (
                <div key={t.name} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-2 text-sm">
                  <t.icon className="h-4 w-4 text-neon" />
                  {t.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Process</div>
        <h2 className="mt-2 font-display text-5xl md:text-5xl">How it goes.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-5xl text-gradient-neon">{s.n}</div>
              <div className="mt-3 font-display text-2xl">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
