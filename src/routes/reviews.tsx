import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Clients & Testimonials — Ali Raza Creations" },
      { name: "description", content: "What creators and brands say about working with Ali Raza Creations — and the numbers we hit together." },
      { property: "og:title", content: "Clients & Testimonials — Ali Raza Creations" },
      { property: "og:description", content: "Real words from creators we've grown." },
    ],
  }),
  component: TestimonialsPage,
});

const quotes = [
  { name: "Maya R.", handle: "@mayalifts", followers: "3.2M", lift: "+412% avg views", quote: "Ali turned my dead channel into a 3M follower machine in eight months. The hooks alone are worth the retainer." },
  { name: "Devon K.", handle: "@devonbuilds", followers: "880K", lift: "+220% retention", quote: "I've worked with five editors. Nobody else makes me look this fast and this clean. Period." },
  { name: "PRIME LABS", handle: "@primelabs", followers: "1.4M", lift: "12 viral hits in Q1", quote: "Our paid social CPMs dropped 38% after switching to organic-style edits from Ali. It just works." },
  { name: "Jules A.", handle: "@julesattheparty", followers: "2.1M", lift: "+1.8B total views", quote: "Async, on time, brilliant taste. I never have to explain a reference twice." },
  { name: "NEON FM", handle: "@neonfm", followers: "640K", lift: "+5x repost rate", quote: "Ali understands music edits in a way most editors don't. The transitions hit like the drop." },
  { name: "Theo L.", handle: "@theotalksmoney", followers: "1.1M", lift: "First 10M-view video", quote: "Sent him a rambling 18-minute monologue. He gave me back the best 47 seconds of my life." },
];

const logos = ["Dr.B Bay","Vertex Marketing Agency","Adadvisors","Valley Furniture","Happy Lawn"];

function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">Clients & Testimonials</div>
      <h1 className="mt-2 max-w-4xl font-display text-6xl leading-[0.95] md:text-7xl">
        Receipts from <span className="text-gradient-neon">the people I edit for.</span>
      </h1>

      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {quotes.map((q) => (
          <div key={q.name} className="group relative rounded-3xl border border-border bg-card p-7 transition-colors hover:border-neon/60">
            <Quote className="h-8 w-8 text-neon" />
            <p className="mt-4 text-foreground">"{q.quote}"</p>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <div>
                <div className="font-semibold">{q.name}</div>
                <div className="text-xs text-muted-foreground">{q.handle} · {q.followers}</div>
              </div>
              <div className="rounded-full bg-neon/10 px-3 py-1 text-xs font-semibold text-neon">{q.lift}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Brands & creators</div>
        <h2 className="mt-2 font-display text-4xl md:text-4xl">A few names you might know.</h2>
        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4 lg:grid-cols-6">
          {logos.map((l) => (
            <div key={l} className="grid h-24 place-items-center bg-background font-display text-base text-muted-foreground transition-colors hover:bg-surface hover:text-foreground">
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
