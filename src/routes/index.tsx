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
    d: "We discuss your project in detail. Gather all data for the project. Discuss the payment. And start working right way.",
  },
  {
    n: "02",
    t: "Editing",
    d: "I do the magic where it all happens, following everything as discussed.",
  },
  {
    n: "03",
    t: "Delivery",
    d: "I deliver your project. You review the delivery and share the feedback, I do the revisions if needed and deliver you the final version of your project.",
  },

];

const quotes = [
  {
    name: "jordanabe",
    handle: "South Korea",
    followers: "1 month ago",
    lift: "5 stars",
    quote:
      "Working with Ali was better than expected. I ran into an issue about budget but Ali was nice enough to cooperate with me despite that! The work that he had put into the video was quite amazing! He would even check in with me to make sure that details and order I wanted for the video were included.",
  },
  {
    name: "kr0508",
    handle: "United States",
    followers: "2 weeks ago",
    lift: "5 stars",
    quote:
      "Overall Experience: The collaboration was smooth and productive. The freelancer demonstrated a strong understanding of content creation, particularly in transforming podcast material into engaging short-form videos. Professionalism of Work The quality of work was solid and consistent.",
  },
  {
    name: "dejsangowawa",
    handle: "United Kingdom",
    followers: "1 month ago",
    lift: "5 stars",
    quote:
      "Amazing work from Ali despite immense pressure from me to make it work. I want to recommend him to anyone who is looking for professional sleek video editing. He understands what to do with minimal supervision and just a small reference.",
  },
  {
    name: "vlckysl630",
    handle: "Canada",
    followers: "1 month ago",
    lift: "5 stars",
    quote:
      "I had an amazing experience working with Ali. From start to finish, everything was handled professionally and efficiently. The quality of the edits was top-tier, clean cuts, great pacing, and a strong understanding of what makes short-form content engaging.",
  },
  {
    name: "kellzjr",
    handle: "United States",
    followers: "3 weeks ago",
    lift: "5 stars",
    quote:
      "Super easy to work with and has amazing prices. You can tell he enjoys making art for his clients! I want to work with him in the future for my content.",
  },
  {
    name: "comfortobadna",
    handle: "United States",
    followers: "1 month ago",
    lift: "5 stars",
    quote:
      "Ali waa very patient, easy to work with and highly receptive to feedback. He made multiple revisions without an issue and delivered beyond my expectations. Highly recommend!",
  },
  {
    name: "washingmonkey",
    handle: "United States",
    followers: "1 month ago",
    lift: "5 stars",
    quote:
      "I had a lot of different things I wanted him to do and he exceeding my expectations!",
  },
  {
    name: "fhedlger92",
    handle: "Switzerland",
    followers: "1 month ago",
    lift: "5 stars",
    quote:
      "Thanks a lot for the great work. Quick turnaround and high quality video.",
  },
  {
    name: "salamama",
    handle: "United States",
    followers: "3 months ago",
    lift: "5 stars",
    quote:
      "Ali made two versions of the video I sent him and both were absolutely amazing. His attention to detail and his dedication to providing an exceptional and ideal product were unmatched. Highly recommend him for your next video editing project!",
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

<h1
  className="mt-4 text-7xl leading-[0.88] uppercase md:text-8xl lg:text-9xl"
  style={{
    fontFamily: '"Arial Narrow", Arial, sans-serif',
    letterSpacing: "-0.03em",
    fontWeight: 700,
  }}
>
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
  className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:bg-muted"
>
  <span className="text-gradient-neon">Get a Quote</span>
  <ArrowRight className="h-4 w-4 text-[#ff2bd6] transition-transform group-hover:translate-x-1" />
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

 <div className="mt-2 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
    <h2 className="font-display text-6xl leading-[0.9] md:text-7xl">
      Selected cuts.
      <br />
      <span className="text-gradient-neon">Real numbers.</span>
    </h2>

    <a
      href="https://wa.me/923486356131?text=%F0%9F%91%8B%20Hi%20Ali,%20I%20would%20like%20to%20discuss%20my%20project%20with%20you"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex h-fit items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:bg-muted"
    >
      <span className="text-gradient-neon">Get a Quote</span>

      <ArrowRight className="h-4 w-4 text-[#ff2bd6] transition-transform group-hover:translate-x-1" />
    </a>
  </div>

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

<div className="mt-2 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
  <h2 className="max-w-4xl font-display text-6xl leading-[0.95] md:text-7xl">
    Receipts from{" "}
    <span className="text-gradient-neon">
      the people I edit for.
    </span>
  </h2>

  <a
    href="https://wa.me/923486356131?text=%F0%9F%91%8B%20Hi%20Ali,%20I%20would%20like%20to%20discuss%20my%20project%20with%20you"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex h-fit items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:bg-muted"
  >
    <span className="text-gradient-neon">Get a Quote</span>

    <ArrowRight className="h-4 w-4 text-[#ff2bd6] transition-transform group-hover:translate-x-1" />
  </a>
</div>

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
  <h2
className="mt-2 text-4xl leading-tight"
    style={{
      fontFamily: '"Arial Narrow", Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: "-0.03em",
    }}
  >
    <span className="text-gradient-neon">Creators</span> and{" "}
    <span className="text-gradient-neon">Brands</span> I've worked with
  </h2>

  <div className="relative mt-8 overflow-hidden rounded-2xl border border-border bg-border">
    <div className="flex w-max animate-marquee">
      {[
        ...logos,  
        ...logos,
      ].map((l, i) => (
        <div
          key={`${l}-${i}`}
          className="flex h-24 min-w-[220px] items-center justify-center border-r border-border bg-background px-8 text-base text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
          style={{
            fontFamily: '"Arial Narrow", Arial, sans-serif',
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          {l}
        </div>
      ))}
    </div>
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
            I'm Ali Raza. 6 years of video editing for multiple creators and brands. 
            I've helped over 60 creators and brands to reach their desired goals.
              </p>
              <p>
           I understand the algorithm and your audience mindset. And that's how my edited 
           videos perform outstanding on your socials.
              </p>
              <p>
          I always prioritize communication to keep you updated about the progress.
              </p>
            </div>
            <a
  href="https://wa.me/923486356131?text=%F0%9F%91%8B%20Hi%20Ali,%20I%20would%20like%20to%20discuss%20my%20project%20with%20you"
  target="_blank"
  rel="noopener noreferrer"
className="mt-8 group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:bg-muted"
>
  <span className="text-gradient-neon">Get a Quote</span>
  <ArrowRight className="h-4 w-4 text-[#ff2bd6] transition-transform group-hover:translate-x-1" />
</a>


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


    </main>
  );
}