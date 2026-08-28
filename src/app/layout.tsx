import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";

import "./globals.css";

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
  title: {
    default: "Intraud | Equipos de soldadura y corte",
    template: "%s | Intraud",
  },
  description:
    "Fabricación argentina de equipos de soldadura, corte por plasma, cargadores y arrancadores para taller, obra e industria.",
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
