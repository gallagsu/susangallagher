import Image from "next/image";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";
import styles from "@/components/site/site-pages.module.css";

const playProjects = [
  {
    title:
      "Designed and built a clearer way to manage my personal record collection with Claude Code.",
    imageSrc: "/home/projects/vinyl-app-home.png",
    imageAlt: "Vinyl Catalog App project image",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem ipsum sed do eiusmod tempor incididunt ut labore.",
  },
  {
    title: "Lorem ipsum ut enim ad minim veniam quis nostrud.",
  },
];

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
          <p className={styles.pageIntro} data-reveal>
            Personal projects and explorations
          </p>
        </div>
        <div className={styles.playGrid}>
          {playProjects.map((project, index) => (
            <article
              key={project.title}
              className={styles.playCard}
              data-reveal
              style={
                { "--reveal-delay": `${index * 60}ms` } as React.CSSProperties
              }
            >
              {project.imageSrc ? (
                <div className={styles.playImageFrame}>
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={1520}
                    height={950}
                    className={styles.playImage}
                    sizes="(max-width: 900px) 100vw, 360px"
                  />
                </div>
              ) : (
                <div
                  className={styles.playPlaceholder}
                  aria-hidden="true"
                />
              )}
              <p className={styles.playProjectTitle}>{project.title}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
