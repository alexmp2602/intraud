import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="bg-(--color-brand-red) py-16 text-white lg:py-20">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] uppercase">
              Hablemos
            </p>

            <h2
              className="font-display max-w-4xl font-semibold leading-none tracking-tight uppercase"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Encontrá el equipo adecuado para tu trabajo.
            </h2>
          </div>

          <Link
            href="/contacto"
            className="inline-flex min-h-12 w-fit items-center justify-center rounded-sm bg-black px-6 font-semibold transition-colors hover:bg-(--color-graphite)"
          >
            Contactanos
          </Link>
        </div>
      </div>
    </section>
  );
}
