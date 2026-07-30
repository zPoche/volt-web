import { useEffect, useId, useRef } from 'react';

const BOLT_PATH = 'M13 2 L4.5 13.5 H11.5 L11 22 L19.5 10.5 H12.5 Z';

const SIZES = {
  xs: 20,
  sm: 28,
  md: 48,
  lg: 80,
  xl: 120,
} as const;

type BlitzLoaderProps = {
  size?: keyof typeof SIZES | number;
  className?: string;
  label?: string;
  /** Stroke-Farbe — Default Volt-Türkis wie in blitz.html (#14d2be), nahe Primary */
  color?: string;
};

/**
 * Ladeanimation aus blitz.html — wandernder Glow-Stroke entlang des Volt-Blitzes.
 */
export function BlitzLoader({
  size = 'md',
  className = '',
  label = 'Laden',
  color = '#14d2be',
}: BlitzLoaderProps) {
  const reactId = useId();
  const filterId = `volt-bolt-glow-${reactId.replace(/:/g, '')}`;
  const glowRef = useRef<SVGPathElement>(null);
  const px = typeof size === 'number' ? size : SIZES[size];

  useEffect(() => {
    const path = glowRef.current;
    if (!path) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const total = path.getTotalLength();
    const dot = Math.max(4, total * 0.12);
    const gap = total - Math.max(6, total * 0.08);
    const period = dot + gap;
    path.style.strokeDasharray = `${dot} ${gap}`;

    if (reduced) {
      path.style.strokeDashoffset = '0';
      path.style.strokeDasharray = `${total}`;
      path.style.opacity = '0.85';
      return;
    }

    const duration = 2000;
    let start: number | null = null;
    let frame = 0;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const elapsed = (ts - start) % duration;
      path.style.strokeDashoffset = String(period - (elapsed / duration) * period);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <span
      className={`inline-flex flex-col items-center justify-center gap-2 ${className}`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <svg width={px} height={px} viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d={BOLT_PATH}
          fill="none"
          stroke={`${color}1f`}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          ref={glowRef}
          d={BOLT_PATH}
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#${filterId})`}
        />
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  );
}

type BlitzOverlayProps = {
  show: boolean;
  label?: string;
  /** Vollbild (Seite) oder absolut über dem Parent */
  fullscreen?: boolean;
  className?: string;
};

/** Overlay mit Blitz — für Seiten- und Abschnittsladen. */
export function BlitzOverlay({
  show,
  label = 'Laden…',
  fullscreen = false,
  className = '',
}: BlitzOverlayProps) {
  if (!show) return null;

  return (
    <div
      className={`${
        fullscreen ? 'fixed inset-0 z-[100]' : 'absolute inset-0 z-20'
      } flex items-center justify-center bg-background/85 backdrop-blur-sm transition-opacity ${className}`}
      role="alertdialog"
      aria-busy="true"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-3">
        <BlitzLoader size={fullscreen ? 'xl' : 'lg'} label={label} />
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
