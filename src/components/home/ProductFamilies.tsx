import Link from "next/link";

import { productGroups } from "@/data/navigation";

export default function ProductFamilies() {
  return (
    <section className="bg-(--color-surface) py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-(--color-brand-red) uppercase">
              Familias de productos
            </p>

            <h2
              className="font-display max-w-2xl font-semibold leading-none tracking-tight uppercase"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Una línea para cada trabajo.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-(--color-muted-foreground) lg:justify-self-end">
            Equipos desarrollados para soldadura, corte y asistencia de energía
            en aplicaciones profesionales e industriales.
          </p>
        </div>

        <div className="grid border-t border-l border-(--color-border) md:grid-cols-2 lg:grid-cols-3">
          {productGroups.map((group) => (
            <Link
              key={group.name}
              href={group.href}
              className="group relative flex min-h-72 flex-col border-r border-b border-(--color-border) bg-white p-7 transition-colors hover:bg-black hover:text-white lg:p-8"
            >
              <span
                className="mb-8 h-1 w-12"
                style={{ backgroundColor: group.color }}
                aria-hidden="true"
              />

              <h3 className="font-display text-4xl font-semibold tracking-tight uppercase">
                {group.name}
              </h3>

              <ul className="mt-5 space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-(--color-muted-foreground) transition-colors group-hover:text-(--color-steel-300)"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <span className="mt-auto flex items-center gap-2 pt-8 font-semibold text-(--color-brand-red)">
                Ver línea
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/productos"
            className="inline-flex min-h-12 items-center gap-2 font-semibold transition-colors hover:text-(--color-brand-red)"
          >
            Ver todos los productos
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
