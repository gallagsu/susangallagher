import Image from "next/image";
import Link from "next/link";
import { getFooterNav, getPrimaryNav } from "@/components/home/home.data";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { MotionOrchestrator } from "@/components/home/motion-orchestrator";
import styles from "./vinyl-catalog-page.module.css";

const metadataItems = [
  {
    label: "Role",
    value: "Product concept, UX, visual design, working prototype",
  },
  {
    label: "Focus",
    value:
      "Mobile browsing, AI-assisted cataloguing, visual search, microinteractions",
  },
  {
    label: "Status",
    value: "Interactive prototype covering login and core flows",
  },
];

const productDecisions = [
  {
    label: "DECISION 01",
    title: "Make artwork the main interface",
    explanation:
      "Records are remembered visually. The app uses cover artwork as the primary way to browse, recognise and return to records, rather than treating the collection as a text-heavy list.",
  },
  {
    label: "DECISION 02",
    title: "Make location part of the product",
    explanation:
      "The app should help users know where a record belongs physically, not just whether it exists digitally. The catalogue needs to support finding and putting away.",
  },
  {
    label: "DECISION 03",
    title: "Keep the feeling lo-fi and analog",
    explanation:
      "The product direction should feel closer to a record shop or video store than a database. Motion, spacing, texture and browsing states should support that atmosphere.",
  },
  {
    label: "DECISION 04",
    title: "Use AI to reduce cataloguing effort",
    explanation:
      "AI assistance can help identify albums, metadata and track information from photos, but it should stay in the background. The user should be able to review and correct suggestions.",
  },
  {
    label: "DECISION 05",
    title: "Design for imperfect collections",
    explanation:
      "Real collections are messy. The interface should allow missing information, uncertain matches, edits and partial records without making the experience feel broken.",
  },
  {
    label: "DECISION 06",
    title: "Use motion to connect digital and physical use",
    explanation:
      "Microinteractions should support the feeling of handling records: scanning, saving, opening a sleeve, browsing covers, and showing a record spinning when it is playing.",
  },
];

