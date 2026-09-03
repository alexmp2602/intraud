import Image from "next/image";
import Link from "next/link";

import { navigation, productGroups } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-16 lg:py-20">
          <div>
            <Link href="/" aria-label="Ir al inicio" className="inline-flex">
              <Image
                src="/images/brand/intraud-logo.png"
                alt="Intraud"
                width={575}
                height={230}
                sizes="150px"
                className="h-15 w-37.5"
              />
            </Link>

            <p className="mt-6 max-w-sm leading-relaxed text-(--color-steel-300)">
              Equipos de soldadura, corte y energía desarrollados para taller,
              obra e industria.
            </p>

            <address className="mt-5 space-y-2 text-sm not-italic text-(--color-steel-300)">
              <a
                className="block transition-colors hover:text-white"
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                {siteConfig.address}
              </a>
              <a
                className="block transition-colors hover:text-white"
                href={siteConfig.phone.href}
              >
                {siteConfig.phone.display}
              </a>
              <a
                className="block transition-colors hover:text-white"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </address>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold tracking-[0.14em] text-(--color-steel-500) uppercase">
              Productos
            </p>

            <nav aria-label="Productos">
              <ul className="space-y-3">
                {productGroups.map((group) => (
                  <li key={group.name}>
                    <Link
                      href={group.href}
                      className="transition-colors hover:text-(--color-brand-red)"
                    >
                      {group.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold tracking-[0.14em] text-(--color-steel-500) uppercase">
              Intraud
            </p>

            <nav aria-label="Intraud">
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-(--color-brand-red)"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                <li>
                  <Link
                    href="/productos"
                    className="transition-colors hover:text-(--color-brand-red)"
                  >
                    Todos los productos
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-(--color-steel-500) sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Intraud</p>

          <p>Industria argentina desde 1946</p>
        </div>
      </div>
    </footer>
  );
}
