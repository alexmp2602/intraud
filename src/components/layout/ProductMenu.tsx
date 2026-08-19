"use client";

import Link from "next/link";
import { useState } from "react";

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

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1.5 text-[15px] font-semibold transition-colors hover:text-(--brand-red)"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen((open) => !open)}
      >
        Productos
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
        className={`absolute top-full right-0 z-50 pt-7 transition ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="w-190 border border-(--border) bg-white p-8 shadow-lg">
          <div className="grid grid-cols-3 gap-x-10 gap-y-8">
            {productGroups.map((group) => (
              <div key={group.name}>
                <Link
                  href={group.href}
                  className="group flex items-center gap-2 font-semibold uppercase"
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
              className="font-semibold transition-colors hover:text-(--brand-red)"
            >
              Ver todos los productos →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
