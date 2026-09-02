import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Conocé la historia, la planta industrial y el desarrollo argentino detrás de los equipos Intraud desde 1946.",
  alternates: { canonical: "/empresa" },
};

const milestones = [
  { year: "1946", text: "Desiderio J. Romans Boucett inicia la fabricación familiar de transformadores en Los Toldos." },
  { year: "1949", text: "La empresa se instala en Mercedes para acercarse a sus proveedores y clientes." },
  { year: "1995", text: "El crecimiento de la producción impulsa el traslado a la planta industrial actual." },
  { year: "1999", text: "Se incorpora un laboratorio propio para desarrollo y ensayo de equipos de soldadura." },
  { year: "2000", text: "Intraud presenta en EMAQH su primer equipo de soldadura con tecnología inverter argentina." },
  { year: "Hoy", text: "La tercera generación continúa desarrollando equipos, procesos y respaldo posventa nacional." },
];

const principles = [
  ["Producción propia", "Control de cada etapa: electrónica, bobinado, mecanizado, montaje y ensayo final."],
  ["Ingeniería nacional", "Diseño y mejora continua de equipos pensados para las condiciones reales de trabajo."],
  ["Respaldo técnico", "Asesoramiento, reparación y disponibilidad de repuestos para extender la vida útil."],
];

export default function CompanyPage() {
  return (
    <main id="contenido-principal">
      <PageHero
        eyebrow="Empresa"
        title="Tres generaciones construyendo industria."
        description="Desde 1946 desarrollamos y fabricamos equipos de soldadura, corte y energía en Mercedes, Buenos Aires."
      />

      <section className="py-16 lg:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div className="relative aspect-4/3 overflow-hidden bg-(--color-steel-100)">
            <Image src="/images/home/intraud-factory.webp" alt="Planta industrial de Intraud en Mercedes" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow">Planta industrial</p>
            <h2 className="font-display text-4xl font-semibold leading-none tracking-tight text-balance uppercase sm:text-5xl">La calidad empieza en el proceso.</h2>
            <p className="mt-6 text-lg leading-relaxed text-(--color-muted-foreground)">
              Fabricamos nuestras piezas en una planta de 4.000 m². Contamos con área de electrónica, programación de microprocesadores, bobinado, mecanizado y controles propios para seguir cada equipo desde su diseño hasta el ensayo final.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-(--color-border) pt-8">
              <div><strong className="font-display block text-5xl text-(--color-brand-red)">80</strong><span className="text-sm text-(--color-muted-foreground)">años de trayectoria</span></div>
              <div><strong className="font-display block text-5xl text-(--color-brand-red)">4.000</strong><span className="text-sm text-(--color-muted-foreground)">m² de planta industrial</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white lg:py-24">
        <div className="container">
          <p className="eyebrow">Nuestra historia</p>
          <h2 className="font-display max-w-3xl text-4xl font-semibold leading-none tracking-tight text-balance uppercase sm:text-5xl">Experiencia que se transforma en producto.</h2>
          <ol className="mt-12 grid border-t border-white/15 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map((milestone) => (
              <li key={milestone.year} className="border-b border-white/15 py-8 md:px-7 md:first:pl-0 lg:border-r lg:nth-[3n]:border-r-0">
                <span className="font-display text-4xl font-semibold text-(--color-brand-red)">{milestone.year}</span>
                <p className="mt-4 max-w-sm leading-relaxed text-(--color-steel-300)">{milestone.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <p className="eyebrow">Cómo trabajamos</p>
          <div className="grid gap-8 lg:grid-cols-3">
            {principles.map(([title, description], index) => (
              <article key={title} className="border-t-2 border-(--color-brand-red) pt-6">
                <span className="text-sm font-semibold text-(--color-steel-500)">0{index + 1}</span>
                <h2 className="font-display mt-5 text-3xl font-semibold uppercase">{title}</h2>
                <p className="mt-4 leading-relaxed text-(--color-muted-foreground)">{description}</p>
              </article>
            ))}
          </div>
          <Link href="/productos" className="mt-12 inline-flex min-h-12 items-center rounded-sm bg-(--color-brand-red) px-6 font-semibold text-white hover:bg-(--color-brand-red-dark)">Conocer nuestros equipos</Link>
        </div>
      </section>
    </main>
  );
}
