"use client";

import { useState } from "react";
import { Fuel, Zap, Users, Star } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const NEEDS = ["Todos", "Viaje", "Trabajo", "Familia", "Económico"];

const vehicles = [
  {
    name: "Toyota Corolla 2023",
    type: "Auto",
    need: "Económico",
    tag: "Más alquilado",
    tagColor: "#E02020",
    price: "$22.500",
    rentPrice: "$45/día",
    fuel: "Nafta",
    transmission: "Automático",
    capacity: 5,
    consumption: "14 km/l",
    desc: "Ideal para ciudad. Bajo consumo, cómodo y fácil de manejar.",
    color: "#1a2a5e",
  },
  {
    name: "Toyota Hilux 2022",
    type: "Camioneta",
    need: "Trabajo",
    tag: "Recomendado",
    tagColor: "#16a34a",
    price: "$48.000",
    rentPrice: "$85/día",
    fuel: "Diésel",
    transmission: "Manual",
    capacity: 5,
    consumption: "11 km/l",
    desc: "Potencia y durabilidad para trabajo en cualquier terreno.",
    color: "#1a3a2a",
  },
  {
    name: "Honda CR-V 2023",
    type: "SUV",
    need: "Familia",
    tag: "Mejor precio",
    tagColor: "#d97706",
    price: "$38.000",
    rentPrice: "$70/día",
    fuel: "Nafta",
    transmission: "Automático",
    capacity: 7,
    consumption: "12 km/l",
    desc: "Espacioso y confortable. Perfecto para viajes en familia.",
    color: "#3a1a3a",
  },
  {
    name: "Volkswagen Polo 2022",
    type: "Auto",
    need: "Económico",
    tag: "",
    tagColor: "",
    price: "$18.000",
    rentPrice: "$35/día",
    fuel: "Nafta",
    transmission: "Manual",
    capacity: 5,
    consumption: "16 km/l",
    desc: "El más económico de la flota. Ágil y eficiente en ciudad.",
    color: "#1a1a3a",
  },
  {
    name: "Ford Ranger 2023",
    type: "Camioneta",
    need: "Trabajo",
    tag: "",
    tagColor: "",
    price: "$52.000",
    rentPrice: "$90/día",
    fuel: "Diésel",
    transmission: "Automático",
    capacity: 5,
    consumption: "10 km/l",
    desc: "La camioneta más buscada para trabajo pesado y campo.",
    color: "#2a1a1a",
  },
  {
    name: "Chevrolet Tracker 2023",
    type: "SUV",
    need: "Viaje",
    tag: "Más alquilado",
    tagColor: "#E02020",
    price: "$32.000",
    rentPrice: "$60/día",
    fuel: "Nafta",
    transmission: "Automático",
    capacity: 5,
    consumption: "13 km/l",
    desc: "Compacto y versátil. Perfecto para viajes largos y ciudad.",
    color: "#1a2a3a",
  },
];

export default function Catalog() {
  const [filter, setFilter] = useState("Todos");

  const filtered = filter === "Todos"
    ? vehicles
    : vehicles.filter((v) => v.need === filter);

  return (
    <section id="catalogo" className="py-24" style={{ background: "#F8F8F6" }} aria-label="Catálogo de vehículos">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#E02020" }}>
            Catálogo
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-heading font-extrabold leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "#111" }}
            >
              ¿Para qué lo necesitás?
            </h2>
            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {NEEDS.map((n) => (
                <button
                  key={n}
                  onClick={() => setFilter(n)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer"
                  style={
                    filter === n
                      ? { background: "#0F0F0F", color: "white" }
                      : { background: "white", color: "#6b6b6b", border: "1px solid #e4e4e2" }
                  }
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((v) => (
            <div
              key={v.name}
              className="bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition-shadow group"
              style={{ borderColor: "#e4e4e2" }}
            >
              {/* Visual placeholder */}
              <div
                className="relative h-44 flex items-center justify-center"
                style={{ background: v.color }}
              >
                {v.tag && (
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: v.tagColor }}
                  >
                    {v.tag}
                  </span>
                )}
                <svg width="160" height="80" viewBox="0 0 160 80" fill="none" aria-hidden="true">
                  <rect x="20" y="35" width="120" height="30" rx="8" fill="rgba(255,255,255,0.15)" />
                  <rect x="35" y="18" width="90" height="25" rx="6" fill="rgba(255,255,255,0.2)" />
                  <circle cx="45" cy="65" r="12" fill="rgba(255,255,255,0.25)" />
                  <circle cx="115" cy="65" r="12" fill="rgba(255,255,255,0.25)" />
                  <circle cx="45" cy="65" r="6" fill="rgba(255,255,255,0.4)" />
                  <circle cx="115" cy="65" r="6" fill="rgba(255,255,255,0.4)" />
                </svg>
                <span
                  className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[10px] font-semibold text-white/70"
                  style={{ background: "rgba(0,0,0,0.3)" }}
                >
                  {v.type}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-1">{v.name}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{v.desc}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {[
                    { icon: Fuel, label: v.fuel },
                    { icon: Zap, label: v.transmission },
                    { icon: Users, label: `${v.capacity} personas` },
                    { icon: Star, label: v.consumption },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Icon size={13} aria-hidden="true" />
                      {label}
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "#f0f0ee" }}>
                  <div>
                    <p className="font-heading font-extrabold text-xl text-gray-900">{v.price}</p>
                    <p className="text-xs text-gray-400">o {v.rentPrice} alquiler</p>
                  </div>
                  <WhatsAppButton
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-white cursor-pointer transition-opacity hover:opacity-90 active:scale-[0.98]"
                    style={{ background: "#E02020" }}
                  >
                    Consultar
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
