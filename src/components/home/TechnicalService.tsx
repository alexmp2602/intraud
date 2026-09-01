import Link from "next/link";

const services = [
  "Diagnóstico técnico",
  "Reparación de equipos",
  "Asistencia y repuestos",
];

export default function TechnicalService() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-(--color-brand-red) uppercase">
              Servicio técnico
            </p>

            <h2
              className="font-display max-w-3xl font-semibold leading-none tracking-tight uppercase"
              style={{ fontSize: "var(--text-h1)" }}
            >
              Respaldo para seguir trabajando.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-(--color-muted-foreground)">
              Asistencia técnica para acompañar el rendimiento y la vida útil de
              los equipos Intraud.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/contacto"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-(--color-brand-red) px-6 font-semibold text-white transition-colors hover:bg-(--color-brand-red-dark)"
              >
                Solicitar asistencia
              </Link>

              <Link
                href="/servicio-tecnico"
                className="inline-flex min-h-12 items-center gap-2 font-semibold transition-colors hover:text-(--color-brand-red)"
              >
                Ver servicio técnico
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="border-t border-(--color-border)">
            {services.map((service, index) => (
              <div
                key={service}
                className="flex items-center gap-5 border-b border-(--color-border) py-6"
              >
                <span className="font-display text-2xl font-semibold text-(--color-brand-red)">
                  0{index + 1}
                </span>

                <span className="font-display text-2xl font-semibold uppercase">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
