import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { isMobileExperience, prefersReducedMotion } from './device.js';

gsap.registerPlugin(ScrollTrigger);

const useLenis = !isMobileExperience() && !prefersReducedMotion();

if (useLenis) {
	const lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smoothWheel: true,
		touchMultiplier: 1.5,
	});

	lenis.on('scroll', ScrollTrigger.update);

	gsap.ticker.add((time) => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);

	window.__lenis = lenis;
} else {
	document.documentElement.classList.add('native-scroll');
	ScrollTrigger.config({ limitCallbacks: true });

	const refresh = () => ScrollTrigger.refresh();
	window.addEventListener('load', refresh, { once: true });
	window.addEventListener('orientationchange', () => setTimeout(refresh, 250));
	window.addEventListener('resize', () => {
		clearTimeout(window.__stRefreshTimer);
		window.__stRefreshTimer = setTimeout(refresh, 200);
	});
}
