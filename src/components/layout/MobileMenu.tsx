"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navigation, productGroups } from "@/data/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="flex size-11 items-center justify-center rounded-sm lg:hidden"
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="flex w-6 flex-col gap-1.25" aria-hidden="true">
          <span className="h-0.5 w-full bg-(--color-foreground)" />
          <span className="h-0.5 w-full bg-(--color-foreground)" />
          <span className="h-0.5 w-full bg-(--color-foreground)" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-white p-0 text-(--color-foreground) backdrop:bg-black/35 lg:hidden"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="container flex h-20 items-center justify-between border-b border-(--color-border)">
          <span className="font-display text-xl font-semibold uppercase">
            Menú
          </span>
          <button
            type="button"
            className="relative flex size-11 items-center justify-center rounded-sm"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          >
            <span className="relative size-6" aria-hidden="true">
              <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rotate-45 bg-(--color-foreground)" />
              <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 -rotate-45 bg-(--color-foreground)" />
            </span>
          </button>
        </div>
        <nav
          className="container h-[calc(100dvh-5rem)] overflow-y-auto py-8"
          aria-label="Navegación móvil"
        >
          <details className="group border-b border-(--color-border) pb-6">
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
                  className="flex items-center gap-3 text-lg text-(--color-muted-foreground) transition-colors hover:text-(--color-foreground)"
                  onClick={closeMenu}
                >
                  <span
                    className="h-0.5 w-5 shrink-0"
                    style={{ backgroundColor: item.color }}
                    aria-hidden="true"
                  />

                  {item.name}
                </Link>
              ))}

              <Link
                href="/productos"
                className="mt-2 font-semibold text-(--color-brand-red)"
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
                className="border-b border-(--color-border) py-6 font-display text-3xl font-semibold uppercase transition-colors hover:text-(--color-brand-red)"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </dialog>
    </>
  );
}
