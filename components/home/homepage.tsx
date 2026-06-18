import { ContactCta } from "./contact-cta";
import { ExpertiseGrid } from "./expertise-grid";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { getFooterNav, getPrimaryNav } from "./home.data";
import { MotionOrchestrator } from "./motion-orchestrator";
import { SelectedWork } from "./selected-work";
import { WorkingPrinciple } from "./working-principle";
import styles from "./homepage.module.css";

export function Homepage() {
  return (
    <div className={styles.pageShell} id="top">
      <MotionOrchestrator />
      <Header items={getPrimaryNav("case-study")} brandHref="/" />
      <main className={styles.main}>
        <Hero />
        <div className={styles.divider} aria-hidden="true" data-line-reveal />
        <WorkingPrinciple />
        <ExpertiseGrid />
        <SelectedWork />
        <ContactCta />
      </main>
      <Footer items={getFooterNav()} brandHref="/" />
    </div>
  );
}
