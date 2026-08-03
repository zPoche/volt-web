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
      className="sticky top-0 z-40 border-b border-white/8 bg-[rgb(8_12_20_/_0.78)] backdrop-blur-xl"
      animate={{
        boxShadow: compact ? '0 12px 40px rgb(0 0 0 / 0.35)' : '0 0 0 rgb(0 0 0 / 0)',
      }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8"
        animate={{ height: compact ? 60 : 72 }}
        transition={springSnappy}
      >
        <motion.a
          href="#top"
          className="text-foreground no-underline"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={closeMenu}
        >
          <VoltLogo size="nav" />
        </motion.a>

        <nav
          className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex"
          aria-label="Hauptnavigation"
        >
          {NAV.map((item) => {
            const isActive = activeId === item.id;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                className={`relative transition-colors ${
                  isActive ? 'text-foreground' : 'hover:text-foreground'
                }`}
                whileHover={{ y: -1 }}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-primary"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.22 }}
                />
              </motion.a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            href="#kontakt"
            className="inline-flex h-10 items-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={springSnappy}
            onClick={closeMenu}
          >
            Demo anfragen
          </motion.a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-foreground md:hidden"
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
            className="border-t border-white/8 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-3 py-3 text-sm font-medium transition-colors hover:bg-white/5 hover:text-foreground ${
                      isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
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
