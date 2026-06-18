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
      <section
        className={`${styles.pageSection} ${styles.contactPageSection}`}
        aria-labelledby="contact-title"
      >
        <div className={`${styles.pageHeader} ${styles.contactPageHeader}`}>
          <h1
            id="contact-title"
            className={`${styles.pageTitle} ${styles.contactPageTitle}`}
            data-load-reveal
          >
            Contact
          </h1>
        </div>
        <p
          className={`${styles.contactIntro} ${styles.contactPageIntro}`}
          data-reveal
          style={{ "--reveal-delay": "70ms" } as React.CSSProperties}
        >
          For product design, UX and strategy enquiries, please send a short
          note and I’ll come back to you directly.
        </p>
        <div
          data-reveal
          style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
        >
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
