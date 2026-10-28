import { Link } from 'react-router-dom'
import nosepass from '../../assets/nosepass.png'
import styles from './Logo.module.css'

export function Logo({ small = false, link = true, onClick }) {
  const content = (
    <>
      <span className={styles.mark} aria-hidden="true">
        <img src={nosepass} alt="" width="46" height="46" />
      </span>
      <span className={styles.word}>
        Nose<span className={styles.accent}>GPS</span>
      </span>
    </>
  )

  const className = `${styles.logo} ${small ? styles.small : ''}`.trim()

  if (!link) {
    return <span className={className}>{content}</span>
  }

  return (
    <Link
      to="/"
      className={className}
      aria-label="NoseGPS — página inicial"
      onClick={onClick}
    >
      {content}
    </Link>
  )
}
