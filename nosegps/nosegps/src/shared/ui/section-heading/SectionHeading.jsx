import styles from './SectionHeading.module.css'

export function SectionHeading({ eyebrow, title, description, align = 'center', as: Tag = 'h2', id }) {
  const wrapperClass = align === 'left' ? `${styles.wrapper} ${styles.left}` : styles.wrapper

  return (
    <div className={wrapperClass}>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <Tag className={styles.title} id={id}>
        {title}
      </Tag>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  )
}
