import Image from "next/image";
import Link from "next/link";

import MobileMenu from "./MobileMenu";
import ProductMenu from "./ProductMenu";

const navigation = [
  { label: "Servicio técnico", href: "/servicio-tecnico" },
  { label: "Empresa", href: "/empresa" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  return (
    <header className="border-b border-(--border) bg-white">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" aria-label="Ir al inicio">
          <Image
            src="/images/brand/intraud-logo.png"
            alt="Intraud"
            width={575}
            height={230}
            sizes="144px"
            priority
            className="h-auto w-36 shrink-0"
          />
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegación principal"
        >
          <ProductMenu />

          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-semibold transition-colors hover:text-(--brand-red)"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
