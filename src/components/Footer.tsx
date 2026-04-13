import { Phone } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const navLinks = [
  { label: "Vehículos", href: "#catalogo" },
  { label: "¿Por qué elegirnos?", href: "#diferencial" },
  { label: "Cómo funciona", href: "#proceso" },
  { label: "Calculadora", href: "#calculadora" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0A0A0A" }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: "#E02020" }} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 13L4 7h10l2 6H2z" fill="white" />
                  <rect x="4" y="11" width="2" height="3" rx="1" fill="#E02020" />
                  <rect x="12" y="11" width="2" height="3" rx="1" fill="#E02020" />
                  <path d="M4 7l1.5-3h7L14 7" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-heading font-extrabold text-white text-lg">
                Drive<span style={{ color: "#E02020" }}>Now</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Conduce sin límites. Venta y alquiler de vehículos en Asunción, Paraguay.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
                className="transition-colors p-2 -m-2 rounded" style={{ color: "rgba(255,255,255,0.35)" }}
                aria-label="Instagram de DriveNow">
                <InstagramIcon />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
                className="transition-colors p-2 -m-2 rounded" style={{ color: "rgba(255,255,255,0.35)" }}
                aria-label="Facebook de DriveNow">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Navegación
            </p>
            <nav aria-label="Pie de página">
              <ul className="flex flex-col gap-3">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
              Contacto
            </p>
            <div className="flex flex-col gap-4">
              <a href="tel:+59521555000" className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                <Phone size={16} strokeWidth={1.75} aria-hidden="true" />
                +595 21 555 000
              </a>
              <WhatsAppButton className="flex items-center gap-3 text-sm cursor-pointer" style={{ color: "rgba(255,255,255,0.5)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +595 991 777 000
              </WhatsAppButton>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.25)" }}>
          <p>© {new Date().getFullYear()} DriveNow. Todos los derechos reservados.</p>
          <p>
            Built with Claude Web Builder by{" "}
            <a href="https://tododeia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">
              Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
