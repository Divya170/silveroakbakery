"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { OakIcon } from "./OakIcon";
import { NAV } from "@/lib/site-config";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logo}>
          <OakIcon />
          <span className={styles.wordmark}>
            Silver Oak <span>Bakery</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#201e1d" strokeWidth="2.4" strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>

        <div className={styles.desktopRight}>
          <nav aria-label="Primary" className={styles.desktopNav}>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`${styles.navLink} ${isActive(item.href) ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/menu" className={styles.cta}>
            Explore Our Menu
          </Link>
        </div>
      </div>

      <nav aria-label="Mobile" className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.mobileLink} ${isActive(item.href) ? styles.active : ""}`}
          >
            {item.label}
          </Link>
        ))}
        <Link href="/menu" className={styles.mobileCta}>
          Explore Our Menu
        </Link>
      </nav>
    </header>
  );
}
