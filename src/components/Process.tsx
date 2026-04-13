import { Search, MessageCircle, Car } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Elegí tu vehículo",
    desc: "Buscá por tipo, precio o necesidad. Filtrá hasta encontrar el que te cierra.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Contactanos o reservá online",
    desc: "Por WhatsApp o por teléfono. En minutos tenés confirmación.",
  },
  {
    number: "03",
    icon: Car,
    title: "Retirá o recibís tu vehículo",
    desc: "Pasá por nuestro local o lo llevamos hasta donde estés. En menos de 24hs.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24" style={{ background: "#F8F8F6" }} aria-label="Cómo funciona">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#E02020" }}>
            Cómo funciona
          </p>
          <h2
            className="font-heading font-extrabold leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "#111" }}
          >
            Alquilá o comprá
            <br />
            en 3 pasos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div
            className="absolute top-10 left-[16.67%] right-[16.67%] h-px hidden md:block"
            style={{ background: "linear-gradient(to right, #e4e4e2, #E02020, #e4e4e2)" }}
            aria-hidden="true"
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex flex-col items-center text-center relative">
                {/* Icon circle */}
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6 z-10"
                  style={{ background: i === 1 ? "#E02020" : "#0F0F0F" }}
                >
                  <Icon size={28} color="white" strokeWidth={1.75} aria-hidden="true" />
                  <span
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold"
                    style={{ background: i === 1 ? "#0F0F0F" : "#E02020", color: "white" }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl mb-3" style={{ color: "#111" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#6b6b6b" }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
