import { gsap } from 'gsap';

import { onAppReady } from './ready.js';

onAppReady(() => {
  const hero = document.querySelector('.home-hero');
  if (!hero) return;

  gsap.timeline()
    .fromTo(
      '.home-hero-brand',
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
    )
    .fromTo(
      '.home-hero-swiper',
      { y: 32, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out' },
      '-=0.35',
    )
    .fromTo(
      '.home-hero-scroll',
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '-=0.2',
    );
});
