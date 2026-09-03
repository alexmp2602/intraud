"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="contenido-principal"
      className="container flex min-h-[65svh] flex-col items-start justify-center py-20"
    >
      <p className="eyebrow">Error inesperado</p>
      <h1 className="font-display max-w-3xl text-5xl font-semibold leading-none tracking-tight text-balance uppercase sm:text-7xl">
        No pudimos cargar esta sección.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-(--color-muted-foreground)">
        Puede ser un problema temporal. Intentá nuevamente en unos segundos.
      </p>
      <button
        type="button"
        onClick={retry}
        className="mt-8 min-h-12 rounded-sm bg-(--color-brand-red) px-6 font-semibold text-white"
      >
        Intentar de nuevo
      </button>
    </main>
  );
}
