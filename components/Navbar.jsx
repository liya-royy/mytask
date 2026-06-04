"use client";

import { useState, useEffect } from "react";

const links = ["About", "Events", "Chapters", "Timeline", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/90 backdrop-blur-md border-b border-blue-900/25 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <span className="font-display font-black text-lg tracking-wider">
          <span className="text-cyan">IEEE </span>
          <span className="text-white">SB CEC</span>
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-widest text-muted hover:text-cyan transition-colors duration-200"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="clip-cta font-mono text-xs uppercase tracking-widest bg-electric hover:bg-cyan hover:text-navy-900 text-white px-5 py-2.5 transition-all duration-200"
          >
            Join Us →
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-muted transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-muted transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-muted transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-900/95 border-t border-blue-900/20 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-widest text-muted hover:text-cyan"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
