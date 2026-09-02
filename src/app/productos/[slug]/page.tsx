import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getCatalogProduct } from "@/lib/catalog";

type ProductPageProps = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getCatalogProduct((await params).slug);
  return product ? { title: `${product.name} | Intraud`, description: product.shortDescription } : {};
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getCatalogProduct((await params).slug);
  if (!product) notFound();

  return (
    <main>
      <section className="border-b border-(--color-border) bg-(--color-surface) py-12 lg:py-16">
        <div className="container">
          <Link href={`/productos?categoria=${product.categoryId}`} className="text-sm font-semibold text-(--color-brand-red)">← Volver a {product.categoryName}</Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-square overflow-hidden bg-white">
              {product.image && <Image src={product.image} alt={product.name} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-8 lg:p-12" />}
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-(--color-brand-red) uppercase">{product.subcategoryName ?? product.categoryName}</p>
              <h1 className="font-display mt-4 text-5xl font-semibold leading-none tracking-tight uppercase sm:text-6xl lg:text-7xl">{product.name}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-(--color-muted-foreground)">{product.shortDescription}</p>
              <Link href="/contacto" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-sm bg-(--color-brand-red) px-6 font-semibold text-white transition-colors hover:bg-(--color-brand-red-dark)">Consultar por este equipo</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20">
        <div className="container max-w-5xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-(--color-brand-red) uppercase">Información técnica</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight uppercase sm:text-5xl">Especificaciones</h2>
          <dl className="mt-8 border-t border-(--color-border)">
            {product.specifications.map((specification) => (
              <div key={specification.key} className="grid gap-2 border-b border-(--color-border) py-4 sm:grid-cols-2 sm:gap-8">
                <dt className="font-semibold">{specification.label}</dt>
                <dd className="text-(--color-muted-foreground)">{specification.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
