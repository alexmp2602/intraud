import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProductCard from "@/components/products/ProductCard";
import { siteConfig } from "@/data/site";
import { getCatalogProduct, getCatalogProducts } from "@/lib/catalog";

type ProductPageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const products = await getCatalogProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getCatalogProduct((await params).slug);
  return product
    ? {
        title: product.name,
        description: product.shortDescription,
        alternates: { canonical: `/productos/${product.slug}` },
        openGraph: {
          title: `${product.name} | Intraud`,
          description: product.shortDescription,
          url: `/productos/${product.slug}`,
          images: product.image ? [{ url: product.image, alt: product.name }] : [],
        },
      }
    : {};
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getCatalogProduct((await params).slug);
  if (!product) notFound();
  const products = await getCatalogProducts();
  const relatedProducts = products
    .filter((candidate) => candidate.categoryId === product.categoryId && candidate.id !== product.id)
    .slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    model: product.model,
    description: product.shortDescription,
    image: product.image ? [product.image] : undefined,
    category: product.subcategoryName ?? product.categoryName,
    brand: { "@type": "Brand", name: "Intraud" },
    manufacturer: {
      "@type": "Organization",
      name: "Intraud",
      url: siteConfig.url,
    },
  };

  return (
    <main id="contenido-principal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <section className="border-b border-(--color-border) bg-(--color-surface) py-12 lg:py-16">
        <div className="container">
          <nav aria-label="Migas de pan" className="flex flex-wrap items-center gap-2 text-sm">
            <Link href="/productos" className="font-semibold hover:text-(--color-brand-red)">Productos</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/productos?categoria=${product.categoryId}`} className="font-semibold hover:text-(--color-brand-red)">{product.categoryName}</Link>
            <span aria-hidden="true">/</span>
            <span className="text-(--color-muted-foreground)" aria-current="page">{product.model}</span>
          </nav>
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-square overflow-hidden border border-(--color-border) bg-white">
              {product.image && <Image src={product.image} alt={`${product.name}, equipo fabricado por Intraud`} fill priority sizes="(min-width: 1440px) 640px, (min-width: 1024px) 50vw, 100vw" className="object-contain p-8 lg:p-12" />}
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-(--color-brand-red) uppercase">{product.subcategoryName ?? product.categoryName}</p>
              <h1 className="font-display mt-4 text-5xl font-semibold leading-none tracking-tight text-balance uppercase sm:text-6xl lg:text-7xl">{product.name}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-(--color-muted-foreground)">{product.shortDescription}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={`/contacto?producto=${encodeURIComponent(product.name)}`} className="inline-flex min-h-12 items-center justify-center rounded-sm bg-(--color-brand-red) px-6 font-semibold text-white transition-colors hover:bg-(--color-brand-red-dark)">Consultar por este equipo</Link>
                {product.datasheetUrl && (
                  <a href={product.datasheetUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-(--color-foreground) px-6 font-semibold transition-colors hover:bg-black hover:text-white">
                    Ver ficha técnica
                  </a>
                )}
              </div>
              <p className="mt-5 text-sm text-(--color-muted-foreground)">Fabricación nacional · Asistencia técnica y repuestos</p>
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
      {relatedProducts.length > 0 && (
        <section className="border-t border-(--color-border) bg-(--color-surface) py-16 lg:py-20">
          <div className="container">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="eyebrow">También puede servirte</p>
                <h2 className="font-display text-4xl font-semibold tracking-tight uppercase sm:text-5xl">Equipos relacionados</h2>
              </div>
              <Link href={`/productos?categoria=${product.categoryId}`} className="inline-flex min-h-11 items-center font-semibold hover:text-(--color-brand-red)">Ver toda la línea →</Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => <ProductCard key={relatedProduct.id} product={relatedProduct} />)}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
