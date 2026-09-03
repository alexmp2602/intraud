import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/layout/PageHero";
import { getWhatsappUrl, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Servicio técnico",
  description:
    "Diagnóstico, reparación y coordinación logística para equipos Intraud, dentro o fuera de garantía.",
  alternates: { canonical: "/servicio-tecnico" },
};

const steps = [
  [
    "Contanos qué sucede",
    "Nuestro equipo técnico evalúa el problema y, cuando es posible, te guía para resolverlo sin trasladar la máquina.",
  ],
  [
    "Coordinamos la recepción",
    "Podés acercar el equipo a la fábrica o consultar por el depósito del área Buenos Aires y opciones de transporte.",
  ],
  [
    "Reparamos y probamos",
    "Realizamos el diagnóstico, la reparación y los controles necesarios antes de coordinar la entrega.",
  ],
];

export default function TechnicalServicePage() {
  const whatsappUrl = getWhatsappUrl(
    "Hola Intraud, necesito asistencia técnica para un equipo.",
  );

  return (
    <main id="contenido-principal">
      <PageHero
        eyebrow="Servicio técnico"
        title="Tu equipo puede seguir trabajando."
        description="Acompañamos los equipos Intraud durante toda su vida útil, sin importar su antigüedad ni si están dentro de garantía."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center rounded-sm bg-(--color-brand-red) px-6 font-semibold text-white hover:bg-(--color-brand-red-dark)"
          >
            Hablar con servicio técnico
          </a>
          <a
            href={siteConfig.phone.href}
            className="inline-flex min-h-12 items-center rounded-sm border border-(--color-foreground) px-6 font-semibold hover:bg-black hover:text-white"
          >
            Llamar al {siteConfig.phone.display}
          </a>
        </div>
      </PageHero>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Cómo funciona</p>
              <h2 className="font-display text-4xl font-semibold leading-none tracking-tight text-balance uppercase sm:text-5xl">
                Una solución clara, paso a paso.
              </h2>
            </div>
            <ol className="border-t border-(--color-border)">
              {steps.map(([title, description], index) => (
                <li
                  key={title}
                  className="grid gap-4 border-b border-(--color-border) py-7 sm:grid-cols-[4rem_1fr]"
                >
                  <span className="font-display text-3xl font-semibold text-(--color-brand-red)">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-semibold uppercase">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-(--color-muted-foreground)">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div>
            <p className="eyebrow">Reparación express</p>
            <h2 className="font-display text-3xl font-semibold uppercase">
              Menos tiempo detenido
            </h2>
            <p className="mt-4 leading-relaxed text-(--color-steel-300)">
              Según el diagnóstico, algunas reparaciones pueden resolverse en el
              día. Es necesario coordinar un turno previamente.
            </p>
          </div>
          <div>
            <p className="eyebrow">Logística</p>
            <h2 className="font-display text-3xl font-semibold uppercase">
              Recepción coordinada
            </h2>
            <p className="mt-4 leading-relaxed text-(--color-steel-300)">
              Consultá por recepción en fábrica, depósito del área Buenos Aires
              o retiro y despacho mediante transporte.
            </p>
          </div>
          <div>
            <p className="eyebrow">Respaldo</p>
            <h2 className="font-display text-3xl font-semibold uppercase">
              Repuestos y experiencia
            </h2>
            <p className="mt-4 leading-relaxed text-(--color-steel-300)">
              La fabricación propia y el conocimiento técnico permiten reparar
              equipos incluso después de muchos años de uso.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center lg:py-20">
        <div className="container">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-balance uppercase sm:text-5xl">
            ¿Necesitás revisar un equipo?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-(--color-muted-foreground)">
            Tené a mano el modelo y contanos qué comportamiento presenta para
            agilizar el diagnóstico.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex min-h-12 items-center rounded-sm bg-(--color-brand-red) px-6 font-semibold text-white hover:bg-(--color-brand-red-dark)"
          >
            Ver todas las vías de contacto
          </Link>
        </div>
      </section>
    </main>
  );
}
