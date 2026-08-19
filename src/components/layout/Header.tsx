import Image from "next/image";
import Link from "next/link";

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
            width={240}
            height={72}
            priority
            className="h-auto w-41.25"
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

        <button
          type="button"
          className="flex size-11 items-center justify-center lg:hidden"
          aria-label="Abrir menú"
        >
          <span className="flex w-6 flex-col gap-1.25" aria-hidden="true">
            <span className="h-0.5 w-full bg-(--foreground)" />
            <span className="h-0.5 w-full bg-(--foreground)" />
            <span className="h-0.5 w-full bg-(--foreground)" />
          </span>
        </button>
      </div>
    </header>
  );
}
