import Image from "next/image";
import Link from "next/link";

import { navigation, productGroups } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/soldadorasintraud/",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/Intraud",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/intraud-s-a/posts/",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@SoldadorasIntraud",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

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
              Equipos de soldadura, corte plasma y cargadores de baterías.
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

            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visita nuestro ${item.name}`}
                  className="text-(--color-steel-300) transition-colors hover:text-(--color-brand-red)"
                >
                  {item.icon}
                </a>
              ))}
            </div>
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
