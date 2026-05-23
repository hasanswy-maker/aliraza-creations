import profileImage from "../assets/profile.jpg";
import { Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/50 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-14 md:flex-row">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <img
            src={profileImage}
            alt="Ali Raza"
            className="h-35 w-35 rounded-full border border-border object-cover"
          />

          <div>
            <div className="font-display text-2xl tracking-wider">
              ALI RAZA CREATIONS
            </div>

            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Short-form video editor. Cuts that hook in 1.5 seconds and don't
              let go.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="mb-3 font-display text-xs uppercase tracking-widest text-muted-foreground">
            Find Me
          </div>

          <div className="flex gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/aliraza.creations"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-neon hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>

            {/* Fiverr */}
            <a
              href="https://www.fiverr.com/alicooks"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-neon hover:text-foreground"
              aria-label="Fiverr"
            >
              <span className="text-sm font-bold">fi</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923486356131?text=%F0%9F%91%8B%20Hi%20Ali,%20I%20would%20like%20to%20discuss%20my%20project%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-neon hover:text-foreground"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>

          <a
            href="mailto:alirazacreates@gmail.com"
            className="mt-4 inline-block text-sm text-muted-foreground hover:text-foreground"
          >
            alirazacreates@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ali Raza Creations. All rights reserved.
        </div>
      </div>
    </footer>
  );
}