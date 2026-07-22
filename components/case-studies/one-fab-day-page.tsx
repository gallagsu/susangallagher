import Image from "next/image";
import { getFooterNav, getPrimaryNav } from "@/components/home/home.data";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { MotionOrchestrator } from "@/components/home/motion-orchestrator";
import styles from "./one-fab-day-page.module.css";

const decisions = [
  {
    label: "DECISION 01",
    title: "Reframe the directory as a curated product",
    explanation:
      "The supplier directory was commercially important, but it risked feeling like a generic listings page. I repositioned it as The Wedding Book, a curated destination with a clearer place in the overall site.",
    judgement:
      "The recommendations needed to feel as trusted and selective as the editorial content around them.",
  },
  {
    label: "DECISION 02",
    title: "Bring supplier discovery into editorial content",
    explanation:
      "Users often formed preferences while browsing real weddings and inspiration, rather than by visiting the directory directly. I added relevant supplier pathways within editorial content, so discovery could happen at the point where interest was developing.",
    judgement:
      "Supplier discovery worked better when it followed naturally from content users already trusted.",
  },
  {
    label: "DECISION 03",
    title: "Make supplier browsing clearer and more visual",
    explanation:
      "I moved the experience away from text-heavy listings towards image-led category pages, consistent supplier cards and clearer profiles. I also made Visit Website the main action, giving users a more direct next step.",
    judgement:
      "Users could scan and compare suppliers more easily, while partners received clearer and more measurable traffic.",
  },
  {
    label: "DECISION 04",
    title: "Improve the workflow behind the product",
    explanation:
      "Maintaining a curated product depended on more than the customer-facing interface. I clarified content requirements, approval stages and team handoffs for supplier profiles, editorial links, sponsored content and renewals.",
    judgement:
      "Better internal workflows made it faster to maintain quality and keep commercial content accurate.",
  },
];

const observedPatterns = [
  {
    title: "Intent changes by context",
    description:
      "People browsed for inspiration before actively comparing suppliers.",
  },
  {
    title: "Trust was highly visual",
    description:
      "Imagery and editorial context strongly influenced supplier confidence.",
  },
  {
    title: "Value needed to be visible",
    description:
      "Suppliers needed clear evidence that the platform was driving meaningful traffic.",
  },
];

function InlineImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`${styles.inlineImageFrame} ${className}`.trim()} data-reveal>
      <Image
        src={src}
        alt={alt}
        width={1512}
        height={1110}
        className={styles.inlineImage}
        sizes="(max-width: 900px) 100vw, 980px"
      />
    </div>
  );
}

