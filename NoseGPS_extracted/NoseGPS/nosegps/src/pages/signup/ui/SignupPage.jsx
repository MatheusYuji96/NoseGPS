import { Link } from 'react-router-dom'
import nosepass from '../../../shared/assets/nosepass.png'
import { SignupForm } from '../../../features/signup-form'
import styles from './SignupPage.module.css'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m5.5 12.6 4.2 4.2 8.8-9.1"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const BENEFITS = [
  {
    title: 'Alertas em primeira mão',
    text: 'Saiba antes de todo mundo quando o NoseGPS chegar à sua região.',
  },
  {
    title: 'Acesso ao beta fechado',
    text: 'Teste rotas exclusivas e ajude a mapear novos caminhos de Kanto.',
  },
  {
    title: 'Condições especiais de lançamento',
    text: 'Receba ofertas e brindes reservados para quem está na lista.',
  },
]

export function SignupPage() {
  return (
    <main id="conteudo" className={styles.page}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>Cadastro</span>
            <h1 className={styles.title}>
              Sua próxima aventura
              <span className={styles.titleAccent}>começa com um aviso.</span>
            </h1>
            <p className={styles.text}>
              Entre na lista de lançamento do NoseGPS e seja o primeiro a saber
              quando novas rotas, alertas e recursos chegarem a Kanto.
            </p>

            <ul className={styles.benefits}>
              {BENEFITS.map((benefit) => (
                <li className={styles.benefit} key={benefit.title}>
                  <span className={styles.benefitIcon}>
                    <CheckIcon />
                  </span>
                  <div>
                    <strong>{benefit.title}</strong>
                    <p>{benefit.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.mascotCard}>
              <img
                src={nosepass}
                alt=""
                className={styles.mascotImage}
                width="66"
                height="66"
              />
              <p>
                <strong>O Nosepass já está de olho no caminho.</strong>{' '}
                Junte-se a mais de 8.400 treinadores que exploram Kanto com o
                NoseGPS.
              </p>
            </div>

            <Link to="/" className={styles.backLink}>
              ← Voltar para o início
            </Link>
          </div>

          <div className={styles.formColumn}>
            <SignupForm />
          </div>
        </div>
      </div>
    </main>
  )
}
