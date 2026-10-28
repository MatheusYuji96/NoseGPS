import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Logo } from '../../../shared/ui/logo'
import styles from './SiteFooter.module.css'

const PRODUCT_LINKS = [
  { label: 'Funcionalidades', hash: 'funcionalidades' },
  { label: 'Planos', hash: 'planos' },
  { label: 'Perguntas frequentes', hash: 'faq' },
]

const ACCOUNT_LINKS = [
  { label: 'Cadastro', to: '/cadastro' },
  { label: 'Início', to: '/' },
]

const CURRENT_YEAR = new Date().getFullYear()

export function SiteFooter() {
  const location = useLocation()
  const navigate = useNavigate()

  function handleHash(hash) {
    if (location.pathname === '/') {
      const target = document.getElementById(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.replaceState(null, '', `/#${hash}`)
      }
      return
    }

    navigate(`/#${hash}`)
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>
            Seu caminho em Kanto. Sua aventura Pokémon. Rotas, alertas e
            descobertas para treinadores que exploram a região a pé ou de
            bicicleta.
          </p>
          <span className={styles.note}>Feito por treinadores, para treinadores</span>
        </div>

        <nav aria-label="Links do produto">
          <h2 className={styles.columnTitle}>Produto</h2>
          <ul className={styles.list}>
            {PRODUCT_LINKS.map((item) => (
              <li key={item.label}>
                <a
                  href={`/#${item.hash}`}
                  className={styles.link}
                  onClick={(event) => {
                    event.preventDefault()
                    handleHash(item.hash)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Links de conta">
          <h2 className={styles.columnTitle}>Conta</h2>
          <ul className={styles.list}>
            {ACCOUNT_LINKS.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>© {CURRENT_YEAR} NoseGPS. Todos os direitos reservados.</p>
          <p>
            Projeto de fã, sem vínculo oficial com a Pokémon Company.
          </p>
        </div>
      </div>
    </footer>
  )
}
