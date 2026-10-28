import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../../shared/ui/button'
import { Logo } from '../../../shared/ui/logo'
import styles from './SiteHeader.module.css'

const NAV_ITEMS = [
  { label: 'Início', hash: '' },
  { label: 'Funcionalidades', hash: 'funcionalidades' },
  { label: 'Planos', hash: 'planos' },
  { label: 'FAQ', hash: 'faq' },
]

function MenuIcon({ open }) {
  if (open) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  function handleNavigate(hash) {
    setOpen(false)

    if (!hash) {
      if (location.pathname === '/' && !location.hash) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        navigate('/')
      }
      return
    }

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
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo onClick={() => setOpen(false)} />

        <nav className={styles.nav} aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.hash ? `/#${item.hash}` : '/'}
              className={styles.navLink}
              onClick={(event) => {
                event.preventDefault()
                handleNavigate(item.hash)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button to="/cadastro" size="small" className={styles.desktopCta}>
            Quero ser avisado
          </Button>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div className={styles.mobilePanel} id="menu-mobile">
          <nav className={styles.mobileNav} aria-label="Navegação mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.hash ? `/#${item.hash}` : '/'}
                className={styles.mobileLink}
                onClick={(event) => {
                  event.preventDefault()
                  handleNavigate(item.hash)
                }}
              >
                <span>{item.label}</span>
                <span aria-hidden="true">→</span>
              </a>
            ))}
            <Button
              to="/cadastro"
              size="large"
              full
              className={styles.mobileCta}
              onClick={() => setOpen(false)}
            >
              Quero ser avisado
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
