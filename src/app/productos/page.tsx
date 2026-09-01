import Link from "next/link";

import { productGroups } from "@/data/navigation";

export default function ProductsPage() {
  return (
    <main>
      <section className="bg-(--color-surface) py-16 lg:py-20">
        <div className="container">
          <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-(--color-brand-red) uppercase">
            Productos
          </p>

          <h1
            className="font-display max-w-4xl font-semibold leading-none tracking-tight uppercase"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Equipos para cada trabajo.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-(--color-muted-foreground)">
            Explorá las líneas de soldadura, corte y energía desarrolladas por
            Intraud para uso profesional e industrial.
          </p>
        </div>
      </section>

      <section className="border-y border-(--color-border) bg-white">
        <div className="container overflow-x-auto">
          <nav
            className="flex min-w-max items-center gap-1 py-4"
            aria-label="Categorías de productos"
          >
            <Link
              href="/productos"
              className="rounded-sm bg-black px-4 py-2.5 text-sm font-semibold text-white"
            >
              Todos
            </Link>

            {productGroups.map((group) => (
              <Link
                key={group.name}
                href={group.href}
                className="rounded-sm px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-(--color-steel-100)"
              >
                {group.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productGroups.map((group) => (
              <Link
                key={group.name}
                href={group.href}
                className="group flex min-h-64 flex-col border border-(--color-border) p-7 transition-colors hover:bg-black hover:text-white"
              >
                <span
                  className="mb-8 h-1 w-12"
                  style={{ backgroundColor: group.color }}
                  aria-hidden="true"
                />

                <h2 className="font-display text-4xl font-semibold tracking-tight uppercase">
                  {group.name}
                </h2>

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
        </div>
      </section>
    </main>
  );
}
