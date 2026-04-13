import { ShieldCheck, FileCheck, Umbrella, Award } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Vehículos inspeccionados", desc: "Revisión técnica completa antes de cada entrega. Nada sale sin estar en condiciones." },
  { icon: FileCheck, title: "Documentación al día", desc: "VTV, seguro y todos los papeles en regla. Sin sorpresas ni problemas en ruta." },
  { icon: Umbrella, title: "Seguro incluido", desc: "Todos nuestros alquileres incluyen cobertura básica. Manejás tranquilo." },
  { icon: Award, title: "+500 clientes satisfechos", desc: "Años en el mercado y una cartera de clientes que vuelven. Los números hablan solos." },
];

export default function Trust() {
  return (
    <section id="confianza" className="py-24" style={{ background: "#F8F8F6" }} aria-label="Tu tranquilidad es nuestra prioridad">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center max-w-xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#E02020" }}>
            Confianza
          </p>
          <h2
            className="font-heading font-extrabold leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "#111" }}
          >
            Tu tranquilidad es
            <br />
            nuestra prioridad
          </h2>
          <p style={{ color: "#6b6b6b" }} className="leading-relaxed">
            Cada detalle está pensado para que no tengas que preocuparte por nada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl p-7 border hover:shadow-md transition-shadow"
                style={
                  i === 0
                    ? { background: "#0F0F0F", borderColor: "#0F0F0F" }
                    : { background: "white", borderColor: "#e4e4e2" }
                }
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: i === 0 ? "rgba(224,32,32,0.2)" : "#f0f0ee" }}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    color={i === 0 ? "#E02020" : "#E02020"}
                  />
                </div>
                <h3
                  className="font-heading font-bold text-lg mb-2"
                  style={{ color: i === 0 ? "white" : "#111" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: i === 0 ? "rgba(255,255,255,0.5)" : "#6b6b6b" }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
