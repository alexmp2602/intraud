import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";

import "./globals.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { siteConfig } from "@/data/site";

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Intraud | Equipos de soldadura y corte",
    template: "%s | Intraud",
  },
  description:
    "Fabricación argentina de equipos de soldadura, corte por plasma, cargadores y arrancadores para taller, obra e industria.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Intraud",
    title: "Intraud | Equipos de soldadura y corte",
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intraud | Equipos de soldadura y corte",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone.display,
    foundingDate: "1946",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 24 N.º 3141",
      addressLocality: "Mercedes",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
  };

  return (
    <html lang="es-AR">
      <body className={`${barlow.variable} ${barlowCondensed.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a className="skip-link" href="#contenido-principal">
          Saltar al contenido
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
