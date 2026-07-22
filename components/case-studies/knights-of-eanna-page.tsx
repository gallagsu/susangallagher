import Image from "next/image";
import { getFooterNav, getPrimaryNav } from "@/components/home/home.data";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { MotionOrchestrator } from "@/components/home/motion-orchestrator";
import styles from "./knights-of-eanna-page.module.css";

const metrics = [
  {
    value: "21%",
    label: "Increase in membership-fee payment",
  },
  {
    value: "400%",
    label: "Increase in new membership enquiries",
  },
];

const metadataItems = [
  {
    label: "Role",
    value: "Product direction, UX and AI-assisted delivery",
  },
  {
    label: "Focus",
    value: "Membership, payments, household data, admin workflows and league management",
  },
  {
    label: "Outcome",
    value: "A working public website, membership system and internal club tools",
  },
];

const observedPatterns = [
  {
    title: "Joining relied on manual follow-up",
    body: "Prospective members did not have a clear route from interest to joining.",
  },
  {
    title: "Membership was household-based",
    body: "Children, guardians and family relationships needed to be represented together.",
  },
  {
    title: "Payments and membership were disconnected",
    body: "The club could not easily see who had joined, paid or still needed follow-up.",
  },
  {
    title: "Club operations depended on volunteer knowledge",
    body: "League teams, contact details and recurring tasks were difficult to share and maintain.",
  },
];

const decisions = [
  {
    label: "DECISION 01",
    title: "Make joining public and self-service",
    description:
      "I created a clear public website and membership journey so prospective members could understand the club, submit their details and move into the joining process without relying on manual enquiry handling.",
    judgement:
      "A clearer route into the club reduced friction for families and reduced repetitive follow-up for volunteers.",
  },
  {
    label: "DECISION 02",
    title: "Model membership around households",
    description:
      "The CRM was structured around families rather than isolated individual records. It connected children, guardians, contact details, consent and membership status in one place.",
    judgement:
      "The system reflected how the club actually operated and reduced duplication across family records.",
  },
  {
    label: "DECISION 03",
    title: "Connect payment to the membership journey",
    description:
      "Membership payment was brought into the same journey as registration and renewal, with clearer status tracking and follow-up for incomplete payments.",
    judgement:
      "The committee could see who had joined, who had paid and where follow-up was still needed.",
  },
  {
    label: "DECISION 04",
    title: "Design simple, consent-aware admin workflows",
    description:
      "I kept the internal tools simple enough for real committee use, while building privacy, consent and role-aware handling into member records, league teams and operational workflows.",
    judgement:
      "Volunteers could complete recurring tasks more consistently without turning sensitive club administration into an overcomplicated system.",
  },
];

const builtItems = [
  {
    title: "Public website",
    body: "A clear public-facing site for club information, prospective members and online joining.",
    imageSrc: "/home/projects/chess-club-website.png",
    imageAlt: "Knights of Éanna public website screenshot",
  },
  {
    title: "Online membership flow",
    body: "A simpler route for collecting member details, payment and committee follow-up.",
    imageSrc: "/home/projects/chess-club-join.png",
    imageAlt: "Knights of Éanna online membership flow screenshot",
  },
  {
    title: "Club CRM",
    body: "An internal system for managing members, households, guardians, renewals, consent, fees and club workflows.",
    imageSrc: "/home/projects/chess-club-crm.png",
    imageAlt: "Knights of Éanna CRM member and household view",
  },
  {
    title: "League team administration",
    body: "A simpler workflow for setting up league teams, maintaining player details and sharing accurate information.",
    imageSrc: "/home/projects/chess-club-leagues.png",
    imageAlt: "Knights of Éanna league team administration screenshot",
  },
];

const impactItems = [
  "Membership increased after people could join online.",
  "Payment completion improved significantly.",
  "Committee administration became clearer and more reliable.",
  "League teams and player details could be managed in one place.",
];

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
              Turning fragmented club administration into one connected digital
              system
            </h1>
            <figure className={styles.heroFigure} data-reveal>
              <div className={styles.heroImageFrame}>
                <Image
                  src="/home/projects/chess-club-home.png"
                  alt="Knights of Éanna public website and membership journey screenshot"
                  width={1512}
                  height={1110}
                  loading="eager"
                  className={styles.heroImage}
                  sizes="(max-width: 900px) 100vw, 960px"
                />
              </div>
            </figure>
            <p
              className={styles.heroIntro}
              data-load-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              I designed and built a connected website, membership journey and
              set of internal tools around the club&apos;s real operational needs.
            </p>
          </div>
          <div
            className={styles.metricsPanel}
            data-load-reveal
            style={{ "--reveal-delay": "210ms" } as React.CSSProperties}
          >
            <div className={styles.metricsGrid}>
              {metrics.map((metric) => (
                <div key={metric.label} className={styles.metricItem}>
                  <p className={styles.metricValue}>{metric.value}</p>
                  <p className={styles.metricLabel}>{metric.label}</p>
                </div>
              ))}
            </div>
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
        </section>

        <section className={styles.copySection} aria-labelledby="challenge">
          <div className={styles.copyStack} data-reveal>
            <h2 id="challenge" className={styles.sectionHeading}>
              The challenge
            </h2>
            <p className={styles.bodyText}>
              Joining the club depended on manual follow-up, membership
              payments sat outside the admin process, and important operational
              knowledge lived with a small number of volunteers.
            </p>
            <p className={styles.bodyText}>
              The system also needed to reflect how the club actually worked:
              families joined as households, children and guardians were
              connected, consent mattered, and league administration relied on
              accurate shared information.
            </p>
          </div>
        </section>

        <section className={styles.snapshotSection} aria-labelledby="what-informed">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="what-informed" className={styles.sectionHeading}>
              What informed the work
            </h2>
          </div>
          <div className={styles.patternGrid}>
            {observedPatterns.map((item, index) => (
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
                    <h3 className={styles.decisionTitle}>{decision.title}</h3>
                    <p className={styles.bodyText}>{decision.description}</p>
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

        <section className={styles.builtSection} aria-labelledby="what-i-built">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="what-i-built" className={styles.sectionHeading}>
              What I built
            </h2>
          </div>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              I used AI-assisted development to speed up implementation,
              explore workflows and work through technical problems. The
              product, UX, data structure, privacy and operational decisions
              remained mine.
            </p>
            <p className={styles.bodyText}>
              I also avoided fully automating payment-related or sensitive
              administrative actions. AI-supported workflows stayed constrained
              and reviewable.
            </p>
          </div>
          <div className={styles.builtGrid}>
            {builtItems.map((item, index) => (
              <article
                key={item.title}
                className={styles.builtCard}
                data-reveal
                style={
                  { "--reveal-delay": `${index * 70}ms` } as React.CSSProperties
                }
              >
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
                <div className={styles.builtCopy}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.bodyText}>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.resultsSection} aria-labelledby="impact">
          <div className={styles.copyStack} data-reveal>
            <h2 id="impact" className={styles.sectionHeading}>
              Impact
            </h2>
            <p className={styles.bodyText}>
              The finished system made joining clearer, connected payment with
              membership records and gave the committee a more reliable view of
              club activity. It also reduced the dependence on scattered
              spreadsheets, inboxes and individual volunteer knowledge.
            </p>
          </div>
          <div className={styles.resultsPanel} data-reveal>
            <ul className={styles.impactList}>
              {impactItems.map((item) => (
                <li key={item} className={styles.impactListItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer items={getFooterNav("case-study")} brandHref="/" />
    </div>
  );
}
