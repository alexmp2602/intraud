import type { Metadata } from "next";

import PageHero from "@/components/layout/PageHero";
import { getWhatsappUrl, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a Intraud para asesoramiento comercial, servicio técnico o información sobre equipos.",
  alternates: { canonical: "/contacto" },
};

type ContactPageProps = { searchParams: Promise<{ producto?: string }> };

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { producto } = await searchParams;
  const message = producto
    ? `Hola Intraud, quisiera consultar por el equipo ${producto}.`
    : "Hola Intraud, quisiera hacer una consulta.";

  return (
    <main id="contenido-principal">
      <PageHero
        eyebrow="Contacto"
        title={producto ? `Consultá por ${producto}.` : "Hablemos de tu próximo equipo."}
        description="Asesoramiento comercial, consultas técnicas y coordinación de reparaciones desde Mercedes, Buenos Aires."
      />

      <section className="py-16 lg:py-24">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a href={getWhatsappUrl(message)} target="_blank" rel="noreferrer" className="group flex min-h-64 flex-col border border-(--color-border) p-7 transition-colors hover:bg-black hover:text-white">
            <span className="eyebrow">Respuesta directa</span>
            <h2 className="font-display text-4xl font-semibold uppercase">WhatsApp</h2>
            <p className="mt-4 text-(--color-muted-foreground) transition-colors group-hover:text-(--color-steel-300)">{siteConfig.whatsapp.display}</p>
            <span className="mt-auto pt-8 font-semibold text-(--color-brand-red)">Iniciar conversación →</span>
          </a>
          <a href={siteConfig.phone.href} className="group flex min-h-64 flex-col border border-(--color-border) p-7 transition-colors hover:bg-black hover:text-white">
            <span className="eyebrow">Atención telefónica</span>
            <h2 className="font-display text-4xl font-semibold uppercase">Teléfono</h2>
            <p className="mt-4 text-(--color-muted-foreground) transition-colors group-hover:text-(--color-steel-300)">{siteConfig.phone.display}</p>
            <span className="mt-auto pt-8 font-semibold text-(--color-brand-red)">Llamar ahora →</span>
          </a>
          <a href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(producto ? `Consulta por ${producto}` : "Consulta desde el sitio web")}`} className="group flex min-h-64 flex-col border border-(--color-border) p-7 transition-colors hover:bg-black hover:text-white md:col-span-2 lg:col-span-1">
            <span className="eyebrow">Consultas por correo</span>
            <h2 className="font-display text-4xl font-semibold uppercase">Email</h2>
            <p className="mt-4 break-all text-(--color-muted-foreground) transition-colors group-hover:text-(--color-steel-300)">{siteConfig.email}</p>
            <span className="mt-auto pt-8 font-semibold text-(--color-brand-red)">Escribir un correo →</span>
          </a>
        </div>
      </section>

      <section className="border-t border-(--color-border) bg-(--color-surface) py-16 lg:py-20">
        <div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">Planta industrial</p>
            <h2 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-balance uppercase sm:text-5xl">Estamos en Mercedes, Buenos Aires.</h2>
            <address className="mt-5 text-lg not-italic text-(--color-muted-foreground)">{siteConfig.address}</address>
          </div>
          <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 w-fit items-center rounded-sm border border-(--color-foreground) px-6 font-semibold hover:bg-black hover:text-white">Abrir en Google Maps →</a>
        </div>
      </section>
    </main>
  );
}
