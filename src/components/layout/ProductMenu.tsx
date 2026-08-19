"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const productGroups = [
  {
    name: "Arco",
    href: "/productos?categoria=arco",
    color: "var(--category-arc)",
    items: [
      "Inverters monofásico",
      "Inverters trifásico",
      "Rectifier",
      "AC-DC",
      "Arco AC",
    ],
  },
  {
    name: "TIG",
    href: "/productos?categoria=tig",
    color: "var(--category-tig)",
    items: ["TIG AC-DC", "Arco pulsado DC"],
  },
  {
    name: "MIG",
    href: "/productos?categoria=mig",
    color: "var(--category-mig)",
    items: ["MIG LT", "MIG Industrial"],
  },
  {
    name: "Plasma",
    href: "/productos?categoria=plasma",
    color: "var(--category-plasma)",
    items: ["Plasma", "Plasma Inverter"],
  },
  {
    name: "Cargadores",
    href: "/productos?categoria=cargadores",
    color: "var(--category-chargers)",
    items: ["Cargadores de baterías", "Arrancadores"],
  },
];

export default function ProductMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onBlur={handleBlur}
    >
      <button
        type="button"
        className="flex items-center gap-1.5 text-[15px] font-semibold transition-colors hover:text-(--brand-red) focus-visible:text-(--brand-red)"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        Productos
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`size-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="m5 7.5 5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </button>

      <div
        id={panelId}
        className={`absolute top-full right-0 z-50 pt-6 transition-[opacity,transform,visibility] duration-200 ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="w-180 border border-(--border) bg-white p-7 shadow-[0_12px_32px_rgb(0_0_0/0.08)]">
          <div className="grid grid-cols-3 gap-x-10 gap-y-8">
            {productGroups.map((group) => (
              <div key={group.name}>
                <Link
                  href={group.href}
                  className="group flex items-center gap-2 font-semibold uppercase focus-visible:text-(--brand-red)"
                  onClick={() => setIsOpen(false)}
                >
                  <span
                    className="h-0.5 w-5"
                    style={{ backgroundColor: group.color }}
                    aria-hidden="true"
                  />

                  <span className="transition-colors group-hover:text-(--brand-red)">
                    {group.name}
                  </span>
                </Link>

                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="text-sm text-(--muted-foreground)">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-(--border) pt-6">
            <Link
              href="/productos"
              className="inline-flex font-semibold transition-colors hover:text-(--brand-red) focus-visible:text-(--brand-red)"
              onClick={() => setIsOpen(false)}
            >
              Ver todos los productos →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
