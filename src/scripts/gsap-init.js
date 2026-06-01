import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { markAppReady, onReady } from './ready.js';

gsap.registerPlugin(ScrollTrigger);

function initScrollAnimations() {
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  document.querySelectorAll('.stagger-group').forEach((group) => {
    const children = group.querySelectorAll('.stagger-child');
    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: group,
        start: 'top 85%',
      },
    });
  });

  document.querySelectorAll('.parallax-bg').forEach((el) => {
    gsap.to(el, {
      y: '25%',
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  document.querySelectorAll('.stat-number').forEach((el) => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 2.5,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.ceil(obj.val) + suffix;
          },
        });
      },
    });
  });

  const journeyLine = document.querySelector('.journey-line');
  if (journeyLine) {
    gsap.fromTo(
      journeyLine,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1,
        duration: 2,
        ease: 'none',
        scrollTrigger: {
          trigger: '.journey-section',
          start: 'top 65%',
          end: 'bottom 65%',
          scrub: 1,
        },
      },
    );
  }
}

onReady(initScrollAnimations);

// === LOADING SCREEN ===
const loadingScreen = document.getElementById('loading-screen');
const loadingBar = document.getElementById('loading-bar-fill');

if (loadingBar) {
  setTimeout(() => {
    loadingBar.style.width = '100%';
  }, 100);

  setTimeout(() => {
    loadingScreen?.classList.add('hidden');
    setTimeout(() => {
      if (loadingScreen) loadingScreen.style.display = 'none';
      markAppReady();
      ScrollTrigger.refresh();
    }, 650);
  }, 1600);
} else {
  markAppReady();
  window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
}

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
