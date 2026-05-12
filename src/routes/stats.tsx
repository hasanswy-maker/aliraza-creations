import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/stats")({
  head: () => ({
    meta: [
      { title: "Stats — Ali Raza Creations" },
      { name: "description", content: "2.4B+ views and counting. The numbers behind the cuts: monthly views, viral hits, and the top 5 videos of all time." },
      { property: "og:title", content: "Stats — Ali Raza Creations" },
      { property: "og:description", content: "The data behind the edits." },
    ],
  }),
  component: StatsPage,
});

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

function StatsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">By the numbers</div>
      <h1 className="mt-2 max-w-4xl font-display text-6xl leading-[0.95] md:text-7xl">
        The data <span className="text-gradient-neon">behind the cuts.</span>
      </h1>

      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
        {big.map((s) => (
          <div key={s.l} className="bg-background p-6 md:p-8">
            <div className="font-display text-5xl md:text-5xl text-foreground">{s.v}</div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-card p-6 md:p-8">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Monthly views (millions)</div>
            <div className="mt-1 font-display text-3xl md:text-3xl">Last 12 months</div>
          </div>
          <div className="text-sm text-neon">+571% YoY</div>
        </div>
        <div className="mt-6 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthly}>
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.72 0.27 340)" stopOpacity={0.7} />
                  <stop offset="100%" stopColor="oklch(0.72 0.27 340)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="oklch(1 0 0 / 0.06)" vertical={false} />
              <XAxis dataKey="month" stroke="oklch(0.68 0.02 285)" tickLine={false} axisLine={false} />
              <YAxis stroke="oklch(0.68 0.02 285)" tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ background: "oklch(0.17 0.015 285)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12, color: "oklch(0.97 0.005 285)" }}
                cursor={{ stroke: "oklch(0.72 0.27 340)", strokeWidth: 1 }}
              />
              <Area type="monotone" dataKey="views" stroke="oklch(0.78 0.28 340)" strokeWidth={2.5} fill="url(#g)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-20">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Top 5 viral hits</div>
        <h2 className="mt-2 font-display text-5xl md:text-5xl">Greatest hits.</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {[...sampleVideos].sort((a, b) => parseFloat(b.views ?? "0") - parseFloat(a.views ?? "0")).slice(0, 5).map((v, i) => (
            <VideoTile key={v.id} item={v} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
