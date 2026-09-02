export default function ProductsLoading() {
  return (
    <main className="container py-20" aria-busy="true" aria-label="Cargando productos">
      <div className="h-12 w-72 animate-pulse bg-(--color-steel-200)" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => <div key={index} className="aspect-4/3 animate-pulse bg-(--color-steel-100)" />)}
      </div>
    </main>
  );
}
