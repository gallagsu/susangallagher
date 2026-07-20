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
            <path
              d="M17.4 10.7c-.7-.8-1.9-1.3-3.4-1.3-2.1 0-3.6 1-3.6 2.6 0 1.3 1 2 3 2.4l1.2.3c1.3.3 1.9.7 1.9 1.6 0 1-.9 1.7-2.5 1.7-1.4 0-2.5-.5-3.3-1.5"
              className={styles.brandKeyLetter}
            />
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
