"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@/components/common/Button";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/icons/Icons";
import { BRANDS, COMPANY_NAME, NAV_LINKS } from "@/utils/Constants";
import { Images } from "@/utils/Images";
import { BRAND_CATALOGUES } from "@/utils/ProductsData";
import { Routes } from "@/utils/Routes";

const isActive = (pathname: string, href: string) =>
  href === Routes.home ? pathname === href : pathname.startsWith(href);

function BrandDropdown({ pathname }: { pathname: string }) {
  return (
    <ul className="invisible absolute left-1/2 top-full w-[162px] -translate-x-1/2 bg-white opacity-0 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
      {BRANDS.map((brand) => {
        const href = Routes.brand(brand.id);
        const active = pathname === href;
        const logo = <Image src={brand.logo} alt={brand.name} className="h-9 w-auto max-w-[101px] object-contain" />;
        const itemClass = `flex h-16 items-center justify-center border-b border-[#ececec] last:border-b-0 ${
          active ? "bg-dropdown-active border-[#feb9b9]" : "hover:bg-dropdown-active/40"
        }`;

        return (
          <li key={brand.id}>
            {BRAND_CATALOGUES[brand.id] ? (
              <Link href={href} className={itemClass} aria-current={active ? "page" : undefined}>
                {logo}
              </Link>
            ) : (
              <span className={`${itemClass} cursor-default`} title={`${brand.name} catalogue coming soon`}>
                {logo}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="relative mx-auto flex h-[var(--header-height)] w-full max-w-[1440px] items-center justify-between px-4 sm:px-8 xl:pl-[61px] xl:pr-[64px]">
        <Link href={Routes.home} aria-label={COMPANY_NAME}>
          <Image src={Images.logo} alt={COMPANY_NAME} className="h-[76px] w-auto md:h-[88px]" priority />
        </Link>

        <nav className="absolute left-1/2 hidden h-full -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            const linkClass = `relative font-heading text-nav tracking-[-0.04em] transition-colors ${
              active ? "text-dark" : "text-muted hover:text-dark"
            }`;

            if (link.hasDropdown) {
              return (
                <div key={link.label} className="group relative flex h-full items-center">
                  <Link href={link.href} className={`${linkClass} flex items-center gap-1 group-hover:text-dark`}>
                    {link.label}
                    <ChevronDownIcon className="size-5 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100" />
                    {active && <span className="absolute -bottom-0.5 left-0 h-0.5 w-[calc(100%-24px)] bg-primary group-hover:hidden" />}
                  </Link>
                  <BrandDropdown pathname={pathname} />
                </div>
              );
            }

            return (
              <Link key={link.label} href={link.href} className={linkClass}>
                {link.label}
                {active && <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-primary" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href={Routes.contact} className="px-[18px]">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className="text-dark md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-border-light bg-white px-4 py-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-heading text-nav ${
                  (link.hasDropdown ? pathname === link.href : isActive(pathname, link.href))
                    ? "text-primary"
                    : "text-dark"
                }`}
              >
                {link.hasDropdown ? `All ${link.label}` : link.label}
              </Link>
              {/* Mobile has no hover dropdown, so the brand catalogues are listed under Products */}
              {link.hasDropdown && (
                <ul className="mt-3 flex flex-col gap-3 border-l border-border-light pl-4">
                  {BRANDS.filter((brand) => BRAND_CATALOGUES[brand.id]).map((brand) => {
                    const href = Routes.brand(brand.id);
                    return (
                      <li key={brand.id}>
                        <Link
                          href={href}
                          onClick={() => setMenuOpen(false)}
                          aria-current={pathname === href ? "page" : undefined}
                          className={`font-heading text-nav ${pathname === href ? "text-primary" : "text-muted"}`}
                        >
                          {brand.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
          <Button href={Routes.contact} className="mt-2 self-start">
            Get a Quote
          </Button>
        </nav>
      )}
    </header>
  );
}
