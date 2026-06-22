import Image from "next/image";
import Link from "next/link";
import { getFooterNav, getPrimaryNav } from "@/components/home/home.data";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { MotionOrchestrator } from "@/components/home/motion-orchestrator";
import styles from "./rollercoaster-baby-names-page.module.css";

const metadataItems = [
  {
    label: "Product",
    value: "Rollercoaster.ie Baby Names",
  },
  {
    label: "Organisation",
    value: "DMG Media Ireland",
  },
  {
    label: "Role",
    value: "Product & UX Design / Head of UX",
  },
  {
    label: "User goal",
    value: "Choose a baby name confidently",
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

const tags = [
  "Product discovery",
  "Search and filter UX",
  "Content modelling",
  "Commercial UX",
  "CMS constraints",
];

const productValueItems = [
  {
    title: "User value",
    body: "Search, compare and narrow names more confidently.",
  },
  {
    title: "Editorial value",
    body: "Connect high-performing articles to structured name pages.",
  },
  {
    title: "Business value",
    body: "Increase page depth, repeat visits and sponsor value.",
  },
];

const schemaFields = [
  "Meaning",
  "Origin",
  "Pronunciation",
  "Gender",
  "Popularity where available",
  "Themes",
  "Related editorial links",
];

const filterItems = [
  "Theme",
  "Origin",
  "Gender",
  "Popularity where data was available",
];

const designDecisions = [
  "Start with filters the team could support confidently.",
  "Use editorial themes as a practical starting taxonomy.",
  "Make results scannable through compact name cards.",
  "Use name detail pages to show meaning, pronunciation, origin and related editorial context.",
];

const commercialItems = [
  "Section sponsorship",
  "Banner placements on results and name pages",
  "Consistent sponsor exposure across repeat browsing",
  "Clearer audience signal for pregnancy-stage advertisers",
];

const proofItems = [
  "Turned proven content demand into a structured product concept.",
  "Designed the schema, search and filter experience, and editorial linking loop.",
  "Connected user discovery, CMS maintainability and commercial opportunity.",
];

function Placeholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`${styles.placeholder} ${className}`.trim()}
      role="img"
      aria-label={label}
      data-reveal
    >
      <span className={styles.placeholderLabel}>{label}</span>
    </div>
  );
}

function InlineImage({
  src,
  alt,
  width,
  height,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div className={`${styles.inlineImageFrame} ${className}`.trim()} data-reveal>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.inlineImage}
        sizes="(max-width: 900px) 100vw, 980px"
      />
    </div>
  );
}