const prototypeItems = [
  {
    title: "Visual collection browsing",
    body: "Records are represented primarily through artwork, not text-heavy catalogue rows. Tap or hover to view record details.",
    imageSrc: "/home/projects/vinyl-app-browsing.png",
    imageAlt: "Vinyl Catalog App browsing screens showing artwork-led collection views",
    imageWidth: 1374,
    imageHeight: 858,
  },
  {
    title: "Photo capture / catalogue entry",
    body: "Photo-based entry reduces the work of adding records to the collection.",
    imageSrc: "/home/projects/vinyl-app-capture.png",
    imageAlt: "Vinyl Catalog App photo capture and catalog entry screens",
    imageWidth: 2070,
    imageHeight: 1294,
  },
  {
    title: "AI metadata suggestion",
    body: "AI can suggest album, artist and track details while leaving the user in control.",
    imageSrc: "/home/projects/vinyl-app-metadata-suggestion.png",
    imageAlt: "Vinyl Catalog App AI metadata suggestion screen",
    imageWidth: 1530,
    imageHeight: 956,
  },
  {
    title: "Record detail and track listing",
    body: "Record detail views help users know what they own and which songs are on each record.",
    imageSrc: "/home/projects/vinyl-app-record-detail.png",
    imageAlt: "Vinyl Catalog App record detail and track listing screen",
    imageWidth: 1402,
    imageHeight: 876,
  },
  {
    title: "Shelf/location support",
    body: "The app supports the physical task of finding and putting records away.",
    imageSrc: "/home/projects/vinyl-app-shelf-location.png",
    imageAlt: "Vinyl Catalog App shelf and location support screens",
    imageWidth: 1428,
    imageHeight: 892,
  },
  {
    title: "Playing state / spinning record",
    body: "When a record is playing, it appears spinning in the app to reinforce the analog feel.",
    imageSrc: "/home/projects/vinyl-app-playing-state.png",
    imageAlt: "Vinyl Catalog App playing state showing spinning record interaction",
    imageWidth: 1538,
    imageHeight: 961,
  },
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

export function VinylCatalogPage() {
  return (
    <div className={styles.pageShell} id="top">
      <MotionOrchestrator />
      <Header items={getPrimaryNav("case-study")} brandHref="/" />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroCopy}>
            <p className={styles.sectionLabel} data-load-reveal>
              CASE STUDY / VINYL CATALOG APP
            </p>
            <h1
              className={styles.heroTitle}
              data-load-reveal
              style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
            >
              Vinyl Catalog App
            </h1>
            <p
              className={styles.heroSubtitle}
              data-load-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              A lo-fi mobile prototype for finding, browsing and organising a
              personal record collection.
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

        <figure className={styles.heroFigure}>
          <Image
            src="/home/projects/vinyl-app-main.png"
            alt="Vinyl Catalog App overview showing collection and browsing prototype screens"
            width={1520}
            height={1536}
            loading="eager"
            className={styles.heroImage}
            sizes="(max-width: 900px) 100vw, 560px"
          />
          <figcaption className={styles.heroCaption}>
            Working prototype showing the main collection and record browsing
            direction.
          </figcaption>
        </figure>

        <section className={styles.snapshotSection} aria-label="At a glance">
          <div className={styles.snapshotGrid}>
            <article className={styles.snapshotCard} data-reveal>
              <h3 className={styles.snapshotTitle}>Problem</h3>
              <p className={styles.snapshotText}>
                Large vinyl collections are hard to search, remember and
                physically locate on the shelf.
              </p>
            </article>
            <article
              className={styles.snapshotCard}
              data-reveal
              style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
            >
              <h3 className={styles.snapshotTitle}>Decision</h3>
              <p className={styles.snapshotText}>
                Design a visual, lo-fi mobile app that makes records feel
                browsable, findable and easy to put away.
              </p>
            </article>
            <article
              className={styles.snapshotCard}
              data-reveal
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
            >
              <h3 className={styles.snapshotTitle}>Outcome</h3>
              <p className={styles.snapshotText}>
                A working prototype exploring AI-assisted cataloguing,
                artwork-led browsing and tactile interaction.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.copySection} aria-labelledby="product-idea">
          <div className={styles.copyGrid}>
            <div className={styles.copyStack} data-reveal>
              <h2 id="product-idea" className={styles.sectionHeading}>
                The Product Idea
              </h2>
              <p className={styles.bodyText}>
                The app explores a simple everyday problem: when you own
                hundreds of records, how do you quickly find the one you want?
              </p>
              <p className={styles.bodyText}>
                Vinyl collections are physical, visual and personal. A useful
                app should not feel like a spreadsheet or admin tool. It
                should feel closer to browsing a record shop or old video
                store: image-led, tactile, slightly lo-fi and easy to wander
                through.
              </p>
              <p className={styles.bodyText}>
                Records are represented primarily by their artwork. Users can
                browse their collection visually, check what they own, see what
                songs are on each record, and understand where a record belongs
                on the shelf.
              </p>
              <p className={styles.bodyText}>
                The prototype also explores a more analog interaction idea:
                when a record is playing, it appears spinning in the app,
                making the digital layer feel connected to the physical
                object.
              </p>
            </div>
            <div
              className={styles.copyStack}
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              <h2 className={styles.sectionHeading}>Why This Problem</h2>
              <p className={styles.bodyText}>
                A record collection can become difficult to use once it grows
                beyond memory.
              </p>
              <p className={styles.bodyText}>
                The problem is not only adding records to a database. It is
                knowing what you own, remembering which record contains which
                songs, finding the right sleeve on a crowded shelf, and putting
                it back somewhere you can find it again later.
              </p>
              <p className={styles.bodyText}>
                The opportunity was to make organising records feel like part
                of the pleasure of owning them, rather than a separate admin
                task.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.decisionsSection} aria-labelledby="product-decisions">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="product-decisions" className={styles.sectionHeading}>
              Product Decisions
            </h2>
          </div>
          <div className={styles.decisionsList}>
            {productDecisions.map((decision, index) => (
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

        <section className={styles.prototypeSection} aria-labelledby="working-prototype">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="working-prototype" className={styles.sectionHeading}>
              Working Prototype
            </h2>
          </div>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              This is a working mobile prototype with login and core product
              flows.
            </p>
            <ul className={styles.prototypeList}>
              <li className={styles.prototypeListItem}>
                Login and basic account flow
              </li>
              <li className={styles.prototypeListItem}>
                Visual collection browsing
              </li>
              <li className={styles.prototypeListItem}>
                Record detail views
              </li>
              <li className={styles.prototypeListItem}>
                Artwork-led record representation
              </li>
              <li className={styles.prototypeListItem}>
                Photo-based catalogue entry direction
              </li>
              <li className={styles.prototypeListItem}>
                AI-assisted metadata concept
              </li>
              <li className={styles.prototypeListItem}>
                Track information and record details
              </li>
              <li className={styles.prototypeListItem}>
                Shelf/location support
              </li>
              <li className={styles.prototypeListItem}>
                Playing state with spinning record interaction
              </li>
              <li className={styles.prototypeListItem}>
                Save, edit and confirmation states
              </li>
            </ul>
          </div>
          <div className={styles.prototypeGrid}>
            {prototypeItems.map((item, index) => (
              <figure
                key={item.title}
                className={styles.prototypeCard}
                data-reveal
                style={{
                  "--reveal-delay": `${index * 70}ms`,
                } as React.CSSProperties}
              >
                <div className={styles.screenFrame}>
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    className={styles.screenImage}
                    sizes="(max-width: 900px) 100vw, 540px"
                  />
                </div>
                <figcaption className={styles.prototypeCopy}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.bodyText}>{item.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.copySection} aria-labelledby="interaction-and-motion">
          <div className={styles.copyStackWide} data-reveal>
            <h2 id="interaction-and-motion" className={styles.sectionHeading}>
              Interaction and Motion
            </h2>
            <p className={styles.bodyText}>
              The interaction direction is deliberately tactile and
              restrained.
            </p>
            <p className={styles.bodyText}>
              The app should make small actions feel clear: a record being
              scanned, a match being suggested, a card being saved, a cover
              being opened, or a record starting to play.
            </p>
            <p className={styles.bodyText}>
              The spinning record state is an important part of the concept.
              It makes the app feel less like a catalogue and more connected
              to the analog experience of choosing, playing and putting away
              music.
            </p>
          </div>
        </section>

        <section className={styles.copySection} aria-labelledby="ai-product-thinking">
          <div className={styles.sectionHeader} data-reveal>
            <h2 id="ai-product-thinking" className={styles.sectionHeading}>
              AI Product Thinking
            </h2>
          </div>
          <div className={styles.copyStack} data-reveal>
            <p className={styles.bodyText}>
              AI is useful here only if it removes repetitive work without
              taking control away from the user.
            </p>
            <p className={styles.bodyText}>
              The app can use AI to suggest album details, track listings,
              artist names and metadata from photos. But vinyl data can be
              messy, editions can vary, and recognition will not always be
              perfect.
            </p>
            <p className={styles.bodyText}>
              The product should make suggestions easy to accept, edit or
              ignore. The user remains responsible for the final collection.
            </p>
          </div>
        </section>

        <section className={styles.copySection} aria-label="Contact">
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
