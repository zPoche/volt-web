import { useEffect } from 'react';

declare global {
  interface Window {
    __VOLT_SPLASH_DONE__?: boolean;
    __voltHideSplash?: () => void;
  }
}

/**
 * Blendet den HTML-Splash aus, sobald React gemountet ist.
 * Wartet NICHT ewig auf Google Fonts (hängen oft hinter Plesk/Firewall).
 */
export function PageSplash() {
  useEffect(() => {
    if (window.__VOLT_SPLASH_DONE__) return;

    const minMs = 600;
    const hardCapMs = 1800;
    const started = performance.now();
    let done = false;

    const hide = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, minMs - (performance.now() - started));
      window.setTimeout(() => {
        if (typeof window.__voltHideSplash === 'function') {
          window.__voltHideSplash();
        } else {
          const el = document.getElementById('volt-splash');
          el?.classList.add('volt-splash--hide');
          window.setTimeout(() => el?.remove(), 320);
          window.__VOLT_SPLASH_DONE__ = true;
        }
      }, wait);
    };

    // Fonts optional kurz abwarten — aber mit Timeout, nie blockierend
    const fonts =
      document.fonts?.ready ??
      Promise.resolve();
    const raced = Promise.race([
      fonts.catch(() => undefined),
      new Promise<void>((resolve) => window.setTimeout(resolve, 400)),
    ]);

    void raced.then(hide);

    // Zusätzlicher Hard-Cap falls etwas schiefgeht
    const cap = window.setTimeout(hide, hardCapMs);
    return () => window.clearTimeout(cap);
  }, []);

  return null;
}
