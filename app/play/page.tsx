import type { Metadata } from "next";
import { playProjectItems } from "@/components/home/home.data";
import { ProjectCollection } from "@/components/home/selected-work";
import { SiteShell } from "@/components/site/site-shell";
import styles from "@/components/site/site-pages.module.css";

export const metadata: Metadata = {
  title: "Play | Susan Gallagher",
  description:
    "Exploratory product concepts and experiments by Susan Gallagher.",
};

export default function PlayPage() {
  return (
    <SiteShell activeNav="play">
      <section className={styles.pageSection} aria-labelledby="play-title">
        <div className={styles.pageHeader}>
          <h1 id="play-title" className={styles.pageTitle} data-load-reveal>
            Play
          </h1>
        </div>
        <ProjectCollection labelledById="play-title" items={playProjectItems} />
      </section>
    </SiteShell>
  );
}
