export const siteConfig = {
  name: "Intraud",
  url: "https://www.intraud.com",
  description:
    "Equipos de soldadura, corte por plasma, cargadores y arrancadores fabricados en Argentina.",
  phone: {
    display: "02324 425003",
    href: "tel:+542324425003",
  },
  whatsapp: {
    display: "+54 9 11 2029 2119",
    href: "https://wa.me/5491120292119",
  },
  email: "soldadoras@intraud.com",
  address: "Calle 24 N.º 3141, Mercedes, Buenos Aires",
  mapsUrl: "https://maps.google.com/?q=Calle+24+3141+Mercedes+Buenos+Aires",
  catalogUrl: "https://pdf.intraud.com/INTRAUD-catalogo-2026.pdf",
} as const;

export function getWhatsappUrl(message?: string) {
  if (!message) return siteConfig.whatsapp.href;
  return `${siteConfig.whatsapp.href}?text=${encodeURIComponent(message)}`;
}
