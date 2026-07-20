import Link from "next/link";
import styles from "./homepage.module.css";

export function Hero() {
  return (
    <section className={styles.heroSection} aria-labelledby="home-hero-title">
      <div className={styles.heroContent}>
        <p
          className={styles.heroEyebrow}
          data-load-reveal
          style={{ "--reveal-delay": "40ms" } as React.CSSProperties}
        >
          Product &amp; UX Designer · Dublin
        </p>
        <h1
          id="home-hero-title"
          className={styles.heroTitle}
          data-load-reveal
          style={{ "--reveal-delay": "110ms" } as React.CSSProperties}
        >
          Product and UX designer with a background in development and building
          digital businesses.
        </h1>
        <p
          className={styles.heroIntro}
          data-load-reveal
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
        >
          I bring together product strategy, UX, commercial understanding and
          technical fluency.
        </p>
        <div
          className={styles.heroActions}
          data-load-reveal
          style={{ "--reveal-delay": "250ms" } as React.CSSProperties}
        >
          <a href="#selected-work" className={styles.heroPrimaryAction}>
            View selected work
          </a>
          <Link href="/about" className={styles.heroSecondaryAction}>
            About me
          </Link>
        </div>
      </div>
    </section>
  );
}
