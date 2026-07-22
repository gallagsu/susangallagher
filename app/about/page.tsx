import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import styles from "@/components/site/site-pages.module.css";

const proofItems = [
  {
    title: "Software development",
    body: "Started my career as a developer at IBM, giving me a practical understanding of technology and delivery.",
  },
  {
    title: "Business building",
    body: "Co-founded and scaled One Fab Day to a team of 12, multiple revenue streams and acquisition by DMG Media.",
  },
  {
    title: "UX leadership",
    body: "Led UX work across established consumer media brands, connecting audience needs, editorial priorities and commercial goals.",
  },
];

const bringItems = [
  {
    title: "Product strategy and direction",
    body: "I clarify the underlying problem, weigh user and business needs, and help teams decide what to prioritise. At One Fab Day, this meant connecting trusted editorial content with a stronger supplier product and commercial model.",
  },
  {
    title: "Commercial understanding",
    body: "I understand how product decisions affect growth, revenue and operations. I co-founded and scaled a digital media business through to acquisition.",
  },
  {
    title: "Technical fluency",
    body: "I began my career in software development and can work constructively with engineering, understand delivery constraints and prototype ideas using modern development and AI tools.",
  },
  {
    title: "Service and workflow design",
    body: "I look beyond individual screens to the processes, data and people behind them. The Knights of Éanna platform connected joining, payments, household records and committee administration in one system.",
  },
];

const skillGroups = [
  {
    title: "Product and UX",
    items: [
      "Product strategy",
      "UX design",
      "Service design",
      "Information architecture",
      "User journeys",
      "Content modelling",
      "Prototyping",
      "Usability testing",
    ],
  },
  {
    title: "Tools and delivery",
    items: [
      "Figma",
      "FigJam",
      "React",
      "Next.js",
      "TypeScript",
      "GitHub",
      "Vercel",
      "AI-assisted development",
    ],
  },
  {
    title: "Business and leadership",
    items: [
      "Commercial strategy",
      "Stakeholder facilitation",
      "Team leadership",
      "Digital publishing",
      "Workflow design",
    ],
  },
];

export const metadata: Metadata = {
  title: "About | Susan Gallagher",
  description:
    "About Susan Gallagher: product and UX experience across software, digital media, business building and delivery.",
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
            My career has moved through software development, digital media,
            business building and UX leadership. That range gives me a broader
            view of product work: I understand the user experience, the
            commercial context and the practical realities of getting products
            built.
          </p>
          <p>
            I co-founded and grew One Fab Day from an early digital publishing
            idea into an established business with a team of 12 and multiple
            revenue streams. The company was acquired by DMG Media in 2020.
          </p>
          <p>
            I later led UX work across several established consumer media
            brands. Today, I&apos;m focused on product and UX roles where
            strategic thinking, commercial understanding and technical fluency
            are valued.
          </p>
        </div>

        <section
          className={styles.aboutProofStrip}
          aria-label="Career proof points"
        >
          {proofItems.map((item, index) => (
            <article
              key={item.title}
              className={styles.aboutProofItem}
              data-reveal
              style={
                { "--reveal-delay": `${140 + index * 60}ms` } as React.CSSProperties
              }
            >
              <h2 className={styles.aboutMiniHeading}>{item.title}</h2>
              <p className={styles.aboutProofText}>{item.body}</p>
            </article>
          ))}
        </section>

        <section className={styles.aboutSection} aria-labelledby="what-i-bring">
          <div className={styles.pageHeader}>
            <h2
              id="what-i-bring"
              className={styles.aboutSectionHeading}
              data-reveal
            >
              What I bring
            </h2>
          </div>
          <div className={styles.aboutCardGrid}>
            {bringItems.map((item, index) => (
              <article
                key={item.title}
                className={styles.aboutCard}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 60}ms` } as React.CSSProperties
                }
              >
                <h3 className={styles.aboutCardTitle}>{item.title}</h3>
                <p className={styles.aboutCardText}>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.aboutSection}
          aria-labelledby="skills-and-tools"
        >
          <div className={styles.pageHeader}>
            <h2
              id="skills-and-tools"
              className={styles.aboutSectionHeading}
              data-reveal
            >
              Skills and tools
            </h2>
          </div>
          <div className={styles.aboutSkillGroups}>
            {skillGroups.map((group, index) => (
              <section
                key={group.title}
                className={styles.aboutSkillGroup}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 60}ms` } as React.CSSProperties
                }
              >
                <h3 className={styles.aboutMiniHeading}>{group.title}</h3>
                <div className={styles.aboutChipWrap}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.aboutChip}>
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className={styles.aboutSection} aria-labelledby="how-i-work">
          <div className={styles.pageHeader}>
            <h2
              id="how-i-work"
              className={styles.aboutSectionHeading}
              data-reveal
            >
              How I work
            </h2>
          </div>
          <blockquote className={styles.aboutPullQuote} data-reveal>
            <p className={styles.aboutPullQuoteText}>
              I start by understanding the real problem: what users need, what
              the organisation is trying to achieve and what is realistic to
              deliver. From there, I use product thinking and UX to shape
              clear, practical next steps.
            </p>
          </blockquote>
        </section>

        <div
          className={styles.pageBody}
          data-reveal
          style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
        >
          <p>
            I&apos;m interested in product and UX roles where I can contribute
            strategic, commercial and technical perspective within a
            collaborative team.
          </p>
        </div>
        <div
          className={styles.pageActions}
          data-reveal
          style={{ "--reveal-delay": "210ms" } as React.CSSProperties}
        >
          <Link href="/contact" className={styles.pageButton}>
            Start a conversation
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
