import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { SiteShell } from "@/components/site/site-shell";
import styles from "@/components/site/site-pages.module.css";

export const metadata: Metadata = {
  title: "Contact | Susan Gallagher",
  description:
    "Contact Susan Gallagher about product, UX and digital collaboration work.",
};

export default function ContactPage() {
  return (
    <SiteShell activeNav="contact">
      <section className={styles.pageSection} aria-labelledby="contact-title">
        <div className={styles.pageHeader}>
          <h1
            id="contact-title"
            className={styles.pageTitle}
            data-load-reveal
          >
            Contact
          </h1>
        </div>
        <div
          className={styles.pageBody}
          data-reveal
          style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
        >
          <p>
            I&apos;m interested in product and UX roles where I can contribute
            strategic, commercial and technical perspective within a
            collaborative team.
          </p>
          <p>
            I&apos;m also happy to hear about relevant projects, introductions
            or conversations about product work.
          </p>
        </div>
        <div
          className={styles.contactFormSection}
          data-reveal
          style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
        >
          <p className={styles.contactFormIntro}>
            Send me a note and I&apos;ll get back to you directly.
          </p>
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
