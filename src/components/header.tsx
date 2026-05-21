import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#about", label: "About" },

] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <img
            src={logo}
            alt="Ali Raza Creations Logo"
            className="h-12 w-auto object-contain"
          />

          <span
            className="text-xl uppercase tracking-[0.08em]"
            style={{
              fontFamily: '"Arial Narrow", Arial, sans-serif',
              fontWeight: 700,
            }}
          >
            ALI RAZA CREATIONS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop Get a Quote Button */}
        <a
          href="https://wa.me/923486356131?text=%F0%9F%91%8B%20Hi%20Ali,%20I%20would%20like%20to%20discuss%20my%20project%20with%20you"
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden md:inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:bg-muted"
        >
          <span className="text-gradient-neon">Get a Quote</span>

          <ArrowRight className="h-4 w-4 text-[#ff2bd6] transition-transform group-hover:translate-x-1" />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-border/50 bg-background/95 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}

            {/* Mobile Get a Quote Button */}
            <a
              href="https://wa.me/923486356131?text=%F0%9F%91%8B%20Hi%20Ali,%20I%20would%20like%20to%20discuss%20my%20project%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-7 py-4 font-semibold transition-colors hover:bg-muted"
            >
              <span className="text-gradient-neon">Get a Quote</span>

              <ArrowRight className="h-4 w-4 text-[#ff2bd6]" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}