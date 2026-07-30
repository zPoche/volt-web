import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { VoltLogo } from './VoltLogo';
import { springSnappy } from '../lib/motion';

const NAV = [
  { href: '#produkt', label: 'Produkt' },
  { href: '#module', label: 'Module' },
  { href: '#betrieb', label: 'Betrieb' },
] as const;

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);

  useMotionValueEvent(scrollY, 'change', (value) => {
    setCompact(value > 24);
  });

  useEffect(() => {
    setCompact(window.scrollY > 24);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-border/80 bg-card/90 backdrop-blur-md"
      animate={{
        boxShadow: compact ? '0 8px 24px rgb(17 24 39 / 0.06)' : '0 0 0 rgb(0 0 0 / 0)',
      }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8"
        animate={{ height: compact ? 56 : 64 }}
        transition={springSnappy}
      >
        <motion.a
          href="#top"
          className="text-foreground no-underline"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <VoltLogo />
        </motion.a>
        <nav
          className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex"
          aria-label="Hauptnavigation"
        >
          {NAV.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-foreground"
              whileHover={{ y: -1 }}
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.22 }}
              />
            </motion.a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <motion.a
            href="#kontakt"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-foreground sm:inline-flex"
            whileHover={{ backgroundColor: 'rgb(243 244 246)' }}
            whileTap={{ scale: 0.98 }}
          >
            Kontakt
          </motion.a>
          <motion.a
            href="#kontakt"
            className="inline-flex h-9 items-center rounded-lg bg-primary px-3.5 text-sm font-semibold text-primary-foreground"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={springSnappy}
          >
            Demo anfragen
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
}
