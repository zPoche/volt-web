import { ArrowRight } from 'lucide-react';
import { VoltLogo } from './VoltLogo';
import { ProductVisual } from './ProductVisual';

export function Hero() {
  return (
    <section
      id="top"
      className="volt-atmosphere relative overflow-hidden border-b border-border"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-end lg:gap-12 lg:pb-20 lg:pt-20">
        <div className="relative z-10 max-w-xl">
          <VoltLogo size="hero" className="animate-rise" />
          <h1
            id="hero-heading"
            className="animate-rise-delay mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            ERP fürs Elektrohandwerk — klar, modular, alltagstauglich.
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Projekte, Einsatzplanung, Angebote und Abrechnung in einem System — mit der gleichen
            Designsprache wie in der Volt-App.
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#kontakt"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Demo anfragen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#produkt"
              className="inline-flex h-11 items-center rounded-lg border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Produkt ansehen
            </a>
          </div>
        </div>

        <div className="animate-hero-visual relative min-h-[280px] lg:min-h-[360px]">
          <ProductVisual />
        </div>
      </div>
    </section>
  );
}
