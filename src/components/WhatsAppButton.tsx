"use client";

import { useEffect, useState } from "react";

interface WhatsAppButtonProps {
  /** Número de teléfono con código de país, sin +, espacios ni guiones. Ej: "5491122334455" */
  phoneNumber: string;
  /** Mensaje precargado que se envía al abrir el chat */
  message?: string;
  /** Texto del tooltip que aparece al lado del botón */
  tooltipText?: string;
  /** Posición del botón en la pantalla */
  position?: "bottom-right" | "bottom-left";
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hola, quiero hacer una consulta",
  tooltipText = "¿Necesitás ayuda?",
  position = "bottom-right",
}: WhatsAppButtonProps) {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Aparece con una pequeña animación al montar el componente
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const positionClasses =
    position === "bottom-right" ? { right: 24 } : { left: 24 };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        ...positionClasses,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexDirection: position === "bottom-right" ? "row" : "row-reverse",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      {showTooltip && (
        <div
          style={{
            background: "#fff",
            color: "#111",
            padding: "10px 14px",
            borderRadius: 8,
            boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            fontSize: 14,
            fontWeight: 500,
            whiteSpace: "nowrap",
            animation: "wa-fade-in 0.25s ease",
          }}
        >
          {tooltipText}
        </div>
      )}

      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Contactar por WhatsApp"
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#25D366",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(37, 211, 102, 0.5)",
          animation: "wa-pulse 2s infinite",
          padding: 0,
        }}
      >
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.334 0 2.353.615 4.66 1.784 6.686L2.667 29.333l6.83-1.751a13.27 13.27 0 0 0 6.504 1.686h.006c7.364 0 13.333-5.97 13.333-13.334 0-3.56-1.387-6.907-3.905-9.425a13.24 13.24 0 0 0-9.434-3.842zm0 24.4h-.005a11.05 11.05 0 0 1-5.63-1.542l-.404-.24-4.053 1.04 1.082-3.951-.263-.406a11.02 11.02 0 0 1-1.696-5.867c0-6.106 4.968-11.073 11.075-11.073a11 11 0 0 1 7.833 3.245 10.99 10.99 0 0 1 3.24 7.834c-.002 6.107-4.97 11.06-11.179 11.06zm6.075-8.288c-.333-.167-1.966-.97-2.271-1.08-.305-.111-.527-.167-.749.167-.222.333-.86 1.08-1.054 1.302-.194.222-.388.25-.72.083-.334-.167-1.409-.519-2.684-1.653-.992-.885-1.663-1.978-1.858-2.312-.194-.333-.021-.514.146-.68.15-.15.334-.389.5-.583.168-.194.223-.333.335-.555.111-.222.056-.417-.028-.583-.083-.167-.749-1.804-1.026-2.472-.27-.65-.545-.562-.749-.573l-.638-.011c-.222 0-.583.083-.888.417s-1.166 1.14-1.166 2.777 1.194 3.222 1.36 3.445c.167.222 2.35 3.585 5.693 5.028.795.343 1.415.548 1.899.702.798.254 1.524.218 2.098.132.64-.096 1.966-.804 2.243-1.581.277-.777.277-1.443.194-1.582-.083-.14-.305-.223-.638-.39z" />
        </svg>
      </button>

      <style>{`
        @keyframes wa-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
          70% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        @keyframes wa-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
