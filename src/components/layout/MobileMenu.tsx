"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Servicio técnico", href: "/servicio-tecnico" },
  { label: "Empresa", href: "/empresa" },
  { label: "Contacto", href: "/contacto" },
];

const productGroups = [
  {
    label: "Arco",
    href: "/productos?categoria=arco",
    color: "var(--category-arc)",
  },
  {
    label: "TIG",
    href: "/productos?categoria=tig",
    color: "var(--category-tig)",
  },
  {
    label: "MIG",
    href: "/productos?categoria=mig",
    color: "var(--category-mig)",
  },
  {
    label: "Plasma",
    href: "/productos?categoria=plasma",
    color: "var(--category-plasma)",
  },
  {
    label: "Cargadores",
    href: "/productos?categoria=cargadores",
    color: "var(--category-chargers)",
  },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="relative z-60 flex size-11 items-center justify-center lg:hidden"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <span className="relative size-6" aria-hidden="true">
            <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rotate-45 bg-(--foreground)" />
            <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 -rotate-45 bg-(--foreground)" />
          </span>
        ) : (
          <span className="flex w-6 flex-col gap-1.25" aria-hidden="true">
            <span className="h-0.5 w-full bg-(--foreground)" />
            <span className="h-0.5 w-full bg-(--foreground)" />
            <span className="h-0.5 w-full bg-(--foreground)" />
          </span>
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-24 bottom-0 z-50 bg-white text-(--foreground) lg:hidden"
        >
          <nav
            className="container h-full overflow-y-auto py-8"
            aria-label="Navegación mobile"
          >
            <details className="group border-b border-(--border) pb-6">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2 font-display text-3xl font-semibold uppercase">
                Productos
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="size-5 transition-transform group-open:rotate-180"
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
              </summary>

              <div className="mt-5 grid gap-4 pb-2">
                {productGroups.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 text-lg text-(--muted-foreground) transition-colors hover:text-(--foreground)"
                    onClick={closeMenu}
                  >
                    <span
                      className="h-0.5 w-5 shrink-0"
                      style={{ backgroundColor: item.color }}
                      aria-hidden="true"
                    />

                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/productos"
                  className="mt-2 font-semibold text-(--brand-red)"
                  onClick={closeMenu}
                >
                  Ver todos los productos →
                </Link>
              </div>
            </details>

            <div className="grid">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-(--border) py-6 font-display text-3xl font-semibold uppercase transition-colors hover:text-(--brand-red)"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
