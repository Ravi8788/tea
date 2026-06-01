/** Run fn when DOM is parsed (safe for Astro/Vite module scripts). */
export function onReady(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
}

/** Run fn when full page + assets loaded. */
export function onLoad(fn) {
  if (document.readyState === 'complete') {
    fn();
  } else {
    window.addEventListener('load', fn, { once: true });
  }
}

/** Fired from gsap-init.js after the loading screen hides. */
export function onAppReady(fn) {
  if (document.body.dataset.appReady === 'true') {
    fn();
    return;
  }
  window.addEventListener('app:ready', fn, { once: true });
}

export function markAppReady() {
  document.body.dataset.appReady = 'true';
  window.dispatchEvent(new CustomEvent('app:ready'));
}
