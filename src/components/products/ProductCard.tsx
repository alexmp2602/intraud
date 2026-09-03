import Image from "next/image";
import Link from "next/link";

import type { CatalogProductSummary } from "@/lib/catalog";

export default function ProductCard({
  product,
}: {
  product: CatalogProductSummary;
}) {
  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group flex flex-col overflow-hidden border border-(--color-border) bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgb(0_0_0/0.08)]"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-(--color-steel-100)">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-(--color-muted-foreground)">
            Imagen próximamente
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase">
          <span
            className="h-1 w-8"
            style={{
              backgroundColor:
                product.categoryColor ?? "var(--color-brand-red)",
            }}
            aria-hidden="true"
          />
          {product.subcategoryName ?? product.categoryName}
        </div>
        <h2 className="font-display text-3xl font-semibold leading-none tracking-tight text-balance uppercase">
          {product.name}
        </h2>
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-(--color-muted-foreground)">
          {product.shortDescription}
        </p>
        <span className="mt-auto pt-7 font-semibold text-(--color-brand-red)">
          Ver especificaciones →
        </span>
      </div>
    </Link>
  );
}
