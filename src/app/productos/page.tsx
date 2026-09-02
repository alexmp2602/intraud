import Link from "next/link";

import ProductCard from "@/components/products/ProductCard";
import { productGroups } from "@/data/navigation";
import { getCatalogProducts } from "@/lib/catalog";

type ProductsPageProps = { searchParams: Promise<{ categoria?: string }> };

export const dynamic = "force-dynamic";

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const [{ categoria }, products] = await Promise.all([searchParams, getCatalogProducts()]);
  const selectedCategory = productGroups.some((group) => group.href === `/productos?categoria=${categoria}`) ? categoria : undefined;
  const visibleProducts = selectedCategory ? products.filter((product) => product.categoryId === selectedCategory) : products;

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

      <section className="sticky top-15 z-20 border-y border-(--color-border) bg-white/95 backdrop-blur">
        <div className="container overflow-x-auto">
          <nav
            className="flex min-w-max items-center gap-1 py-4"
            aria-label="Categorías de productos"
          >
            <Link
              href="/productos"
              className={`rounded-sm px-4 py-2.5 text-sm font-semibold ${!selectedCategory ? "bg-black text-white" : "hover:bg-(--color-steel-100)"}`}
            >
              Todos
            </Link>

            {productGroups.map((group) => {
              const active = group.href.endsWith(`=${selectedCategory}`);
              return <Link key={group.name} href={group.href} className={`rounded-sm px-4 py-2.5 text-sm font-semibold transition-colors ${active ? "bg-black text-white" : "hover:bg-(--color-steel-100)"}`}>{group.name}</Link>;
            })}
          </nav>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-semibold tracking-tight uppercase">
              {selectedCategory ? productGroups.find((group) => group.href.endsWith(`=${selectedCategory}`))?.name : "Todos los equipos"}
            </h2>
            <p className="text-sm text-(--color-muted-foreground)">{visibleProducts.length} modelos</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
