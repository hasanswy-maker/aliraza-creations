import { createFileRoute } from "@tanstack/react-router";
import { VideoTile } from "../components/video-tile";
import { sampleVideos } from "../lib/sample-videos";

export const Route = createFileRoute("/portfolio-old")({
  head: () => ({
    meta: [
      { title: "Work — Ali Raza Creations" },
      { name: "description", content: "Vertical video edits for creators and brands. Hooks, B-roll, captions, sound design — every frame earns its place." },
      { property: "og:title", content: "Work — Ali Raza Creations" },
      { property: "og:description", content: "Selected vertical video edits and case studies." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">The Work</div>
      <h1 className="mt-2 font-display text-6xl leading-[0.9] md:text-7xl">Selected cuts.<br/><span className="text-gradient-neon">Real numbers.</span></h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">A rolling archive of edits.</p>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {sampleVideos.map((v, i) => <VideoTile key={v.id} item={v} index={i} />)}
      </div>
      {sampleVideos.length === 0 && (
        <div className="mt-20 text-center text-muted-foreground">No videos yet.</div>
      )}
    </div>
  );
}
