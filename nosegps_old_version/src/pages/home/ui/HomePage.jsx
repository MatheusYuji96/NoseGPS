import { Link } from 'react-router-dom'
import nosepass from '../../../shared/assets/nosepass.png'
import { Button } from '../../../shared/ui/button'
import { SectionHeading } from '../../../shared/ui/section-heading'
import { Faq } from '../../../features/faq'
import styles from './HomePage.module.css'

const FEATURES = [
  {
    icon: 'route',
    tag: 'Planejamento',
    title: 'Rotas sob medida',
    description:
      'Escolha o ponto de partida e o destino. O NoseGPS calcula o melhor caminho a pé ou de bicicleta, com distância, tempo estimado e nível de dificuldade.',
    accent: 'blue',
  },
  {
    icon: 'bell',
    tag: 'Tempo real',
    title: 'Alertas que importam',
    description:
      'Receba avisos de Pokémon raros por perto, mudanças de clima, trechos bloqueados e lembretes de descanso durante toda a exploração.',
    accent: 'red',
  },
  {
    icon: 'map',
    tag: 'Kanto',
    title: 'Mapa vivo da região',
    description:
      'Cidades, rotas, centros Pokémon e pontos de interesse reunidos em um mapa detalhado que se atualiza conforme você se move.',
    accent: 'yellow',
  },
  {
    icon: 'bike',
    tag: 'Mobilidade',
    title: 'Modo bicicleta',
    description:
      'Priorize ciclovias e estradas tranquilas, evite escadarias e pedale com segurança por rotas pensadas para duas rodas.',
    accent: 'blue',
  },
  {
    icon: 'flag',
    tag: 'Descoberta',
    title: 'Pontos de descanso',
    description:
      'Encontre centros de recuperação, fontes de água, áreas sombreadas e lugares seguros para uma pausa antes de seguir viagem.',
    accent: 'yellow',
  },
  {
    icon: 'offline',
    tag: 'Sem sinal?',
    title: 'Mapas offline',
    description:
      'Baixe a área que vai explorar e continue navegando mesmo sem conexão. Seus pontos e rotas salvos ficam sempre disponíveis.',
    accent: 'red',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Escolha o destino',
    description: 'Busque uma cidade, rota ou ponto de interesse em Kanto.',
  },
  {
    number: '02',
    title: 'Planeje o caminho',
    description: 'Selecione a pé ou de bicicleta e ajuste as preferências da rota.',
  },
  {
    number: '03',
    title: 'Explore com alertas',
    description: 'Siga o trajeto e receba avisos em tempo real pelo caminho.',
  },
]

const PLANS = [
  {
    name: 'Explorador',
    description: 'Para quem está começando a mapear Kanto.',
    price: 'R$ 0',
    period: 'para sempre',
    features: [
      'Rotas a pé e de bicicleta',
      'Mapa completo de Kanto',
      '3 alertas por mês',
      'Pontos de descanso',
    ],
    action: 'Começar grátis',
    variant: 'secondary',
  },
  {
    name: 'Treinador',
    description: 'Para quem vive em movimento e não quer perder nada.',
    price: 'R$ 19',
    period: 'por mês',
    features: [
      'Tudo do plano Explorador',
      'Alertas e rotas ilimitados',
      'Mapas offline de Kanto',
      'Modo bicicleta avançado',
      'Planejamento de equipe',
    ],
    action: 'Assinar o Treinador',
    variant: 'yellow',
    highlight: true,
    badge: 'Mais popular',
  },
  {
    name: 'Mestre',
    description: 'Para expedições longas e rotas com curadoria.',
    price: 'R$ 39',
    period: 'por mês',
    features: [
      'Tudo do plano Treinador',
      'Rotas com curadoria de especialistas',
      'Acesso antecipado a novas áreas',
      'Relatórios de exploração',
      'Suporte prioritário',
    ],
    action: 'Escolher o Mestre',
    variant: 'yellow',
  },
]

const STATS = [
  { value: '120+', label: 'rotas mapeadas' },
  { value: '6', label: 'cidades cobertas' },
  { value: '8,4 mil', label: 'treinadores no beta' },
  { value: '24/7', label: 'alertas ativos' },
]

