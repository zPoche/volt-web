import { useEffect, useRef } from 'react'
import './App.css'

const modules = [
  {
    name: 'Finanzen & Controlling',
    desc: 'Buchhaltung, Kostenstellen und Liquidität in einem durchgängigen Zahlenbild.',
  },
  {
    name: 'Einkauf & Lieferanten',
    desc: 'Bestellungen, Freigaben und Lieferantenbewertung ohne Tabellenchaos.',
  },
  {
    name: 'Lager & Bestände',
    desc: 'Bestände, Bewegungen und Nachschub in Echtzeit — für Produktion und Handel.',
  },
  {
    name: 'Aufträge & Prozesse',
    desc: 'Vom Angebot bis zur Lieferung: klare Workflows mit Verantwortlichkeiten.',
  },
]

const steps = [
  {
    title: 'Klären',
    text: 'Wir bilden eure Kernprozesse ab und priorisieren die Module, die sofort Wirkung zeigen.',
  },
  {
    title: 'Kalibrieren',
    text: 'Volt wird an Freigaben, Strukturen und Integrationen angepasst — ohne monatelanges Customizing.',
  },
  {
    title: 'Live gehen',
    text: 'Teams starten fokussiert, Daten fließen sauber, und ihr steuert das Geschäft aus einer Quelle.',
  },
]

function useReveal() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const nodes = root.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return rootRef
}

function BoltMark() {
  return (
    <svg className="nav__mark" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.6 2 5 14.2h5.8L9.4 22 19 9.8h-5.8L13.6 2z"
      />
    </svg>
  )
}

export default function App() {
  const rootRef = useReveal()

  return (
    <div className="site" ref={rootRef}>
      <header className="nav">
        <a className="nav__brand" href="#top" aria-label="Volt ERP Start">
          <BoltMark />
          VOLT
        </a>
        <ul className="nav__links">
          <li>
            <a href="#module">Module</a>
          </li>
          <li>
            <a href="#ablauf">Ablauf</a>
          </li>
          <li>
            <a className="nav__cta" href="#kontakt">
              Gespräch sichern
            </a>
          </li>
        </ul>
      </header>

      <main id="top">
        <section className="hero" aria-label="Volt ERP">
          <div className="hero__media">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80"
              alt="Moderne Lagerhalle mit strukturierten Regalen und Warenfluss"
              width={2400}
              height={1600}
              fetchPriority="high"
            />
            <div className="hero__veil" />
            <div className="hero__current" aria-hidden="true" />
          </div>

          <div className="hero__content">
            <p className="hero__brand">
              VOLT<span>.</span>
            </p>
            <h1 className="hero__headline">
              ERP, das Betrieb und Zahlen auf eine Linie bringt.
            </h1>
            <p className="hero__lead">
              Finanzen, Lager, Einkauf und Prozesse — verbunden in einem klaren
              System für wachsende Unternehmen.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#kontakt">
                Demo anfragen
              </a>
              <a className="btn btn--ghost" href="#module">
                Module ansehen
              </a>
            </div>
          </div>
        </section>

        <section className="section section--purpose" id="produkt">
          <div className="section__inner reveal">
            <p className="section__label">Produkt</p>
            <h2 className="section__title">Ein System. Weniger Reibung.</h2>
            <p className="section__text">
              Volt ERP ersetzt fragmentierte Tools und Tabellen durch eine
              gemeinsame Betriebsbasis. Teams arbeiten mit denselben Daten,
              Freigaben und Kennzahlen — vom Einkauf bis zur Auswertung.
            </p>
          </div>
        </section>

        <section className="section section--modules" id="module">
          <div className="section__inner">
            <div className="reveal">
              <p className="section__label">Module</p>
              <h2 className="section__title">Was Volt abdeckt</h2>
              <p className="section__text">
                Startet mit dem, was heute brennt — und erweitert, wenn das
                Geschäft wächst.
              </p>
            </div>
            <ol className="module-list reveal">
              {modules.map((module, index) => (
                <li key={module.name}>
                  <span className="module-list__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="module-list__name">{module.name}</h3>
                    <p className="module-list__desc">{module.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="ablauf">
          <div className="section__inner">
            <div className="reveal">
              <p className="section__label">Ablauf</p>
              <h2 className="section__title">In drei Schritten unter Strom</h2>
              <p className="section__text">
                Kein Endlosprojekt. Volt ist darauf ausgelegt, schnell produktiv
                zu werden und sauber mitzuwachsen.
              </p>
            </div>
            <div className="steps">
              {steps.map((step, index) => (
                <article className="step reveal" key={step.title}>
                  <span className="step__num">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__text">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--cta" id="kontakt">
          <div className="section__inner cta-panel reveal">
            <div>
              <p className="section__label">Nächster Schritt</p>
              <h2 className="section__title">Bereit für Volt ERP?</h2>
              <p className="section__text">
                Erzählt uns kurz von euren Prozessen — wir zeigen euch, wie Volt
                in eurem Alltag sitzt.
              </p>
            </div>
            <div className="cta-panel__actions">
              <a className="btn btn--primary" href="mailto:johannes@avtx.io">
                johannes@avtx.io
              </a>
              <a className="btn btn--dark" href="mailto:johannes@avtx.io?subject=Volt%20ERP%20Demo">
                Demo anfragen
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <span className="footer__brand">VOLT ERP</span>
          <span>© {new Date().getFullYear()} Volt</span>
          <a href="mailto:johannes@avtx.io">Kontakt</a>
        </div>
      </footer>
    </div>
  )
}
