import Link from "next/link";
import type { NavItem } from "./home.types";
import styles from "./homepage.module.css";

type HeaderProps = {
  items: NavItem[];
  brandHref?: string;
};

export function Header({ items, brandHref = "#" }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div
        className={styles.headerInner}
        data-load-reveal
        style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
      >
        <Link
          className={styles.brand}
          href={brandHref}
          aria-label="Susan Gallagher home"
        >
          <span
            className={`${styles.brandDot} ${styles.brandDotCobalt}`}
            aria-hidden="true"
          />
          <span className={styles.brandName}>SUSAN GALLAGHER</span>
        </Link>
        <nav aria-label="Primary">
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
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${item.active ? styles.navLinkActive : ""}`}
                    aria-current={item.active ? "page" : undefined}
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
