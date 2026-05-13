import { motion } from "framer-motion";
import { useRef } from "react";

export type VideoItem = {
  id: string;
  title: string;
  views: string;
  platform: "TikTok" | "Reels" | "Shorts";
  niche: string;
  poster: string;
  video: string;
};

export function VideoTile({
  item,
  index = 0,
}: {
  item: VideoItem;
  index?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = async () => {
    try {
      await videoRef.current?.play();
    } catch (error) {
      console.log("Autoplay blocked:", error);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-card shadow-elevated"
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={item.video}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/10" />

      {/* Bottom Content */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4">
        <div className="font-display text-lg leading-tight text-white">
          {item.title}
        </div>

        <div className="mt-1 text-xs text-white/70">
          {item.platform} • {item.niche} • {item.views}
        </div>
      </div>
    </motion.div>
  );
}