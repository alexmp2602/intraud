import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/data/navigation";

import MobileMenu from "./MobileMenu";
import ProductMenu from "./ProductMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" aria-label="Ir al inicio">
          <Image
            src="/images/brand/intraud-logo.png"
            alt="Intraud"
            width={575}
            height={230}
            sizes="150px"
            priority
            className="h-auto w-32 shrink-0 sm:w-37.5"
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
              className="inline-flex min-h-11 items-center text-[15px] font-semibold transition-colors hover:text-(--color-brand-red)"
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
