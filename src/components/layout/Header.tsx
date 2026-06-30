"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const nav = [
  { href: "/works", label: "実績" },
  { href: "/about", label: "プロフィール" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-avatar.webp"
            alt={`${site.name} ロゴ`}
            width={36}
            height={36}
            priority
            className="h-9 w-9 rounded-full"
          />
          <span className="flex items-baseline gap-2">
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              {site.name}
            </span>
            <span className="hidden font-mono text-[11px] text-brand-accent sm:inline">
              {site.role}
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {!isHome && (
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm text-foreground/60 hover:text-foreground"
            >
              ← トップ
            </Link>
          )}
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-foreground/70 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="ml-1 hidden rounded-lg bg-brand px-3.5 py-2 text-sm font-medium text-white hover:bg-brand-light sm:inline-block"
          >
            相談する
          </a>
        </nav>
      </div>
    </header>
  );
}
