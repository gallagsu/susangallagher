import Image from "next/image";
import Link from "next/link";
import { getFooterNav, getPrimaryNav } from "@/components/home/home.data";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { MotionOrchestrator } from "@/components/home/motion-orchestrator";
import styles from "./rollercoaster-baby-names-page.module.css";

const metadataItems = [
  {
    label: "Role",
    value: "Product & UX Design / Head of UX",
  },
  {
    label: "Business goal",
    value: "Increase repeat visits, page depth and sponsor value",
  },
  {
    label: "Constraints",
    value: "WordPress CMS, small engineering team, no existing name database",
  },
];

const productValueItems = [
  {
    title: "For users",
    body: "A clearer way to search, compare and shortlist names.",
  },
  {
    title: "For editorial",
    body: "A structured destination linking high-performing content to useful name pages.",
  },
  {
    title: "For the business",
    body: "More repeat browsing, deeper sessions and clearer sponsorship potential.",
  },
];

const decisions = [
  {
    label: "DECISION 01",
    title: "Build the structure before the interface",
    description:
      "The existing baby-name content was written as free text, so it could not reliably support search, filtering or consistent name pages. I defined a structured Name content type that fitted the existing WordPress workflow, including fields for meaning, origin, pronunciation, gender, themes and related editorial.",
    judgement:
      "A clear content model made the concept searchable, maintainable and able to grow without redesigning the system each time.",
  },
  {
    label: "DECISION 02",
    title: "Support both search and discovery",
    description:
      "Some users would arrive with clear criteria, while others would want to browse for ideas. I designed the experience around direct search, practical filters and scannable result cards, with individual name pages providing deeper information and related content.",
    judgement:
      "The product needed to help people narrow a shortlist quickly without losing the open-ended exploration that makes choosing names enjoyable.",
  },
  {
    label: "DECISION 03",
    title: "Connect editorial content to the product",
    description:
      "Existing articles already attracted users through search and social channels. I designed links between articles, themed collections and individual name pages so people could move naturally from inspiration into structured browsing and back into relevant editorial.",
    judgement:
      "Connecting the two experiences reduced dead ends and gave high-performing editorial content a more useful destination.",
  },
  {
    label: "DECISION 04",
    title: "Design commercial value around genuine intent",
    description:
      "Baby naming is a high-interest moment within the wider pregnancy journey. The concept created a coherent destination where relevant partners could appear across search, results and name pages, rather than relying on sponsorship across disconnected articles.",
    judgement:
      "Commercial placements could support the product without interrupting the task users had come to complete.",
  },
];

const proofItems = [
  "Turned proven content demand into a structured product concept.",
  "Designed the schema, search and filter experience, and editorial linking loop.",
  "Connected user discovery, CMS maintainability and commercial opportunity.",
];

export function RollercoasterBabyNamesPage() {
  return (
    <div className={styles.pageShell} id="top">
      <MotionOrchestrator />
      <Header items={getPrimaryNav("case-study")} brandHref="/" />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroCopy}>
            <p className={styles.sectionLabel} data-load-reveal>
              CASE STUDY / ROLLERCOASTER.IE
            </p>
            <h1
              className={styles.heroTitle}
              data-load-reveal
              style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
            >
              Turning a high-traffic baby-name archive into a search and
              discovery product
            </h1>
            <figure className={styles.heroFigure} data-reveal>
              <Image
                src="/home/projects/rollercoaster-hero.png"
                alt="Rollercoaster.ie Baby Names overview showing the hub, search results and name detail screens"
                width={3024}
                height={2601}
                loading="eager"
                className={styles.heroImage}
                sizes="(max-width: 900px) 100vw, 920px"
              />
            </figure>
            <p
              className={styles.heroSubtitle}
              data-load-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              I turned a large content archive into a more useful product for
              browsing, filtering and comparing names, while creating a
              clearer sponsor-ready surface for a valuable early-parenting
              audience.
            </p>
          </div>
          <div
            className={styles.resultsPanel}
            data-load-reveal
            style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
          >
            <div className={styles.panelMedia}>
              <Image
                src="/home/projects/MEDIA-AWARDS_Site_Icon.png"
                alt=""
                width={72}
                height={72}
                className={styles.panelIcon}
              />
              <div className={styles.panelCopy}>
                <p className={styles.panelTitle}>Award-winning wider redesign</p>
                <p className={styles.panelText}>
                  Rollercoaster.ie was named Media Brand of the Year following
                  the wider rebrand and redesign
                </p>
              </div>
            </div>
          </div>
          <dl
            className={styles.metadataGrid}
            data-load-reveal
            style={{ "--reveal-delay": "350ms" } as React.CSSProperties}
          >
            {metadataItems.map((item) => (
              <div key={item.label} className={styles.metadataItem}>
                <dt className={styles.metadataLabel}>{item.label}</dt>
                <dd className={styles.metadataValue}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.copySection} aria-labelledby="opportunity">
          <div className={styles.copyGrid}>
            <div className={styles.copyStack} data-reveal>
              <h2 id="opportunity" className={styles.sectionHeading}>
                The opportunity
              </h2>
              <p className={styles.bodyText}>
                Baby-name content was already one of Rollercoaster.ie&apos;s
                strongest evergreen topics, attracting search traffic, social
                engagement and repeat interest.
              </p>
              <p className={styles.bodyText}>
                The opportunity was to turn that demand into a structured
                discovery experience that supported browsing, filtering and
                shortlisting, while creating stronger connections between
                editorial content and commercial opportunities.
              </p>
            </div>
            <blockquote
              className={styles.pullQuoteCard}
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              <p className={styles.pullQuoteText}>
                The audience already existed. The opportunity was to build the
                product around it.
              </p>
            </blockquote>
          </div>
        </section>

        <section className={styles.snapshotSection}>
          <div className={styles.trioGrid}>
            {productValueItems.map((item, index) => (
              <article
                key={item.title}
                className={styles.snapshotCard}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 70}ms` } as React.CSSProperties
                }
              >
                <h3 className={styles.snapshotTitle}>{item.title}</h3>
                <p className={styles.snapshotText}>{item.body}</p>
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
                    <h2 className={styles.decisionTitle}>{decision.title}</h2>
                    <div className={styles.copyStack}>
                      <p className={styles.judgementLabel}>Description</p>
                      <p className={styles.bodyText}>{decision.description}</p>
                    </div>
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

        <section className={styles.resultsSection}>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              This project shows how I think about product design in
              content-led businesses: not just as page layouts, but as systems
              of user intent, structured data, editorial workflow, search
              behaviour and commercial value.
            </p>
            <p className={styles.bodyText}>
              It also shows my ability to work within practical constraints:
              using an existing CMS, designing around editorial maintainability,
              reducing engineering overhead and shaping a product that could
              grow in phases.
            </p>
          </div>
          <div className={styles.resultsPanel} data-reveal>
            <ul className={styles.proofList}>
              {proofItems.map((item) => (
                <li key={item} className={styles.proofListItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              This case study focuses on product and UX strategy/design work
              completed before handover. Screens are representative recreations
              used to illustrate the thinking and proposed experience.
            </p>
          </div>
        </section>

        <section className={styles.copySection}>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.endNote}>
              This case study focuses on product and UX strategy/design work
              completed before handover to engineering. Screens are
              representative recreations used to illustrate the thinking and
              proposed experience.
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
