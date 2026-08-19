import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Intraud",
    template: "%s | Intraud",
  },
  description:
    "Equipos de soldadura, corte por plasma, cargadores y soluciones para uso profesional e industrial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${barlow.variable} ${barlowCondensed.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
