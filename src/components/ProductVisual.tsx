import { Zap } from 'lucide-react';

/**
 * Stilisiertes App-Shell-Mock (Header + Sidebar + Content),
 * angelehnt an Volt ERP — flach, hell, Primary-Türkis.
 */
export function ProductVisual() {
  return (
    <div
      className="absolute inset-0 overflow-hidden border-l border-border bg-card"
      aria-hidden="true"
    >
      <div className="flex h-full min-h-[280px] flex-col bg-background lg:min-h-[360px]">
        <div className="flex h-12 items-center gap-3 border-b border-border bg-card px-4">
          <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
            <Zap className="h-3.5 w-3.5 fill-current" />
            Volt
          </span>
          <div className="ml-4 h-7 flex-1 rounded-lg bg-secondary" />
          <div className="h-7 w-7 rounded-full bg-accent" />
        </div>
        <div className="flex min-h-0 flex-1">
          <aside className="hidden w-44 shrink-0 border-r border-border bg-card p-3 sm:block">
            {['Dashboard', 'Projekte', 'Plantafel', 'Angebote', 'Kunden'].map((label, i) => (
              <div
                key={label}
                className={`relative mb-1 rounded-lg px-3 py-2 text-xs font-medium ${
                  i === 1
                    ? 'bg-primary/10 text-primary before:absolute before:inset-y-1 before:left-0 before:w-0.5 before:rounded-full before:bg-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {label}
              </div>
            ))}
          </aside>
          <main className="flex-1 space-y-3 p-4 sm:p-5">
            <div className="flex items-baseline gap-2">
              <div className="h-5 w-28 rounded bg-foreground/90" />
              <div className="h-3 w-40 rounded bg-muted-foreground/30" />
            </div>
            <div className="flex h-10 items-center gap-2 rounded-xl border border-border bg-card px-3">
              <div className="h-6 flex-1 rounded-md bg-secondary" />
              <div className="h-7 w-20 rounded-lg bg-primary" />
            </div>
            <div className="grid gap-2">
              {[72, 54, 64].map((w, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-3"
                >
                  <div className="h-8 w-8 rounded-lg bg-accent" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-2.5 rounded bg-foreground/20" style={{ width: `${w}%` }} />
                    <div className="h-2 w-1/3 rounded bg-muted-foreground/25" />
                  </div>
                  <div className="h-6 w-14 rounded-md bg-primary/15" />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
