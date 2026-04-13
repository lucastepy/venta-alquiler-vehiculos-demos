"use client";

import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { X, MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/595991666555";
const WA_NUMBER = "+595 991 666 555";

interface WhatsAppButtonProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  "aria-label"?: string;
  children: React.ReactNode;
}

export default function WhatsAppButton({ className, style, onClick, "aria-label": ariaLabel, children }: WhatsAppButtonProps) {
  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => { onClick?.(); setOpen(true); }}
        className={className}
        style={style}
        aria-label={ariaLabel}
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Escanear código QR de WhatsApp"
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-5 max-w-xs w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700"
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>

            {/* Icon */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: "#25D366" }}
            >
              <MessageCircle size={24} color="white" strokeWidth={1.75} />
            </div>

            {/* Title */}
            <div className="text-center">
              <p className="font-heading font-bold text-lg text-gray-900 leading-tight">
                Escribinos por WhatsApp
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Escaneá el código con tu celular
              </p>
            </div>

            {/* QR Code */}
            <div className="p-3 rounded-xl border border-gray-100 bg-white">
              <QRCode
                value={WA_URL}
                size={180}
                level="M"
                bgColor="#ffffff"
                fgColor="#1d4e89"
              />
            </div>

            {/* Number */}
            <p className="text-sm font-semibold text-gray-700">{WA_NUMBER}</p>

            <p className="text-xs text-gray-400 text-center leading-relaxed">
              Abrí la cámara de tu teléfono y apuntá al código para abrir WhatsApp
            </p>
          </div>
        </div>
      )}
    </>
  );
}
