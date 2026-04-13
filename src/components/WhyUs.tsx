import { CheckCircle2, Clock } from "lucide-react";

const reasons = [
  { title: "Proceso rápido y sin papeleo complicado", desc: "De la consulta al volante en horas. Sin burocracia innecesaria." },
  { title: "Vehículos verificados y en excelente estado", desc: "Cada unidad pasa por inspección técnica antes de entregarse." },
  { title: "Precios transparentes, sin costos ocultos", desc: "Lo que ves es lo que pagás. Sin sorpresas al cerrar el trato." },
  { title: "Atención inmediata por WhatsApp", desc: "Respondemos en minutos. Humanos reales, no bots." },
  { title: "Opciones flexibles de alquiler o compra", desc: "Adaptamos las condiciones a lo que necesitás. Sin rigideces." },
];

export default function WhyUs() {
  return (
    <section id="diferencial" className="py-24" style={{ background: "#0F0F0F" }} aria-label="¿Por qué elegirnos?">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#E02020" }}>
              Nuestro diferencial
            </p>
            <h2
              className="font-heading font-extrabold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              ¿Por qué
              <br />
              elegirnos?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)" }} className="leading-relaxed max-w-sm">
              No vendemos autos. Ofrecemos soluciones para que puedas moverte sin complicaciones.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-4 items-start">
                <CheckCircle2
                  size={20}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "#E02020" }}
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-white leading-snug">{r.title}</p>
                  <p className="text-sm mt-1 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight */}
        <div
          className="mt-16 rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center gap-6"
          style={{ background: "#E02020" }}
        >
          <div
            className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            <Clock size={28} color="white" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div>
            <p className="font-heading font-extrabold text-3xl text-white leading-none">
              Entrega en menos de 24 horas
            </p>
            <p className="text-white/75 mt-2 text-lg">
              Confirmás hoy, manejás mañana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
