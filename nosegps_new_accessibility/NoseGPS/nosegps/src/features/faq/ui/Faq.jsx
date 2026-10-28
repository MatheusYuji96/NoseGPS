import { FAQ_ITEMS } from '../model/faq'
import styles from './Faq.module.css'

export function Faq() {
  return (
    <div className={styles.list}>
      {FAQ_ITEMS.map((item) => (
        <details className={styles.item} key={item.question}>
          <summary className={styles.summary}>
            {item.question}
            <span className={styles.icon} aria-hidden="true" />
          </summary>
          <div className={styles.answer}>
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
