import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/data/navigation";

import MobileMenu from "./MobileMenu";
import ProductMenu from "./ProductMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-white">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" aria-label="Ir al inicio">
          <Image
            src="/images/brand/intraud-logo.png"
            alt="Intraud"
            width={575}
            height={230}
            sizes="150px"
            priority
            className="h-15 w-37.5 shrink-0"
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
              className="text-[15px] font-semibold transition-colors hover:text-(--color-brand-red)"
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
