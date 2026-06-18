import { expertiseItems } from "./home.data";
import styles from "./homepage.module.css";

export function ExpertiseGrid() {
  return (
    <section className={styles.expertiseSection} aria-labelledby="what-i-bring">
      <h2 id="what-i-bring" className={styles.sectionHeading} data-reveal>
        What I Bring
      </h2>
      <div className={styles.expertiseGrid}>
        {expertiseItems.map((item, index) => (
          <article
            key={item.title}
            className={styles.expertiseCard}
            data-reveal
            style={{ "--reveal-delay": `${index * 60}ms` } as React.CSSProperties}
          >
            <h3 className={styles.expertiseCardTitle}>{item.title}</h3>
            <p className={styles.expertiseCardBody}>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
