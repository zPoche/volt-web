import { VoltLogo } from './VoltLogo';

const NAV = [
  { href: '#produkt', label: 'Produkt' },
  { href: '#module', label: 'Module' },
  { href: '#betrieb', label: 'Betrieb' },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <a href="#top" className="text-foreground no-underline">
          <VoltLogo />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex" aria-label="Hauptnavigation">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#kontakt"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:inline-flex"
          >
            Kontakt
          </a>
          <a
            href="#kontakt"
            className="inline-flex h-9 items-center rounded-lg bg-primary px-3.5 text-sm font-semibold text-primary-foreground shadow-none transition-opacity hover:opacity-90"
          >
            Demo anfragen
          </a>
        </div>
      </div>
    </header>
  );
}
