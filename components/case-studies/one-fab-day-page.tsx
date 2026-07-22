import Image from "next/image";
import Link from "next/link";
import { getFooterNav, getPrimaryNav } from "@/components/home/home.data";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { MotionOrchestrator } from "@/components/home/motion-orchestrator";
import styles from "./one-fab-day-page.module.css";

const decisions = [
  {
    label: "01 —",
    title: "Reframe the directory as a curated product",
    explanation:
      "The supplier directory was commercially important, but it risked feeling like a generic listings page. I repositioned it as The Wedding Book, a curated destination with a clearer place in the overall site.",
    judgement:
      "The recommendations needed to feel as trusted and selective as the editorial content around them.",
  },
  {
    label: "02 —",
    title: "Bring supplier discovery into editorial content",
    explanation:
      "Users often formed preferences while browsing real weddings and inspiration, rather than by visiting the directory directly. I added relevant supplier pathways within editorial content, so discovery could happen at the point where interest was developing.",
    judgement:
      "Supplier discovery worked better when it followed naturally from content users already trusted.",
  },
  {
    label: "03 —",
    title: "Make supplier browsing clearer and more visual",
    explanation:
      "I moved the experience away from text-heavy listings towards image-led category pages, consistent supplier cards and clearer profiles. I also made Visit Website the main action, giving users a more direct next step.",
    judgement:
      "Users could scan and compare suppliers more easily, while partners received clearer and more measurable traffic.",
  },
  {
    label: "04 —",
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
            <h1
              className={styles.heroTitle}
              data-load-reveal
              style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
            >
              Turning a trusted digital media platform into a strong
              commercial product
            </h1>
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
                <span>Co-founder</span>
                <span>Product Design &amp; UX Lead</span>
              </dd>
            </div>
            <div className={`${styles.metadataItem} ${styles.metadataItemFocus}`}>
              <dt className={styles.metadataLabel}>Focus</dt>
              <dd className={styles.metadataValue}>
                Product strategy, UX, content systems, commercial growth and
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
                The Core Challenge
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
                Editorial built trust. The directory created commercial value.
                The challenge was connecting them without making the experience
                feel transactional.
              </p>
            </blockquote>
          </div>
        </section>

        <section className={styles.snapshotSection} aria-labelledby="observed-patterns">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="observed-patterns" className={styles.sectionHeading}>
              Observed Patterns
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
              Impact &amp; Reflection
            </h2>
          </div>
          <div className={styles.decisionImageGallery}>
            <figure className={styles.decisionImageFigure}>
              <InlineImage
                src="/home/projects/editorialintegration-after.webp"
                alt="Editorial integration example from One Fab Day"
              />
              <figcaption className={styles.decisionImageCaption}>
                2. Supplier links in real wedding features
              </figcaption>
            </figure>
            <figure className={styles.decisionImageFigure}>
              <InlineImage
                src="/home/projects/editorialintegration-2-after.webp"
                alt="Second editorial integration example from One Fab Day"
              />
              <figcaption className={styles.decisionImageCaption}>
                3. Recommended suppliers in editorial content
              </figcaption>
            </figure>
            <figure className={styles.decisionImageFigure}>
              <InlineImage
                src="/home/projects/supplierpage-after.webp"
                alt="Supplier page design from One Fab Day"
              />
              <figcaption className={styles.decisionImageCaption}>
                4. Image-led layout to build trust
              </figcaption>
            </figure>
          </div>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              The work strengthened the connection between audience intent and
              commercial value. It made supplier discovery more visible and
              useful for couples, gave partners clearer attributable value, and
              created faster internal workflows for maintaining the product.
            </p>
          </div>
        </section>

        <section className={styles.copySection}>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              This work was about strengthening the link between audience intent
              and commercial value.
            </p>
            <p className={styles.bodyText}>
              The supplier directory could not behave like a generic listings
              product. It had to feel curated, editorially consistent and
              commercially useful at the same time.
            </p>
            <p className={styles.bodyText}>
              That required decisions across navigation, content structure,
              supplier presentation and internal workflows — improving the
              platform without weakening the trust that made it work.
            </p>
          </div>
          <div className={styles.closingActions} data-reveal>
            <Link href="/#selected-work" className={styles.contactButton}>
              My work
            </Link>
          </div>
        </section>
      </main>
      <Footer items={getFooterNav("case-study")} brandHref="/" />
    </div>
  );
}
