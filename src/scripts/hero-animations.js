import { gsap } from 'gsap';

import { onAppReady } from './ready.js';

onAppReady(() => {
  const hero = document.querySelector('.home-hero');
  if (!hero) return;

  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  const timeline = gsap.timeline()
    .fromTo(
      '.home-hero-brand',
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
    )
    .fromTo(
      '.home-hero-swiper',
      { y: isMobile ? 16 : 32, opacity: 0 },
      { y: 0, opacity: 1, duration: isMobile ? 0.6 : 0.85, ease: 'power3.out' },
      '-=0.35',
    )
    .fromTo(
      '.home-hero-video-wrap',
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' },
      '-=0.25',
    );

  if (!isMobile) {
    timeline.fromTo(
      '.home-hero-scroll',
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '-=0.2',
    );
  }
});
