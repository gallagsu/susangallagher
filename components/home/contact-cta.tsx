import Link from "next/link";
import styles from "./homepage.module.css";

type ContactCtaProps = {
  showButton?: boolean;
};

export function ContactCta({ showButton = true }: ContactCtaProps) {
  return (
    <section className={styles.contactSection} aria-label="Contact">
      <div className={styles.contactInner} data-reveal>
        <p className={styles.contactCopy}>
          I’m open to conversations about product design, UX, AI-assisted
          workflows and internal tools.
          <span className={styles.contactSpacer} aria-hidden="true" />
          If you’re working on a digital product, website or workflow that
          needs clearer direction, I’d be happy to talk.
        </p>
        {showButton ? (
          <Link href="/contact" className={styles.ctaButton}>
            START A CONVERSATION
          </Link>
        ) : null}
      </div>
    </section>
  );
}
