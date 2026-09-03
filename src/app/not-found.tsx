import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="contenido-principal"
      className="container flex min-h-[65svh] flex-col items-start justify-center py-20"
    >
      <p className="eyebrow">Error 404</p>
      <h1 className="font-display max-w-3xl text-5xl font-semibold leading-none tracking-tight text-balance uppercase sm:text-7xl">
        Esta página no está en el taller.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-(--color-muted-foreground)">
        La dirección puede haber cambiado o el contenido ya no está disponible.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center rounded-sm bg-black px-6 font-semibold text-white"
        >
          Volver al inicio
        </Link>
        <Link
          href="/productos"
          className="inline-flex min-h-12 items-center rounded-sm border border-(--color-foreground) px-6 font-semibold"
        >
          Ver productos
        </Link>
      </div>
    </main>
  );
}
