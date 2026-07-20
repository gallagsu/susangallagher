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
            <rect
              x="6.5"
              y="6.5"
              width="15"
              height="15"
              rx="3"
              className={styles.brandKeyInset}
            />
            <text
              x="14"
              y="17"
              textAnchor="middle"
              className={styles.brandKeyLetter}
            >
              S
            </text>
          </svg>
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