export function OneFabDayPage() {
  return (
    <div className={styles.pageShell} id="top">
      <MotionOrchestrator />
      <Header items={getPrimaryNav("case-study")} brandHref="/" />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroCopy}>
            <p className={styles.sectionLabel} data-load-reveal>
              CASE STUDY / ONE FAB DAY
            </p>
            <h1
              className={styles.heroTitle}
              data-load-reveal
              style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
            >
              Turning a trusted digital media platform into a stronger
              commercial product
            </h1>
            <figure className={styles.heroFigure} data-reveal>
              <Image
                src="/home/projects/onefabday.png"
                alt="One Fab Day homepage and wedding imagery"
                width={1512}
                height={1110}
                loading="eager"
                className={styles.heroImage}
                sizes="(max-width: 900px) 100vw, 600px"
              />
            </figure>
            <p
              className={styles.heroSubtitle}
              data-load-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              One Fab Day combined high-traffic editorial content with a
              curated supplier platform. I led product and UX decisions that
              strengthened supplier value and improved workflows to maintain
              quality at scale.
            </p>
          </div>
          <div
            className={styles.resultsPanel}
            data-load-reveal
            style={{ "--reveal-delay": "210ms" } as React.CSSProperties}
          >
            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <p className={styles.metricValue}>3x</p>
                <p className={styles.metricLabel}>Supplier outbound clicks</p>
              </div>
              <div className={styles.metricItem}>
                <p className={styles.metricValue}>&gt; 85%</p>
                <p className={styles.metricLabel}>
                  Partner renewals year-on-year
                </p>
              </div>
              <div className={styles.metricItem}>
                <p className={styles.metricValue}>~50%</p>
                <p className={styles.metricLabel}>Faster approval cycle</p>
              </div>
            </div>
          </div>
          <dl
            className={styles.metadataGrid}
            data-load-reveal
            style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
          >
            <div className={styles.metadataItem}>
              <dt className={styles.metadataLabel}>Role</dt>
              <dd className={styles.metadataValue}>
                Co-founder — Product direction and UX leadership
              </dd>
            </div>
            <div className={`${styles.metadataItem} ${styles.metadataItemFocus}`}>
              <dt className={styles.metadataLabel}>Focus</dt>
              <dd className={styles.metadataValue}>
                Product strategy, UX, content systems, commercial value and
                operational workflows
              </dd>
            </div>
            <div className={styles.metadataItem}>
              <dt className={styles.metadataLabel}>Outcome</dt>
              <dd className={styles.metadataValue}>
                One Fab Day was acquired by DMG Media.
              </dd>
            </div>
          </dl>
        </section>

        <section className={styles.copySection} aria-labelledby="product-tension">
          <div className={styles.copyGrid}>
            <div className={styles.copyStack} data-reveal>
              <h2 id="product-tension" className={styles.sectionHeading}>
                The challenge
              </h2>
              <p className={styles.bodyText}>
                One Fab Day combined high-traffic wedding editorial with a
                curated, invite-only supplier directory. Editorial content
                built audience trust, search visibility and repeat engagement.
                The supplier directory was the core commercial product.
              </p>
              <p className={styles.bodyText}>
                The challenge was to connect these two parts of the platform
                more clearly, without weakening the editorial trust that made
                the brand valuable.
              </p>
            </div>
            <blockquote
              className={styles.pullQuoteCard}
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              <p className={styles.pullQuoteText}>
                The opportunity was to connect inspiration and supplier
                discovery, while protecting the editorial trust that made One
                Fab Day valuable.
              </p>
            </blockquote>
          </div>
        </section>

        <section className={styles.snapshotSection} aria-labelledby="observed-patterns">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="observed-patterns" className={styles.sectionHeading}>
              What informed the work
            </h2>
          </div>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              This was an evolving product. Decisions were shaped by data,
              supplier conversations, editorial knowledge and operational
              bottlenecks.
            </p>
          </div>
          <div className={styles.snapshotGrid}>
            {observedPatterns.map((item, index) => (
              <article
                key={item.title}
                className={`${styles.snapshotCard} ${styles.patternCard}`}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 70}ms` } as React.CSSProperties
                }
              >
                <h3 className={styles.snapshotTitle}>{item.title}</h3>
                <p className={styles.snapshotText}>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.decisionsSection} aria-label="Key decisions">
          <div className={styles.decisionsList}>
            {decisions.map((decision, index) => (
              <div key={decision.label} className={styles.decisionGroup}>
                <article
                  className={styles.decisionCard}
                  data-reveal
                  style={
                    { "--reveal-delay": `${index * 60}ms` } as React.CSSProperties
                  }
                >
                  <p className={styles.decisionLabel}>{decision.label}</p>
                  <div className={styles.decisionColumns}>
                    <h3 className={styles.decisionTitle}>{decision.title}</h3>
                    <p className={styles.bodyText}>{decision.explanation}</p>
                    <div className={styles.judgementBlock}>
                      <p className={styles.judgementLabel}>Why it mattered</p>
                      <p className={styles.judgementText}>{decision.judgement}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.divider} aria-hidden="true" data-line-reveal />

        <section className={styles.resultsSection} aria-labelledby="results">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="results" className={styles.sectionHeading}>
              Impact
            </h2>
          </div>
          <div className={styles.decisionImageGallery}>
            <figure className={styles.decisionImageFigure}>
              <InlineImage
                src="/home/projects/editorialintegration-after.webp"
                alt="Editorial integration example from One Fab Day"
              />
              <figcaption className={styles.decisionImageCaption}>
                Supplier links in real wedding features
              </figcaption>
            </figure>
            <figure className={styles.decisionImageFigure}>
              <InlineImage
                src="/home/projects/editorialintegration-2-after.webp"
                alt="Second editorial integration example from One Fab Day"
              />
              <figcaption className={styles.decisionImageCaption}>
                Recommended suppliers in editorial content
              </figcaption>
            </figure>
            <figure className={styles.decisionImageFigure}>
              <InlineImage
                src="/home/projects/supplierpage-after.webp"
                alt="Supplier page design from One Fab Day"
              />
              <figcaption className={styles.decisionImageCaption}>
                Image-led layout to build trust
              </figcaption>
            </figure>
          </div>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              The work showed how editorial trust, product design and
              commercial value could reinforce each other. By improving both
              the customer experience and the systems behind it, we created
              clearer supplier value without weakening the editorial experience
              that made the platform successful.
            </p>
          </div>
        </section>

      </main>
      <Footer items={getFooterNav("case-study")} brandHref="/" />
    </div>
  );
}
