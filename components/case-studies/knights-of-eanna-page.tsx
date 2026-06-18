import Image from "next/image";
import Link from "next/link";
import { getFooterNav, getPrimaryNav } from "@/components/home/home.data";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { MotionOrchestrator } from "@/components/home/motion-orchestrator";
import styles from "./knights-of-eanna-page.module.css";

const metadataItems = [
  {
    label: "Role",
    value: "Product, UX, information architecture, AI-assisted delivery",
  },
  {
    label: "Focus",
    value: "Membership, payments, admin workflows, consent, league teams",
  },
  {
    label: "Results",
    value: "21% increase membership fee payment, 400% increase in new membership enquiries.",
  },
];

const observedPatterns = [
  {
    title: "Joining was dependent on manual follow-up",
    body: "Prospective members did not have a clear route from interest to joining.",
  },
  {
    title: "Payments were disconnected from membership admin",
    body: "Membership payment relied on chasing and informal reminders.",
  },
  {
    title: "Member data was more relational than individual",
    body: "Households, juniors, guardians and consent made a simple member list insufficient.",
  },
  {
    title: "League organisation depended on committee knowledge",
    body: "Setting up teams and contacting players required manual coordination.",
  },
];

const keyDecisions = [
  {
    label: "DECISION 01",
    title: "Make joining public and self-serve",
    explanation:
      "I created a clearer public website so prospective members could understand the club and join online without relying on manual enquiry handling.",
  },
  {
    label: "DECISION 02",
    title: "Treat membership as households and relationships",
    explanation:
      "The CRM needed to support adults, juniors, guardians and household relationships, not just a flat list of individual members.",
  },
  {
    label: "DECISION 03",
    title: "Make payment part of the membership journey",
    explanation:
      "Membership payment needed to be connected to joining and renewal workflows, rather than handled as a separate follow-up task.",
  },
  {
    label: "DECISION 04",
    title: "Keep admin tools simple enough for real committee use",
    explanation:
      "I avoided overbuilding complex self-service or merge tooling too early, and prioritised practical admin workflows that committee members could manage.",
  },
  {
    label: "DECISION 05",
    title: "Build consent and privacy into the system",
    explanation:
      "Because the club includes junior members, consent and provisional records needed to be treated as part of the product workflow, not as an afterthought.",
  },
];

type BuiltItem =
  | {
      title: string;
      body: string;
      placeholder: string;
      imageSrc?: never;
      imageAlt?: never;
    }
  | {
      title: string;
      body: string;
      imageSrc: string;
      imageAlt: string;
      placeholder?: never;
    };

const builtItems: BuiltItem[] = [
  {
    title: "Public website",
    body: "A clear public-facing website for club information, prospective members and online joining.",
    imageSrc: "/home/projects/chess-club-website.png",
    imageAlt: "Knights of Éanna public website screenshot",
  },
  {
    title: "Online membership flow",
    body: "A simpler joining route connecting membership details, payment and committee follow-up.",
    imageSrc: "/home/projects/chess-club-join.png",
    imageAlt: "Knights of Éanna online membership flow screenshot",
  },
  {
    title: "Club CRM",
    body: "An internal system for managing members, households, guardians, renewals, consent, reporting and admin workflows.",
    imageSrc: "/home/projects/chess-club-crm.png",
    imageAlt: "CRM member and household view",
  },
  {
    title: "League team administration",
    body: "A simpler workflow for setting up league teams and contacting players.",
    imageSrc: "/home/projects/chess-club-leagues.png",
    imageAlt: "Knights of Éanna league team administration screenshot",
  },
];

