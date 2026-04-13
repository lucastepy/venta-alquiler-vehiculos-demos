"use client";

import { useState } from "react";
import { Search, Car, DollarSign, CheckCircle } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const tipos = ["Todos", "Auto", "SUV", "Camioneta", "Familiar"];
const precios = ["Cualquier precio", "Hasta $15.000", "$15k–$30k", "$30k–$60k", "+$60.000"];

export default function Hero() {
  const [tipo, setTipo] = useState("Todos");
  const [precio, setPrecio] = useState("Cualquier precio");
  const [modo, setModo] = useState("Compra");

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{ background: "#0F0F0F" }}
      aria-label="Sección principal"
    >
      {/* Subtle red glow */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(224,32,32,0.12) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(224,32,32,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 uppercase tracking-widest"
            style={{ background: "rgba(224,32,32,0.15)", color: "#E02020", border: "1px solid rgba(224,32,32,0.3)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E02020] animate-pulse" aria-hidden="true" />
            Venta y Alquiler — Asunción, Paraguay
          </div>

          {/* H1 */}
          <h1
            className="font-heading font-extrabold text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Conduce sin
            <br />
            <span style={{ color: "#E02020" }}>límites.</span>
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-xl">
            Encuentra el vehículo perfecto para cada momento.
            Compra o alquila fácil, rápido y sin complicaciones.
          </p>

          {/* Search widget */}
          <div
            className="rounded-2xl p-6 mb-10"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {/* Mode toggle */}
            <div className="flex gap-2 mb-5">
              {["Compra", "Alquiler"].map((m) => (
                <button
                  key={m}
                  onClick={() => setModo(m)}
                  className="px-5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer"
                  style={
                    modo === m
                      ? { background: "#E02020", color: "white" }
                      : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }
                  }
                >
                  {m}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Tipo */}
              <div>
                <label className="text-xs text-white/40 font-semibold uppercase tracking-wider block mb-1.5">
                  Tipo
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {tipos.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTipo(t)}
                      className="px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer"
                      style={
                        tipo === t
                          ? { background: "#E02020", color: "white" }
                          : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }
                      }
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Precio */}
              <div>
                <label className="text-xs text-white/40 font-semibold uppercase tracking-wider block mb-1.5">
                  Precio
                </label>
                <select
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  className="w-full px-3 py-2 rounded-md text-sm cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  {precios.map((p) => <option key={p} value={p} style={{ background: "#1a1a1a" }}>{p}</option>)}
                </select>
              </div>

              {/* CTA */}
              <div className="flex items-end">
                <a
                  href="#catalogo"
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
                  style={{ background: "#E02020" }}
                >
                  <Search size={16} aria-hidden="true" />
                  Buscar vehículo
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: "+500", label: "Clientes satisfechos" },
              { value: "+800", label: "Vehículos entregados" },
              { value: "<24hs", label: "Tiempo de entrega" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading font-extrabold text-white text-2xl leading-none">{s.value}</p>
                <p className="text-white/40 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30" aria-hidden="true">
        <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, transparent, white)" }} />
      </div>
    </section>
  );
}
