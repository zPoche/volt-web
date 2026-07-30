import { useEffect } from 'react';

declare global {
  interface Window {
    __VOLT_SPLASH_DONE__?: boolean;
  }
}

/**
 * Blendet den HTML-Splash (#volt-splash mit Blitz-Animation) aus,
 * sobald React + Fonts bereit sind.
 */
export function PageSplash() {
  useEffect(() => {
    if (window.__VOLT_SPLASH_DONE__) return;

    const htmlSplash = document.getElementById('volt-splash');
    const minMs = 800;
    const started = performance.now();

    const finish = () => {
      const wait = Math.max(0, minMs - (performance.now() - started));
      window.setTimeout(() => {
        htmlSplash?.classList.add('volt-splash--hide');
        window.setTimeout(() => {
          htmlSplash?.remove();
          window.__VOLT_SPLASH_DONE__ = true;
        }, 320);
      }, wait);
    };

    if (document.fonts?.ready) {
      void document.fonts.ready.then(finish).catch(finish);
    } else {
      finish();
    }
  }, []);

  return null;
}
