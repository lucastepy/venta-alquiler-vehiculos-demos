import WhatsAppButton from "@/components/WhatsAppButton";
import { CalendarCheck } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#E02020" }}
      aria-label="Reservá ahora"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(0,0,0,0.2) 0%, transparent 60%)" }}
      />
      <div className="absolute right-0 top-0 w-96 h-96 opacity-10 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="1" />
          <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2
          className="font-heading font-extrabold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          Tu próximo vehículo
          <br />
          está a un clic.
        </h2>
        <p className="text-white/80 text-xl mb-10 max-w-lg mx-auto">
          Reservá ahora de forma rápida y segura. Sin vueltas.
        </p>
        <WhatsAppButton
          className="inline-flex items-center gap-3 px-10 h-14 rounded-xl text-base font-bold shadow-2xl active:scale-[0.98] transition-opacity hover:opacity-90 cursor-pointer"
          style={{ background: "white", color: "#E02020" }}
        >
          <CalendarCheck size={20} aria-hidden="true" />
          Reservar ahora
        </WhatsAppButton>
        <p className="text-white/50 text-sm mt-6">Entrega en menos de 24 horas. Garantizado.</p>
      </div>
    </section>
  );
}
