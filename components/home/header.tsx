"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import type { NavItem } from "./home.types";
import styles from "./homepage.module.css";

type HeaderProps = {
  items: NavItem[];
  brandHref?: string;
};

export function Header({ items, brandHref = "#" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const headerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!headerInnerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div
        ref={headerInnerRef}
        className={styles.headerInner}
        data-load-reveal
        style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
      >
        <Link
          className={styles.brand}
          href={brandHref}
          aria-label="Susan Gallagher home"
        >
          <svg
            className={styles.brandKeyIcon}
            viewBox="0 0 28 28"
            aria-hidden="true"
            focusable="false"
          >
            <rect
              x="3.5"
              y="3.5"
              width="21"
              height="21"
              rx="5"
              className={styles.brandKeyOutline}
            />
            <path
              d="M17.4 10.7c-.7-.8-1.9-1.3-3.4-1.3-2.1 0-3.6 1-3.6 2.6 0 1.3 1 2 3 2.4l1.2.3c1.3.3 1.9.7 1.9 1.6 0 1-.9 1.7-2.5 1.7-1.4 0-2.5-.5-3.3-1.5"
              className={styles.brandKeyLetter}
            />
          </svg>
          <span className={styles.brandName}>SUSAN GALLAGHER</span>
        </Link>
        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={styles.menuToggleIcon} aria-hidden="true">
            <span
              className={`${styles.menuToggleBar} ${
                isMenuOpen ? styles.menuToggleBarTopOpen : ""
              }`}
            />
            <span
              className={`${styles.menuToggleBar} ${
                isMenuOpen ? styles.menuToggleBarMiddleOpen : ""
              }`}
            />
            <span
              className={`${styles.menuToggleBar} ${
                isMenuOpen ? styles.menuToggleBarBottomOpen : ""
              }`}
            />
          </span>
        </button>
        <nav
          id={menuId}
          aria-label="Primary"
          className={`${styles.navPanel} ${isMenuOpen ? styles.navPanelOpen : ""}`}
        >
          <ul className={styles.navList}>
            {items.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${item.active ? styles.navLinkActive : ""}`}
                    aria-current={item.active ? "page" : undefined}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${item.active ? styles.navLinkActive : ""}`}
                    aria-current={item.active ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
