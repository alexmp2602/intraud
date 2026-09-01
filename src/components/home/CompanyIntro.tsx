import Image from "next/image";
import Link from "next/link";

export default function CompanyIntro() {
  return (
    <section className="relative overflow-hidden bg-(--color-graphite) text-white">
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/images/home/intraud-factory.webp"
          alt="Planta industrial de Intraud en Mercedes, Buenos Aires"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          className="absolute inset-0 bg-linear-to-r from-(--color-graphite) from-30% to-transparent to-100%"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-black/10"
          aria-hidden="true"
        />
      </div>

      <div className="container relative z-10 py-16 lg:flex lg:min-h-160 lg:items-center lg:py-20">
        <div className="max-w-xl">
          <p className="mb-8 text-sm font-semibold tracking-[0.18em] text-(--color-brand-red) uppercase">
            Trayectoria Intraud
          </p>

          <p className="mb-2 text-sm font-semibold tracking-[0.16em] text-(--color-steel-300) uppercase">
            Desde
          </p>

          <p className="font-display text-8xl font-semibold leading-none tracking-tight text-(--color-brand-red) lg:text-9xl">
            1946
          </p>

          <div
            className="my-10 h-0.5 w-12 bg-(--color-brand-red)"
            aria-hidden="true"
          />

          <h2
            className="font-display max-w-xl font-semibold leading-none tracking-tight uppercase"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Equipos hechos con experiencia industrial.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-(--color-steel-300)">
            Intraud desarrolla y fabrica equipos de soldadura, corte y energía
            desde Mercedes, Buenos Aires, combinando trayectoria, conocimiento
            técnico y producción nacional.
          </p>

          <Link
            href="/empresa"
            className="mt-8 inline-flex min-h-12 w-fit items-center gap-2 font-semibold transition-colors hover:text-(--color-brand-red)"
          >
            Conocé nuestra historia
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
