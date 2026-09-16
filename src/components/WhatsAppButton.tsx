interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  tooltipText?: string;
  position?: "bottom-right" | "bottom-left";
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hola, quiero hacer una consulta",
  tooltipText = "¿Necesitás ayuda?",
  position = "bottom-right",
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const sideClass = position === "bottom-right" ? "right-6" : "left-6";
  const directionClass =
    position === "bottom-right" ? "flex-row" : "flex-row-reverse";

  return (
    <div
      className={`group fixed bottom-6 z-50 flex items-center gap-3 ${sideClass} ${directionClass}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none translate-y-1 rounded-md bg-white px-3.5 py-2.5 text-sm font-medium whitespace-nowrap text-(--color-foreground) opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
      >
        {tooltipText}
      </span>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="whatsapp-button flex size-15 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.5)] transition-transform hover:scale-105"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="size-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.334 0 2.353.615 4.66 1.784 6.686L2.667 29.333l6.83-1.751a13.27 13.27 0 0 0 6.504 1.686h.006c7.364 0 13.333-5.97 13.333-13.334 0-3.56-1.387-6.907-3.905-9.425a13.24 13.24 0 0 0-9.434-3.842zm0 24.4h-.005a11.05 11.05 0 0 1-5.63-1.542l-.404-.24-4.053 1.04 1.082-3.951-.263-.406a11.02 11.02 0 0 1-1.696-5.867c0-6.106 4.968-11.073 11.075-11.073a11 11 0 0 1 7.833 3.245 10.99 10.99 0 0 1 3.24 7.834c-.002 6.107-4.97 11.06-11.179 11.06zm6.075-8.288c-.333-.167-1.966-.97-2.271-1.08-.305-.111-.527-.167-.749.167-.222.333-.86 1.08-1.054 1.302-.194.222-.388.25-.72.083-.334-.167-1.409-.519-2.684-1.653-.992-.885-1.663-1.978-1.858-2.312-.194-.333-.021-.514.146-.68.15-.15.334-.389.5-.583.168-.194.223-.333.335-.555.111-.222.056-.417-.028-.583-.083-.167-.749-1.804-1.026-2.472-.27-.65-.545-.562-.749-.573l-.638-.011c-.222 0-.583.083-.888.417s-1.166 1.14-1.166 2.777 1.194 3.222 1.36 3.445c.167.222 2.35 3.585 5.693 5.028.795.343 1.415.548 1.899.702.798.254 1.524.218 2.098.132.64-.096 1.966-.804 2.243-1.581.277-.777.277-1.443.194-1.582-.083-.14-.305-.223-.638-.39z" />
        </svg>
      </a>
    </div>
  );
}