const changedItems = [
  "Membership increased after people could join online.",
  "Membership payment completion improved significantly.",
  "Committee admin became simpler and more reliable.",
  "League team setup and player contact became much easier.",
  "The club moved from fragmented manual workflows toward a structured digital operating system.",
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

export function KnightsOfEannaPage() {
  return (
    <div className={styles.pageShell} id="top">
      <MotionOrchestrator />
      <Header items={getPrimaryNav("case-study")} brandHref="/" />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroCopy}>
            <p className={styles.sectionLabel} data-load-reveal>
              CASE STUDY / KNIGHTS OF ÉANNA
            </p>
            <h1
              className={styles.heroTitle}
              data-load-reveal
              style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
            >
              Knights of Éanna Digital Platform
            </h1>
            <p
              className={styles.heroSubtitle}
              data-load-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              Modernising a chess club’s website, membership payments and
              internal admin workflows.
            </p>
          </div>
          <dl
            className={styles.metadataGrid}
            data-load-reveal
            style={{ "--reveal-delay": "210ms" } as React.CSSProperties}
          >
            {metadataItems.map((item) => (
              <div key={item.label} className={styles.metadataItem}>
                <dt className={styles.metadataLabel}>{item.label}</dt>
                <dd className={styles.metadataValue}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.snapshotSection} aria-label="At a glance">
          <div className={styles.snapshotGrid}>
            <article className={styles.snapshotCard} data-reveal>
              <h3 className={styles.snapshotTitle}>Problem</h3>
              <p className={styles.snapshotText}>
                Fragmented admin made joining, payments, member records and
                league organisation difficult.
              </p>
            </article>
            <article
              className={styles.snapshotCard}
              data-reveal
              style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
            >
              <h3 className={styles.snapshotTitle}>Decision</h3>
              <p className={styles.snapshotText}>
                Created a website and CRM for online membership, payments,
                consent and committee workflows.
              </p>
            </article>
            <article
              className={styles.snapshotCard}
              data-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              <h3 className={styles.snapshotTitle}>Outcome</h3>
              <p className={styles.snapshotText}>
                More members joined online, payments improved, and committee
                admin became clearer, faster and more reliable.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.snapshotSection} aria-labelledby="observed-patterns">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="observed-patterns" className={styles.sectionHeading}>
              Observed Patterns
            </h2>
          </div>
          <div className={styles.patternGrid}>
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
                <p className={styles.snapshotText}>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.decisionsSection} aria-label="Key decisions">
          <div className={styles.decisionsList}>
            {keyDecisions.map((decision, index) => (
              <article
                key={decision.label}
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
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.decisionsSection} aria-labelledby="what-i-built">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="what-i-built" className={styles.sectionHeading}>
              What I Built
            </h2>
          </div>
          <div className={styles.builtGrid}>
            {builtItems.map((item, index) => (
              <article
                key={item.title}
                className={styles.builtCard}
                data-reveal
                style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}
              >
                <div className={styles.builtMedia}>
                  {item.imageSrc ? (
                    <div className={styles.inlineImageFrame}>
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        width={1512}
                        height={1110}
                        className={styles.inlineImage}
                        sizes="(max-width: 900px) 100vw, 520px"
                      />
                    </div>
                  ) : (
                    <Placeholder label={item.placeholder ?? item.title} />
                  )}
                </div>
                <div className={styles.builtCopy}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.bodyText}>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.copySection} aria-labelledby="ai-assisted-development">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="ai-assisted-development" className={styles.sectionHeading}>
              AI-assisted Development
            </h2>
          </div>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              I used AI-assisted development workflows to move quickly from
              operational problem to working product.
            </p>
            <p className={styles.bodyText}>
              AI helped speed up implementation support, iteration and
              validation, while the product decisions stayed grounded in the
              club&apos;s real workflows, data responsibilities and privacy needs.
            </p>
            <p className={styles.bodyText}>
              I did not automate judgement-heavy admin decisions. Any AI support
              stayed read-only and constrained around membership, household,
              renewal and consent data.
            </p>
          </div>
        </section>

        <section className={styles.resultsSection} aria-labelledby="results">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="results" className={styles.sectionHeading}>
              Results
            </h2>
          </div>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              The clearest gains showed up in payment completion, new member
              enquiries and day-to-day committee workflows.
            </p>
          </div>
          <div className={styles.resultsPanel} data-reveal>
            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <p className={styles.metricValue}>21%</p>
                <p className={styles.metricLabel}>
                  increase in membership fee payment
                </p>
              </div>
              <div className={styles.metricItem}>
                <p className={styles.metricValue}>400%</p>
                <p className={styles.metricLabel}>
                  increase in new membership enquiries
                </p>
              </div>
            </div>
          </div>
          <ul className={styles.changedList} data-reveal>
            {changedItems.map((item) => (
              <li key={item} className={styles.changedListItem}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.copySection} aria-label="What this shows">
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              This project shows how I turn messy real-world operations into
              clearer digital systems.
            </p>
            <p className={styles.bodyText}>
              It combines product judgement, UX thinking, delivery fluency,
              AI-assisted development, privacy awareness and practical delivery
              decisions.
            </p>
            <p className={styles.bodyText}>
              It is intentionally different from a polished concept project: it
              is a working system shaped around real users, real constraints
              and real organisational change.
            </p>
          </div>
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
