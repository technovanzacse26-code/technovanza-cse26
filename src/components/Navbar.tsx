import { useState, useEffect } from "react";
import { symposiumConfig } from "@/config/symposium";
import { Menu, X } from "lucide-react";
import collegeLogo from "@/assets/college-logo.png";
import deptLogo from "@/assets/dept-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-2" : "py-3 bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container px-4 flex items-center justify-between">
        {/* Left: College Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <img src={collegeLogo} alt="College Logo" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
        </div>

        {/* Center: Title + Dept Logo */}
        <div className="flex items-center gap-3">
          <span className="font-display text-[10px] md:text-sm font-bold text-primary tracking-widest text-center">
            {symposiumConfig.name}
          </span>
          <img src={deptLogo} alt="Dept Logo" className="hidden md:block w-12 h-12 md:w-14 md:h-14 object-contain" />
        </div>

        {/* Right: Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={symposiumConfig.googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-display font-bold px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:neon-glow transition-all duration-300"
          >
            Register
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted-foreground hover:text-primary py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={symposiumConfig.googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-display font-bold px-5 py-2 rounded-lg bg-primary text-primary-foreground text-center"
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