export function RollercoasterBabyNamesPage() {
  return (
    <div className={styles.pageShell} id="top">
      <MotionOrchestrator />
      <Header items={getPrimaryNav("case-study")} brandHref="/" />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroCopy}>
            <p className={styles.sectionLabel} data-load-reveal>
              SELECTED CASE STUDY / ROLLERCOASTER.IE
            </p>
            <h1
              className={styles.heroTitle}
              data-load-reveal
              style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
            >
              Rollercoaster.ie Baby Names
            </h1>
            <p
              className={styles.heroSubtitle}
              data-load-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              Turning high-performing editorial demand into a searchable
              product experience.
            </p>
            <p
              className={styles.heroSummary}
              data-load-reveal
              style={{ "--reveal-delay": "210ms" } as React.CSSProperties}
            >
              Rollercoaster.ie already had strong-performing baby name
              editorial, especially around Irish names and themed name lists.
              The opportunity was to turn that demand into a structured product
              experience: something users could search, filter, compare and
              return to over time, while creating a clearer sponsor-ready
              surface for a valuable early-parenting audience.
            </p>
          </div>
          <dl
            className={styles.metadataGrid}
            data-load-reveal
            style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
          >
            {metadataItems.map((item) => (
              <div key={item.label} className={styles.metadataItem}>
                <dt className={styles.metadataLabel}>{item.label}</dt>
                <dd className={styles.metadataValue}>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div
            className={styles.tagList}
            aria-label="Case study topics"
            data-load-reveal
            style={{ "--reveal-delay": "350ms" } as React.CSSProperties}
          >
            {tags.map((tag) => (
              <span key={tag} className={styles.tagPill}>
                {tag}
              </span>
            ))}
          </div>
          <p
            className={styles.statusNote}
            data-load-reveal
            style={{ "--reveal-delay": "420ms" } as React.CSSProperties}
          >
            Product and UX strategy/design work completed before handover.
            Screens are representative recreations used to illustrate the
            design decisions.
          </p>
        </section>

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
          <figcaption className={styles.heroCaption}>
            Fig 1. Representative recreation of the Baby Names product
            direction across hub, results and detail views.
          </figcaption>
        </figure>

        <section className={styles.snapshotSection} aria-label="At a glance">
          <div className={styles.snapshotGrid}>
            <article className={styles.snapshotCard} data-reveal>
              <h3 className={styles.snapshotTitle}>Problem</h3>
              <p className={styles.snapshotText}>
                Strong baby-name editorial existed, but users were still moving
                through one-off articles rather than a structured discovery
                experience.
              </p>
            </article>
            <article
              className={styles.snapshotCard}
              data-reveal
              style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
            >
              <h3 className={styles.snapshotTitle}>Decision</h3>
              <p className={styles.snapshotText}>
                Turn proven editorial demand into a searchable product with a
                clear content model, practical filters and stronger internal
                linking.
              </p>
            </article>
            <article
              className={styles.snapshotCard}
              data-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              <h3 className={styles.snapshotTitle}>What it enabled</h3>
              <p className={styles.snapshotText}>
                A clearer route from inspiration to shortlisting, plus a more
                coherent destination for repeat browsing and sponsorship.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.copySection} aria-labelledby="opportunity">
          <div className={styles.copyGrid}>
            <div className={styles.copyStack} data-reveal>
              <h2 id="opportunity" className={styles.sectionHeading}>
                The opportunity
              </h2>
              <p className={styles.bodyText}>
                Baby name content was already one of Rollercoaster.ie&apos;s
                strongest editorial topics. It attracted search traffic, social
                engagement and repeat interest from pregnant users.
              </p>
              <p className={styles.bodyText}>
                But the experience was mostly article-based: users could read
                lists and trend pieces, but they could not easily search,
                compare, narrow or revisit names across multiple sessions.
              </p>
              <p className={styles.bodyText}>
                The opportunity was to convert one-off editorial reading into an
                ongoing discovery journey: a searchable baby name product that
                could support browsing, shortlisting, deeper sessions and
                sponsorship.
              </p>
            </div>
            <blockquote
              className={styles.pullQuoteCard}
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              <p className={styles.pullQuoteText}>
                We had demand, but not yet a product.
              </p>
            </blockquote>
          </div>
        </section>

        <section className={styles.snapshotSection} aria-labelledby="product-idea">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="product-idea" className={styles.sectionHeading}>
              The product idea
            </h2>
          </div>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              The design direction connected three things: editorial demand
              from existing articles, searchable and filterable name data, and
              a repeatable browsing loop between inspiration and decision-making.
            </p>
          </div>
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

        <section className={styles.decisionsSection} aria-labelledby="content-model">
          <div className={styles.decisionCard} data-reveal>
            <p className={styles.decisionLabel}>DECISION 01</p>
            <div className={styles.decisionColumns}>
              <div className={styles.copyStack}>
                <h2 id="content-model" className={styles.decisionTitle}>
                  Designing the content model
                </h2>
                <p className={styles.bodyText}>
                  The core design challenge was structural, not just visual.
                  Existing baby name content was free text, so the product
                  needed a clear content model before the interface could work.
                </p>
                <p className={styles.bodyText}>
                  I defined a <strong>Name</strong> content type that could work
                  within the existing WordPress editorial workflow.
                </p>
              </div>
              <div className={styles.schemaPanel}>
                <p className={styles.schemaHeading}>Core fields</p>
                <ul className={styles.checkList}>
                  {schemaFields.map((field) => (
                    <li key={field} className={styles.checkListItem}>
                      {field}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.judgementBlock}>
                <p className={styles.judgementLabel}>Why it mattered</p>
                <p className={styles.judgementText}>
                  A strong schema made the experience searchable, maintainable
                  and scalable. It allowed the team to create consistent name
                  pages, power filters, support internal linking and extend the
                  product over time without redesigning the system.
                </p>
              </div>
            </div>
          </div>
          <Placeholder
            label="Simple schema diagram showing editorial articles linked to a Name content type and then out to themes, search and name pages"
            className={styles.inlinePlaceholder}
          />
        </section>

        <section className={styles.decisionsSection} aria-labelledby="search-filters">
          <div className={styles.decisionCard} data-reveal>
            <p className={styles.decisionLabel}>DECISION 02</p>
            <div className={styles.decisionColumns}>
              <div className={styles.copyStack}>
                <h2 id="search-filters" className={styles.decisionTitle}>
                  Search, filters and name pages
                </h2>
                <p className={styles.bodyText}>
                  The experience was designed around fast scanning and practical
                  shortlisting rather than deep reading. Users could search
                  directly, browse through filters, open detail pages, and move
                  between names and related editorial.
                </p>
                <div className={styles.filterGroup}>
                  <p className={styles.schemaHeading}>Filters</p>
                  <ul className={styles.checkList}>
                    {filterItems.map((item) => (
                      <li key={item} className={styles.checkListItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.schemaPanel}>
                <p className={styles.schemaHeading}>Design decisions</p>
                <ul className={styles.checkList}>
                  {designDecisions.map((item) => (
                    <li key={item} className={styles.checkListItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.judgementBlock}>
                <p className={styles.judgementLabel}>Interface direction</p>
                <p className={styles.judgementText}>
                  The aim was to make the product useful quickly. Compact name
                  cards handled scanning. Detail pages carried the context.
                  Editorial links kept discovery moving.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.decisionImageGallery}>
            <figure className={styles.decisionImageFigure}>
              <InlineImage
                src="/home/projects/rollercoaster-searchresults.png"
                alt="Search results page showing filters and scannable name cards"
                width={3024}
                height={3332}
                className={styles.galleryImage}
              />
              <figcaption className={styles.decisionImageCaption}>
                Fig 2. Search results designed for fast scanning and practical
                narrowing.
              </figcaption>
            </figure>
            <figure className={styles.decisionImageFigure}>
              <InlineImage
                src="/home/projects/rollercoaster-namepage.png"
                alt="Name detail page showing meaning, pronunciation, origin and related articles"
                width={3024}
                height={3332}
                className={styles.galleryImage}
              />
              <figcaption className={styles.decisionImageCaption}>
                Fig 3. Name pages carry the detail while keeping related
                editorial close by.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.copySection} aria-labelledby="editorial-loop">
          <div className={styles.copyGrid}>
            <div className={styles.copyStack} data-reveal>
              <h2 id="editorial-loop" className={styles.sectionHeading}>
                Creating the editorial loop
              </h2>
              <p className={styles.bodyText}>
                The strongest product idea was linking existing editorial demand
                into the structured database. Articles could link to individual
                name pages or themed name collections. Name pages could point
                users back to relevant editorial features.
              </p>
              <p className={styles.bodyText}>
                This reduced dead ends, improved internal linking, supported SEO
                depth and created more reasons for users to continue browsing.
              </p>
            </div>
            <blockquote
              className={styles.pullQuoteCard}
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              <p className={styles.pullQuoteText}>
                Editorial captured attention. The database helped users keep
                exploring.
              </p>
            </blockquote>
          </div>
        </section>

        <section className={styles.evidenceSection} aria-labelledby="commercial-logic">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="commercial-logic" className={styles.sectionHeading}>
              Commercial logic
            </h2>
          </div>
          <div className={styles.evidenceGrid}>
            <div className={styles.copyStack} data-reveal>
              <p className={styles.bodyText}>
                Baby naming is a high-intent, early-parenting moment. The
                product created a clearer destination for sponsorship than
                scattered individual articles.
              </p>
            </div>
            <div className={styles.schemaPanel} data-reveal>
              <ul className={styles.checkList}>
                {commercialItems.map((item) => (
                  <li key={item} className={styles.checkListItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className={styles.divider} aria-hidden="true" data-line-reveal />

        <section className={styles.resultsSection} aria-labelledby="what-this-shows">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="what-this-shows" className={styles.sectionHeading}>
              What this shows
            </h2>
          </div>
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
          <div className={styles.closingActions} data-reveal>
            <Link href="/contact" className={styles.contactButton}>
              Start a conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer items={getFooterNav("case-study")} brandHref="/" />
    </div>
  );
}
