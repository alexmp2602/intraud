export default function ProductsLoading() {
  return (
    <main id="contenido-principal" className="container py-20" aria-busy="true" aria-label="Cargando productos">
      <span className="sr-only">Cargando catálogo</span>
      <div className="h-12 w-72 max-w-full animate-pulse bg-(--color-steel-200) motion-reduce:animate-none" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => <div key={index} className="aspect-4/3 animate-pulse bg-(--color-steel-100) motion-reduce:animate-none" />)}
      </div>
    </main>
  );
}
