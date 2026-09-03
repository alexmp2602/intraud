import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/layout/PageHero";
import CatalogExplorer from "@/components/products/CatalogExplorer";
import { productGroups } from "@/data/navigation";
import { getCatalogProducts } from "@/lib/catalog";

type ProductsPageProps = { searchParams: Promise<{ categoria?: string }> };

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description:
    "Explorá el catálogo 2026 de soldadoras, equipos de corte por plasma, cargadores y arrancadores Intraud.",
  alternates: { canonical: "/productos" },
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const [{ categoria }, products] = await Promise.all([
    searchParams,
    getCatalogProducts(),
  ]);
  const selectedCategory = productGroups.some(
    (group) => group.href === `/productos?categoria=${categoria}`,
  )
    ? categoria
    : undefined;
  const visibleProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory)
    : products;
  const selectedCategoryName = selectedCategory
    ? productGroups.find((group) => group.href.endsWith(`=${selectedCategory}`))
        ?.name
    : undefined;

  return (
    <main id="contenido-principal">
      <PageHero
        eyebrow="Catálogo 2026"
        title="Equipos para cada trabajo."
        description="Explorá las líneas de soldadura, corte y energía desarrolladas por Intraud para uso profesional e industrial."
      />

      <section className="sticky top-20 z-20 border-b border-(--color-border) bg-white/95 backdrop-blur-md">
        <div className="container overflow-x-auto">
          <nav
            className="flex min-w-max items-center gap-1 py-4"
            aria-label="Categorías de productos"
          >
            <Link
              href="/productos"
              aria-current={!selectedCategory ? "page" : undefined}
              className={`rounded-sm px-4 py-2.5 text-sm font-semibold ${!selectedCategory ? "bg-black text-white" : "hover:bg-(--color-steel-100)"}`}
            >
              Todos
            </Link>

            {productGroups.map((group) => {
              const active = group.href.endsWith(`=${selectedCategory}`);
              return (
                <Link
                  key={group.name}
                  href={group.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-sm px-4 py-2.5 text-sm font-semibold transition-colors ${active ? "bg-black text-white" : "hover:bg-(--color-steel-100)"}`}
                >
                  {group.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container">
          <CatalogExplorer
            products={visibleProducts}
            categoryName={selectedCategoryName}
          />
        </div>
      </section>
    </main>
  );
}
