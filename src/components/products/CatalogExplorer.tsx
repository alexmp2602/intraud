"use client";

import { useMemo, useState } from "react";

import type { CatalogProductSummary } from "@/lib/catalog";

import ProductCard from "./ProductCard";

type CatalogExplorerProps = {
  products: CatalogProductSummary[];
  categoryName?: string;
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

export default function CatalogExplorer({
  products,
  categoryName,
}: CatalogExplorerProps) {
  const [query, setQuery] = useState("");
  const visibleProducts = useMemo(() => {
    const normalizedQuery = normalize(query.trim());
    if (!normalizedQuery) return products;

    return products.filter((product) =>
      normalize(
        `${product.name} ${product.model} ${product.categoryName} ${product.subcategoryName ?? ""}`,
      ).includes(normalizedQuery),
    );
  }, [products, query]);

  return (
    <>
      <div className="mb-8 grid gap-6 border-b border-(--color-border) pb-8 lg:grid-cols-[1fr_minmax(18rem,28rem)] lg:items-end">
        <div>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-balance uppercase sm:text-5xl">
            {categoryName ?? "Todos los equipos"}
          </h2>
          <p className="mt-2 text-sm text-(--color-muted-foreground)" aria-live="polite">
            {visibleProducts.length} {visibleProducts.length === 1 ? "modelo" : "modelos"}
          </p>
        </div>

        <div>
          <label htmlFor="catalog-search" className="mb-2 block text-sm font-semibold">
            Buscar por equipo o modelo
          </label>
          <div className="relative">
            <svg className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-(--color-steel-500)" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="m16.5 16.5 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <input
              id="catalog-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ej.: MIG 250 o cargador"
              className="min-h-12 w-full rounded-sm border border-(--color-border) bg-white pr-4 pl-12 text-base outline-none transition-colors placeholder:text-(--color-steel-500) focus:border-(--color-brand-red)"
            />
          </div>
        </div>
      </div>

      {visibleProducts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-(--color-steel-300) bg-(--color-surface) px-6 py-16 text-center">
          <h3 className="font-display text-3xl font-semibold uppercase">No encontramos ese equipo</h3>
          <p className="mt-3 text-(--color-muted-foreground)">
            Probá con el modelo, el proceso de soldadura o una categoría.
          </p>
          <button type="button" onClick={() => setQuery("")} className="mt-6 min-h-12 rounded-sm bg-black px-5 font-semibold text-white">
            Limpiar búsqueda
          </button>
        </div>
      )}
    </>
  );
}
