import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Catalogo() {
  return (
    <section className="bg-(--color-black) py-16 text-white lg:py-20">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] uppercase text-(--color-brand-red)">
              Catálogo 2026
            </p>

            <h2
              className="font-display max-w-4xl font-semibold leading-none tracking-tight uppercase"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Mirá el catálogo completo y encontrá el equipo adecuado para tu
              trabajo.
            </h2>
          </div>

          <Link
            href={siteConfig.catalogUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-fit items-center justify-center rounded-sm bg-(--color-brand-red) px-6 font-semibold transition-colors hover:bg-(--color-brand-red-dark)"
          >
            Abrir catálogo PDF
          </Link>
        </div>
      </div>
    </section>
  );
}
