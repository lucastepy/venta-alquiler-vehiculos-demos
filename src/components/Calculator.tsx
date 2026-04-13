"use client";

import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

const rates: Record<string, number> = {
  "Auto": 40,
  "SUV": 65,
  "Camioneta": 85,
};

export default function Calculator() {
  const [days, setDays] = useState(3);
  const [vehicleType, setVehicleType] = useState("Auto");

  const daily = rates[vehicleType];
  const subtotal = daily * days;
  const discount = days >= 7 ? 0.10 : days >= 3 ? 0.05 : 0;
  const total = Math.round(subtotal * (1 - discount));

  return (
    <section id="calculadora" className="py-24" style={{ background: "#0F0F0F" }} aria-label="Calculadora de alquiler">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: info */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#E02020" }}>
              Calculadora
            </p>
            <h2
              className="font-heading font-extrabold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              ¿Cuánto te
              <br />
              costará el alquiler?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)" }} className="leading-relaxed mb-8">
              Calculá el costo estimado según los días y el tipo de vehículo.
              Sin compromisos — es solo una guía.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Tarifa base", value: `$${daily}/día` },
                { label: "Días seleccionados", value: `${days} día${days !== 1 ? "s" : ""}` },
                { label: "Descuento aplicado", value: discount > 0 ? `${discount * 100}%` : "Sin descuento" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-sm py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>{row.label}</span>
                  <span className="text-white font-semibold">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: calculator */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Vehicle type */}
            <div className="mb-6">
              <label className="text-xs font-semibold uppercase tracking-wider block mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                Tipo de vehículo
              </label>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(rates).map((type) => (
                  <button
                    key={type}
                    onClick={() => setVehicleType(type)}
                    className="py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer"
                    style={
                      vehicleType === type
                        ? { background: "#E02020", color: "white" }
                        : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }
                    }
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Days slider */}
            <div className="mb-8">
              <label className="text-xs font-semibold uppercase tracking-wider block mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                Días de alquiler: <span className="text-white">{days}</span>
              </label>
              <input
                type="range"
                min={1}
                max={30}
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full cursor-pointer"
                style={{ accentColor: "#E02020" }}
                aria-label="Días de alquiler"
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                <span>1 día</span>
                <span>30 días</span>
              </div>
              {days >= 3 && (
                <p className="text-xs mt-2 font-semibold" style={{ color: "#E02020" }}>
                  {days >= 7 ? "🎉 10% de descuento por 7+ días" : "✓ 5% de descuento por 3+ días"}
                </p>
              )}
            </div>

            {/* Total */}
            <div
              className="rounded-xl p-5 mb-6 text-center"
              style={{ background: "rgba(224,32,32,0.1)", border: "1px solid rgba(224,32,32,0.2)" }}
            >
              <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Costo estimado total</p>
              <p className="font-heading font-extrabold text-white" style={{ fontSize: "2.5rem" }}>
                ${total.toLocaleString()}
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                Precio orientativo — confirmá con nuestro equipo
              </p>
            </div>

            <WhatsAppButton
              className="w-full flex items-center justify-center py-3 rounded-xl text-sm font-bold text-white cursor-pointer transition-opacity hover:opacity-90 active:scale-[0.98]"
              style={{ background: "#E02020" }}
            >
              Reservar este vehículo
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
