import styles from "./homepage.module.css";

export function WorkingPrinciple() {
  return (
    <section
      className={styles.workingPrincipleSection}
      aria-labelledby="working-principle-title"
      data-reveal
    >
      <div className={styles.workingPrincipleCard}>
        <p id="working-principle-title" className={styles.sectionLabel}>
          WORKING PRINCIPLE
        </p>
        <p className={styles.workingPrincipleText}>
          My work spans product thinking, UX, commercial judgement and
          hands-on prototyping. I help teams understand complexity, connect the
          dots and turn digital products, websites and workflows into something
          more usable, focused and actionable.
        </p>
      </div>
    </section>
  );
}
