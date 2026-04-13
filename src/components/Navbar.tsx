"use client";

import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const links = [
  { label: "Vehículos", href: "#catalogo" },
  { label: "Alquiler", href: "#proceso" },
  { label: "Nosotros", href: "#confianza" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(15,15,15,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5" aria-label="DriveNow — Inicio">
          {/* Icon */}
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
            style={{ background: "#E02020" }}
            aria-hidden="true"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 13L4 7h10l2 6H2z" fill="white" />
              <rect x="4" y="11" width="2" height="3" rx="1" fill="#E02020" />
              <rect x="12" y="11" width="2" height="3" rx="1" fill="#E02020" />
              <path d="M4 7l1.5-3h7L14 7" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-heading font-extrabold text-white text-lg tracking-tight">
            Drive<span style={{ color: "#E02020" }}>Now</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+59521555000"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            aria-label="Llamar a DriveNow"
          >
            <Phone size={15} strokeWidth={2} aria-hidden="true" />
            +595 21 555 000
          </a>
          <WhatsAppButton className="px-5 h-9 rounded-lg text-sm font-semibold text-white cursor-pointer transition-opacity hover:opacity-90 active:scale-[0.98]" style={{ background: "#E02020" }}>
            Contactar
          </WhatsAppButton>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: "#0F0F0F", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Menú móvil">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm font-medium text-white/70 hover:text-white transition-colors border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href="tel:+59521555000" className="flex items-center gap-2 text-sm text-white/60">
                <Phone size={15} aria-hidden="true" /> +595 21 555 000
              </a>
              <WhatsAppButton className="w-full flex justify-center px-5 h-10 rounded-lg text-sm font-semibold text-white cursor-pointer" style={{ background: "#E02020" }}>
                Contactar por WhatsApp
              </WhatsAppButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
