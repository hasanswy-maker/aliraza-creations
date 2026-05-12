import { motion } from "framer-motion";
import { Play } from "lucide-react";


export type VideoItem = {
  id: string;
  title: string;
  views: string;
  platform: "TikTok" | "Reels" | "Shorts";
  niche: string;
  poster: string;
  video: string;
};

// export type VideoItem = {
//   id: string;
//   title: string;
//   views?: string;
//   platform?: "TikTok" | "Reels" | "Shorts";
//   niche?: string;
//   poster: string;
// };

export function VideoTile({ item, index = 0 }: { item: VideoItem; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-elevated"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `linear-gradient(135deg, ${item.poster}, oklch(0.18 0.015 285))` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />

      <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-neon shadow-neon">
          <Play className="h-6 w-6 fill-primary-foreground text-primary-foreground" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="font-display text-lg leading-tight">{item.title}</div>
        {item.niche && (
          <div className="mt-1 text-xs text-muted-foreground">{item.niche}</div>
        )}
      </div>
    </motion.div>
  );
}