function Icon({ name }) {
  const paths = {
    route: (
      <>
        <circle cx="6" cy="19" r="2.4" />
        <circle cx="18" cy="5" r="2.4" />
        <path d="M8.4 19H14a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h6.6" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 1 0-12 0c0 6-2.5 7-2.5 7h17S18 14 18 8" />
        <path d="M10.3 20a2 2 0 0 0 3.4 0" />
      </>
    ),
    map: (
      <>
        <path d="M9 4 3 6.5v14L9 18l6 2.5 6-2.5v-14L15 6.5 9 4Z" />
        <path d="M9 4v14M15 6.5v14" />
      </>
    ),
    bike: (
      <>
        <circle cx="5.5" cy="17" r="3.5" />
        <circle cx="18.5" cy="17" r="3.5" />
        <path d="M5.5 17 9 9h5l4.5 8M12 17h-6.5M9 9h3M15 6h3" />
      </>
    ),
    flag: (
      <>
        <path d="M5 21V4M5 5h11l-2 3 2 3H5" />
      </>
    ),
    offline: (
      <>
        <path d="M5 12.5a10 10 0 0 1 5-2.4M2 8.8a15 15 0 0 1 3.5-2.1M12 18.5h.01M8.8 16a4.5 4.5 0 0 1 6.4 0" />
        <path d="m3 3 18 18" />
      </>
    ),
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.14" />
      <path
        d="m7.5 12.2 2.9 2.9 6.1-6.3"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HeroVisual() {
  return (
    <div className={styles.heroVisual}>
      <div className={styles.heroBlob} aria-hidden="true" />
      <div className={styles.heroDots} aria-hidden="true" />
      <div className={styles.heroPhoto}>
        <img
          src={nosepass}
          alt="Nosepass, mascote do NoseGPS, apontando o caminho em Kanto"
          width="360"
          height="360"
        />
      </div>

      <div className={styles.mapCard}>
        <div className={styles.mapCardHeader}>
          <span className={styles.mapDot} aria-hidden="true" />
          <span>Rota para Pewter City</span>
        </div>
        <svg viewBox="0 0 220 96" className={styles.miniMap} aria-hidden="true">
          <path d="M0 24h220M0 48h220M0 72h220M44 0v96M88 0v96M132 0v96M176 0v96" className={styles.mapGrid} />
          <path
            d="M18 78c22 0 24-30 48-30s28-24 54-24 24 16 44 16 26-16 38-16"
            className={styles.mapRoute}
          />
          <circle cx="18" cy="78" r="5" className={styles.mapStart} />
          <circle cx="202" cy="24" r="6" className={styles.mapEnd} />
        </svg>
        <div className={styles.mapMeta}>
          <span>12,4 km</span>
          <span>3h 20min</span>
          <span className={styles.mapMode}>A pé</span>
        </div>
      </div>

      <div className={styles.alertCard}>
        <span className={styles.alertIcon} aria-hidden="true">
          <Icon name="bell" />
        </span>
        <div>
          <strong>Alerta de rota</strong>
          <span>Pokémon raro a 300 m</span>
        </div>
      </div>

      <div className={styles.compassBadge} aria-hidden="true">
        <span>N</span>
      </div>
    </div>
  )
}

export function HomePage() {
  return (
    <main id="conteudo">
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>
              <span className={styles.pulse} aria-hidden="true" />
              Exploração inteligente em Kanto
            </span>
            <h1 className={styles.heroTitle} id="hero-title">
              Seu caminho em Kanto.
              <span className={styles.heroTitleAccent}>Sua aventura Pokémon.</span>
            </h1>
            <p className={styles.heroText}>
              O NoseGPS planeja rotas, acompanha seu trajeto e envia alertas para
              treinadores que exploram Kanto a pé ou de bicicleta. Menos tempo
              perdido, mais descobertas pelo caminho.
            </p>
            <div className={styles.heroActions}>
              <Button to="/cadastro" size="large">
                Garantir meu acesso
                <ArrowIcon />
              </Button>
              <Button href="#funcionalidades" variant="secondary" size="large">
                Conhecer recursos
              </Button>
            </div>
            <ul className={styles.heroHighlights}>
              <li>Sem cartão de crédito</li>
              <li>Mapas offline</li>
              <li>Alertas em tempo real</li>
            </ul>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className={styles.statsSection} aria-label="Números do NoseGPS">
        <dl className={styles.stats}>
          {STATS.map((stat) => (
            <div className={styles.stat} key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.section} id="funcionalidades" aria-labelledby="funcionalidades-title">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Funcionalidades"
            title="Tudo o que um explorador precisa"
            description="Do planejamento da rota aos avisos no meio do caminho, o NoseGPS acompanha cada passo da sua aventura por Kanto."
            id="funcionalidades-title"
          />
          <ul className={styles.featureGrid}>
            {FEATURES.map((feature) => (
              <li className={styles.featureCard} key={feature.title}>
                <span className={`${styles.featureIcon} ${styles[feature.accent]}`}>
                  <Icon name={feature.icon} />
                </span>
                <span className={styles.featureTag}>{feature.tag}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.stepsSection} aria-labelledby="como-funciona-title">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Como funciona"
            title="Três passos até a próxima aventura"
            description="Simples de usar, feito para quem quer sair logo pela porta."
            id="como-funciona-title"
          />
          <ol className={styles.steps}>
            {STEPS.map((step) => (
              <li className={styles.step} key={step.number}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {step.number}
                </span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} id="planos" aria-labelledby="planos-title">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Planos"
            title="Escolha o ritmo da sua jornada"
            description="Comece de graça e evolua quando quiser. Todos os planos incluem o mapa completo de Kanto."
            id="planos-title"
          />
          <div className={styles.planGrid}>
            {PLANS.map((plan) => (
              <article
                className={`${styles.planCard} ${plan.highlight ? styles.planHighlight : ''}`}
                key={plan.name}
              >
                {plan.badge ? <span className={styles.planBadge}>{plan.badge}</span> : null}
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                <p className={styles.planPrice}>
                  <span className={styles.planValue}>{plan.price}</span>
                  <span className={styles.planPeriod}>{plan.period}</span>
                </p>
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className={styles.checkIcon}>
                        <CheckIcon />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button to="/cadastro" variant={plan.variant} full>
                  {plan.action}
                </Button>
              </article>
            ))}
          </div>
          <p className={styles.planNote}>
            Todos os planos são fictícios e fazem parte da demonstração do lançamento.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faqSection}`} id="faq" aria-labelledby="faq-title">
        <div className={`${styles.container} ${styles.faqLayout}`}>
          <div className={styles.faqIntro}>
            <SectionHeading
              eyebrow="FAQ"
              title="Perguntas frequentes"
              description="Ainda ficou com alguma dúvida? Reunimos as respostas mais importantes sobre o NoseGPS."
              align="left"
              id="faq-title"
            />
            <div className={styles.supportCard}>
              <span className={styles.supportIcon} aria-hidden="true">
                <Icon name="route" />
              </span>
              <div>
                <strong>Precisa de ajuda?</strong>
                <p>
                  Fale com a nossa equipe pelo e-mail{' '}
                  <a href="mailto:oi@nosegps.com">oi@nosegps.com</a>.
                </p>
              </div>
            </div>
          </div>
          <Faq />
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaEyebrow}>Lista de lançamento</span>
              <h2 className={styles.ctaTitle} id="cta-title">
                Pronto para a próxima rota?
              </h2>
              <p className={styles.ctaText}>
                Cadastre-se para receber alertas, novidades e acesso antecipado
                ao NoseGPS. O Nosepass já está de olho no caminho.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Button to="/cadastro" variant="yellow" size="large">
                Quero receber novidades
                <ArrowIcon />
              </Button>
              <Link to="/cadastro" className={styles.ctaSecondary}>
                Já conheço o NoseGPS
              </Link>
            </div>
            <img src={nosepass} alt="" className={styles.ctaMascot} width="220" height="220" />
          </div>
        </div>
      </section>
    </main>
  )
}
