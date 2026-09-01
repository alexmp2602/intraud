import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero-welding.webp"
          alt="Soldador trabajando con un equipo Intraud"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[58%_center] md:object-[50%_center] lg:object-[45%_center]"
        />

        <div
          className="absolute inset-0 bg-linear-to-r from-black/95 via-black/75 to-black/30 md:from-black md:via-black/70 md:to-black/20"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20 md:from-black/40 md:to-black/10"
          aria-hidden="true"
        />
      </div>

      <div className="container relative z-10 flex min-h-[calc(100dvh-97px)] items-center py-10 md:py-12 lg:py-16">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.18em] text-(--color-brand-red) uppercase md:mb-6">
            Industria argentina
          </p>

          <h1
            className="font-display font-semibold leading-[0.88] tracking-tight uppercase"
            style={{ fontSize: "var(--text-display-xl)" }}
          >
            Equipos hechos
            <br />
            para trabajar.
          </h1>

          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-(--color-steel-300) sm:text-lg md:mt-8 md:text-xl">
            Equipos de soldadura y corte desarrollados para responder en taller,
            obra e industria.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5 md:mt-10">
            <Link
              href="/productos"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-(--color-brand-red) px-6 font-semibold transition-colors hover:bg-(--color-brand-red-dark)"
            >
              Ver productos
            </Link>

            <Link
              href="/empresa"
              className="inline-flex min-h-12 items-center gap-2 font-semibold transition-colors hover:text-(--color-brand-red)"
            >
              Conocé Intraud
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
