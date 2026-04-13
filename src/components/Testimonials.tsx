import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Cliente — Alquiler Toyota Hilux",
    text: "Todo fue rápido y sin vueltas. El vehículo estaba impecable, los papeles al día y lo recibí al día siguiente de contactarlos. No hay nada que mejorar.",
    initials: "CM",
    color: "#E02020",
  },
  {
    name: "Sofía Ramírez",
    role: "Cliente — Compra Honda CR-V",
    text: "Dudé mucho antes de comprar pero me asesoraron muy bien. El precio fue claro desde el principio, sin vueltas ni costos extra. En dos días ya estaba manejando mi CR-V.",
    initials: "SR",
    color: "#0F0F0F",
  },
  {
    name: "Miguel Torres",
    role: "Cliente — Alquiler mensual",
    text: "Trabajo en logística y necesito camionetas seguido. DriveNow me da disponibilidad, buen estado y responden al instante. Son mi primera opción siempre.",
    initials: "MT",
    color: "#1a3a6a",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4" aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24" style={{ background: "#0F0F0F" }} aria-label="Testimonios">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center max-w-xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#E02020" }}>
            Testimonios
          </p>
          <h2
            className="font-heading font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Lo que dicen
            <br />
            nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl p-7 flex flex-col hover:border-white/20 transition-colors"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Stars />
              <blockquote className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
                "{t.text}"
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: t.color }}
                  aria-hidden="true"
                >
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
