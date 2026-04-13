import type { Metadata } from "next";
import { Bebas_Neue, Nunito_Sans } from "next/font/google";
import "./globals.css";

const heading = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400"],
});

const body = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "DriveNow — Conduce sin límites",
  description:
    "Compra o alquila tu vehículo en Asunción, Paraguay. Autos, SUVs y camionetas disponibles. Proceso rápido, precios transparentes y entrega en menos de 24 horas.",
  keywords: ["venta autos", "alquiler vehículos", "Asunción", "Paraguay", "DriveNow"],
  openGraph: {
    title: "DriveNow — Conduce sin límites",
    description: "Encuentra el vehículo perfecto para cada momento. Compra o alquila fácil, rápido y sin complicaciones.",
    type: "website",
    locale: "es_PY",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${heading.variable} ${body.variable} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
