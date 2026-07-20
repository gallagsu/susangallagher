import Image from "next/image";
import Link from "next/link";
import { getFooterNav, getPrimaryNav } from "@/components/home/home.data";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { MotionOrchestrator } from "@/components/home/motion-orchestrator";
import styles from "./one-fab-day-page.module.css";

const evidenceItems = [
  "Outbound supplier clicks and navigation patterns",
  "Supplier renewal conversations and commercial feedback",
  "Editorial knowledge of what users valued and returned to",
  "Approval bottlenecks and profile-quality issues",
  "Content performance across evergreen editorial and real weddings",
];

const decisions = [
  {
    label: "DECISION 01",
    title: "Reframe the directory as a curated product",
    explanation:
      "The supplier directory was commercially important, but it risked feeling like a generic listings area. I reframed it as The Wedding Book - a curated destination rather than a database of suppliers - and gave it stronger visibility in the site structure.",
    judgement:
      "The commercial product would only work if users believed the supplier recommendations were curated, high-quality and consistent with the editorial brand.",
  },
  {
    label: "DECISION 02",
    title: "Bring supplier discovery into editorial moments",
    explanation:
      "Many users formed preferences while reading real weddings and inspiration features, not while actively searching a directory. I introduced contextual supplier pathways inside editorial content so discovery could happen where intent was forming.",
    judgement:
      "Discovery should not depend only on search or navigation. If editorial was where trust and intent were forming, supplier pathways needed to exist there too.",
  },
  {
    label: "DECISION 03",
    title: "Make supplier browsing visual and comparable",
    explanation:
      "Wedding supplier decisions are highly visual. I shifted browsing away from text-heavy listings and towards a more image-led, scannable structure with standardised supplier cards and clearer category pages.",
    judgement:
      "For this audience, visual confidence came before rational evaluation. The product needed to help users scan, compare and shortlist without making the experience feel cluttered.",
  },
  {
    label: "DECISION 04",
    title: "Clarify the primary supplier action",
    explanation:
      "Supplier profiles had to build trust quickly and guide users towards a meaningful next step. I made Visit Website the dominant action, accepting fewer in-platform enquiries in exchange for a clearer user journey and cleaner supplier attribution.",
    judgement:
      "The best product decision was not to maximise every possible action. It was to prioritise the action that best aligned user intent, supplier value and commercial reporting.",
  },
  {
    label: "DECISION 05",
    title: "Fix the workflow behind the experience",
    explanation:
      "The front-end experience could only stay curated if the internal workflow supported it. Supplier profiles, editorial links, sponsored features and renewals depended on accurate content, consistent images, clear approval states and reliable handoffs.",
    judgement:
      "A polished interface would not solve the problem on its own. The product needed workflow foundations so the team could maintain quality and commercial value at scale.",
  },
];

const observedPatterns = [
  {
    title: "Planning Modes",
    description:
      "Browsing and decisions happen in different modes at different times",
  },
  {
    title: "Visual Trust",
    description: "Trust in suppliers is visual before it is rational",
  },
  {
    title: "Visible Value",
    description: "Value for suppliers must be visible and attributable",
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
              One Fab Day: Turning editorial trust into supplier action
            </h1>
            <p
              className={styles.heroSubtitle}
              data-load-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              A case study in connecting editorial
              trust to curated supplier discovery, while protecting brand trust and improving commercial outcomes.
            </p>
          </div>
          <dl
            className={styles.metadataGrid}
            data-load-reveal
            style={{ "--reveal-delay": "210ms" } as React.CSSProperties}
          >
            <div className={styles.metadataItem}>
              <dt className={styles.metadataLabel}>Role</dt>
              <dd className={styles.metadataValue}>
                <span>Co-founder</span>
                <span>Product Design &amp; UX Lead</span>
              </dd>
            </div>
            <div className={styles.metadataItem}>
              <dt className={styles.metadataLabel}>Focus</dt>
              <dd className={styles.metadataValue}>
                Product strategy, supplier discovery, editorial integration,
                commercial UX, content workflows
              </dd>
            </div>
            <div className={styles.metadataItem}>
              <dt className={styles.metadataLabel}>Results</dt>
              <dd className={styles.metadataValue}>
                <span>3x supplier outbound clicks</span>
                <span>&gt;85% partner renewals</span>
                <span>~50% faster approval cycle</span>
              </dd>
            </div>
          </dl>
        </section>

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
          <figcaption className={styles.heroCaption}>
            Fig 1. The Wedding Book connected editorial trust with curated supplier
            discovery.
          </figcaption>
        </figure>

        <section className={styles.snapshotSection} aria-label="At a glance">
          <div className={styles.snapshotGrid}>
            <article className={styles.snapshotCard} data-reveal>
              <h3 className={styles.snapshotTitle}>Problem</h3>
              <p className={styles.snapshotText}>
                Editorial trust and traffic were strong, but supplier discovery
                was not clearly connected to user intent.
              </p>
            </article>
            <article
              className={styles.snapshotCard}
              data-reveal
              style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
            >
              <h3 className={styles.snapshotTitle}>Decision</h3>
              <p className={styles.snapshotText}>
                Connect editorial, supplier discovery and internal workflows
                into one clearer product system.
              </p>
            </article>
            <article
              className={styles.snapshotCard}
              data-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              <h3 className={styles.snapshotTitle}>Outcome</h3>
              <p className={styles.snapshotText}>
                Supplier outbound clicks increased 3x, partner renewals
                remained above 85%, and internal approval became roughly 50%
                faster.
              </p>
            </article>
          </div>
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

        <section className={styles.evidenceSection}>
          <div className={styles.sectionHeader} data-reveal>
            <h2 className={styles.sectionLabelHeading}>Evidence Used</h2>
          </div>
          <div className={styles.evidenceGrid}>
            <div className={styles.copyStack} data-reveal>
              <p className={styles.bodyText}>
                This was not a single redesign or one-off research sprint. The
                work developed over time, shaped by how couples used the site,
                what suppliers needed, and where internal workflows were
                slowing things down.
              </p>
              <ul className={styles.evidenceList}>
                {evidenceItems.map((item) => (
                  <li key={item} className={styles.evidenceListItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.evidenceBlank} aria-hidden="true" />
          </div>
        </section>

        <section className={styles.snapshotSection} aria-labelledby="observed-patterns">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="observed-patterns" className={styles.sectionHeading}>
              Observed Patterns
            </h2>
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
              Results
            </h2>
          </div>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              The clearest impact showed up in supplier clicks, renewals and
              approval speed.
            </p>
          </div>
          <div className={styles.decisionImageGallery}>
            <figure className={styles.decisionImageFigure}>
              <InlineImage
                src="/home/projects/editorialintegration-after.webp"
                alt="Editorial integration example from One Fab Day"
              />
              <figcaption className={styles.decisionImageCaption}>
                Fig 2. Supplier links in real wedding features
              </figcaption>
            </figure>
            <figure className={styles.decisionImageFigure}>
              <InlineImage
                src="/home/projects/editorialintegration-2-after.webp"
                alt="Second editorial integration example from One Fab Day"
              />
              <figcaption className={styles.decisionImageCaption}>
                Fig 3. Recommended suppliers in editorial content
              </figcaption>
            </figure>
            <figure className={styles.decisionImageFigure}>
              <InlineImage
                src="/home/projects/supplierpage-after.webp"
                alt="Supplier page design from One Fab Day"
              />
              <figcaption className={styles.decisionImageCaption}>
                Fig 4. Image-led layout to build trust
              </figcaption>
            </figure>
          </div>
          <div className={styles.resultsPanel} data-reveal>
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
