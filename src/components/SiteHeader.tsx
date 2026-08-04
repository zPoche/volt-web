import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'motion/react';
import { VoltLogo } from './VoltLogo';
import { springSnappy } from '../lib/motion';

const NAV = [
  { href: '#produkt', id: 'produkt', label: 'Produkt' },
  { href: '#ergebnis', id: 'ergebnis', label: 'Ergebnis' },
  { href: '#module', id: 'module', label: 'Funktionen' },
  { href: '#ablauf', id: 'ablauf', label: 'Ablauf' },
  { href: '#demo-band', id: 'demo-band', label: 'Alltag' },
  { href: '#kontakt', id: 'kontakt', label: 'Kontakt' },
] as const;

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useMotionValueEvent(scrollY, 'change', (value) => {
    setCompact(value > 24);
  });

  useEffect(() => {
    setCompact(window.scrollY > 24);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-28% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-border bg-background/95"
      animate={{
        borderColor: compact ? 'rgb(58 68 62)' : 'rgb(58 68 62 / 0.55)',
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8"
        animate={{ height: compact ? 56 : 68 }}
        transition={springSnappy}
      >
        <a href="#top" className="text-foreground no-underline" onClick={closeMenu}>
          <VoltLogo size="nav" />
        </a>

        <nav
          className="hidden items-center gap-6 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground md:flex"
          aria-label="Hauptnavigation"
        >
          {NAV.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative transition-colors ${
                  isActive ? 'text-primary' : 'hover:text-foreground'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full bg-primary transition-transform origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#kontakt"
            className="inline-flex h-9 items-center rounded-md bg-primary px-3.5 text-sm font-semibold text-primary-foreground"
            onClick={closeMenu}
          >
            Demo anfragen
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            id="mobile-nav"
            className="border-t border-border bg-card md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-0.5 px-6 py-3">
              {NAV.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-3 py-3 font-mono text-xs font-medium uppercase tracking-[0.08em] transition-colors ${
                      isActive ? 'bg-secondary text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
