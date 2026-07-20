import styles from "./homepage.module.css";

export function Hero() {
  return (
    <section className={styles.heroSection} aria-labelledby="home-hero-title">
      <div className={styles.heroContent}>
        <h1
          id="home-hero-title"
          className={styles.heroTitle}
          data-load-reveal
          style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
        >
          Product and UX design shaped by founder experience, commercial
          judgement and practical use of AI.
        </h1>
        <p
          className={styles.heroIntro}
          data-load-reveal
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
        >
          I bring founder experience, product judgement and UX craft to
          websites, digital products, internal tools and service workflows.
        </p>
      </div>
    </section>
  );
}
