import Link from "next/link";
import type { NavItem } from "./home.types";
import styles from "./homepage.module.css";

type FooterProps = {
  items: NavItem[];
  brandHref?: string;
  borderless?: boolean;
};

export function Footer({
  items,
  brandHref = "#top",
  borderless = false,
}: FooterProps) {
  return (
    <footer className={`${styles.footer} ${borderless ? styles.footerBorderless : ""}`}>
      <div className={styles.footerInner}>
        <Link href={brandHref} className={styles.footerBrand}>
          SUSAN GALLAGHER
        </Link>
        <nav aria-label="Footer">
          <ul className={styles.footerNav}>
            {items.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.href}
                    className={styles.footerLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.footerMeta}>
          © 2026 SUSAN GALLAGHER
        </p>
      </div>
    </footer>
  );
}
