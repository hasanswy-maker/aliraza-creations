import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png"; 

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  // { to: "/stats", label: "Stats" },
  // { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<Link to="/" className="group flex items-center gap-3">
  <img
    src={logo}
    alt="Ali Raza Creations Logo"
    className="h-12 w-auto object-contain"
  />

  <span className="font-display text-xl tracking-wider">
    ALI RAZA CREATIONS
  </span>
</Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden rounded-full bg-gradient-neon px-5 py-2 text-sm font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-105 md:inline-block"
        >
          Hire Me
        </Link>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/50 bg-background/95 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground"
                activeProps={{ className: "py-3 text-sm text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
