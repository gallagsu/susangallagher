import Link from "next/link";
import Image from "next/image";
import { homeProjectItems } from "./home.data";
import type { ProjectItem } from "./home.types";
import styles from "./homepage.module.css";

function ProjectRow({
  indexLabel,
  title,
  href,
  summary,
  description,
  tags,
  image,
  index,
}: ProjectItem & { index: number }) {
  const hasBackdrop = Boolean(image?.backdropSrc);

  const imageContent = image ? (
    <div
      className={`${styles.projectImageFrame} ${
        image.frameStyle === "graph-paper"
          ? styles.projectImageFrameGraphPaper
          : ""
      }`}
      style={
        !hasBackdrop && image.aspectRatio
          ? ({ aspectRatio: image.aspectRatio } as React.CSSProperties)
          : undefined
      }
    >
      {image.backdropSrc ? (
        <Image
          src={image.backdropSrc}
          alt=""
          fill
          className={styles.projectBackdropImage}
          sizes="(max-width: 900px) 100vw, 640px"
        />
      ) : null}
      {image.foregroundSrc ? (
        <div
          className={`${styles.projectForegroundWrap} ${
            !hasBackdrop ? styles.projectForegroundWrapSolo : ""
          } ${
            hasBackdrop && image.frameStyle === "graph-paper"
              ? styles.projectForegroundWrapGraphPaper
              : ""
          }`}
        >
          <Image
            src={image.foregroundSrc}
            alt={image.alt}
            fill
            className={styles.projectForegroundImage}
            sizes="(max-width: 900px) 100vw, 360px"
          />
        </div>
      ) : null}
    </div>
  ) : (
    <div
      className={styles.projectImagePlaceholder}
      role="img"
      aria-label={`${title} project image placeholder`}
    />
  );

  const desktopViewProject = href ? (
    <Link
      href={href}
      className={`${styles.projectViewLink} ${styles.projectViewLinkDesktop}`}
    >
      [view project]
    </Link>
  ) : null;

  const mobileViewProject = href ? (
    <Link
      href={href}
      className={`${styles.projectViewLink} ${styles.projectViewLinkMobile}`}
    >
      [view project]
    </Link>
  ) : null;

  return (
    <article
      className={styles.projectRow}
      data-reveal
      style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
    >
      <div className={styles.projectLead}>
        <p className={styles.sectionLabel}>{indexLabel}</p>
        <h3 className={styles.projectTitle}>
          {href ? (
            <Link href={href} className={styles.projectTitleLink}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className={styles.projectSummary}>{summary}</p>
        <ul className={styles.tagList} aria-label={`${title} project tags`}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tagPill}>
              {tag}
            </li>
          ))}
        </ul>
        {desktopViewProject}
      </div>
      <div className={styles.projectSpacer} aria-hidden="true" />
      <div className={styles.projectBody}>
        {href ? (
          <Link
            href={href}
            aria-label={`Open ${title} work example`}
            className={styles.projectImageLink}
          >
            {imageContent}
          </Link>
        ) : (
          <div className={styles.projectImageStatic} aria-hidden="true">
            {imageContent}
          </div>
        )}
        <p className={styles.bodyText}>{description}</p>
      </div>
      {mobileViewProject}
    </article>
  );
}

type ProjectCollectionProps = {
  heading?: string;
  headingId?: string;
  labelledById?: string;
  items: ProjectItem[];
  headingTag?: "h1" | "h2";
};

export function ProjectCollection({
  heading,
  headingId,
  labelledById,
  items,
  headingTag = "h2",
}: ProjectCollectionProps) {
  const HeadingTag = headingTag;
  const sectionLabelledBy = heading ? headingId : labelledById;

  return (
    <section
      className={styles.selectedWorkSection}
      aria-labelledby={sectionLabelledBy}
    >
      {heading && headingId ? (
        <div className={styles.selectedWorkHeader} data-reveal>
          <HeadingTag id={headingId} className={styles.sectionLabelHeading}>
            {heading}
          </HeadingTag>
        </div>
      ) : null}
      <div className={styles.projectList}>
        {items.map((project, index) => (
          <ProjectRow key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}

export function SelectedWork() {
  return (
    <ProjectCollection
      heading="SELECTED WORK"
      headingId="selected-work"
      items={homeProjectItems}
    />
  );
}
