import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import styles from "@/components/site/site-pages.module.css";

export const metadata: Metadata = {
  title: "About | Susan Gallagher",
  description:
    "About Susan Gallagher: founder experience, product judgement and modern UX practice.",
};

export default function AboutPage() {
  return (
    <SiteShell activeNav="about">
      <section className={styles.pageSection} aria-labelledby="about-title">
        <div className={styles.pageHeader}>
          <h1
            id="about-title"
            className={styles.pageTitle}
            data-load-reveal
          >
            About
          </h1>
        </div>
        <div
          className={styles.pageBody}
          data-reveal
          style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
        >
          <p>
            I’ve worked across software engineering, web design, digital media,
            UX leadership and building a digital business.
          </p>
          <p>
            I co-founded One Fab Day, a luxury wedding brand and digital
            platform that became a major commercial success and was later
            acquired.
          </p>
          <p>
            That experience shaped how I approach product work: connecting user
            needs, business goals and delivery realities.
          </p>
          <p>
            Today, I’m focused on product and UX work where clarity,
            judgement, delivery awareness and thoughtful use of AI matter.
          </p>
          <p>I’m open to new roles and collaborations.</p>
        </div>
        <div
          className={styles.pageActions}
          data-reveal
          style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
        >
          <Link href="/contact" className={styles.pageButton}>
            Start a conversation
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
