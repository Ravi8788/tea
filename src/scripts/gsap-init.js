import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { isMobileExperience, prefersReducedMotion } from './device.js';
import { markAppReady, onReady } from './ready.js';

gsap.registerPlugin(ScrollTrigger);

function showStaticContent() {
	document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
		gsap.set(el, { opacity: 1, x: 0, y: 0, clearProps: 'transform' });
	});
	document.querySelectorAll('.stagger-child').forEach((el) => {
		gsap.set(el, { opacity: 1, y: 0, clearProps: 'transform' });
	});
	document.querySelectorAll('.home-hero-brand, .home-hero-swiper, .home-hero-video-wrap').forEach((el) => {
		gsap.set(el, { opacity: 1, y: 0, clearProps: 'transform' });
	});
}

function initScrollAnimations() {
	const mobile = isMobileExperience();
	const yReveal = mobile ? 24 : 40;
	const xReveal = mobile ? 20 : 40;
	const duration = mobile ? 0.65 : 0.9;
	const start = mobile ? 'top 92%' : 'top 88%';

	document.querySelectorAll('.reveal').forEach((el) => {
		gsap.fromTo(
			el,
			{ opacity: 0, y: yReveal },
			{
				opacity: 1,
				y: 0,
				duration,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: el,
					start,
					toggleActions: 'play none none none',
				},
			},
		);
	});

	document.querySelectorAll('.reveal-left').forEach((el) => {
		gsap.fromTo(
			el,
			{ opacity: 0, x: -xReveal },
			{
				opacity: 1,
				x: 0,
				duration,
				ease: 'power2.out',
				scrollTrigger: { trigger: el, start, toggleActions: 'play none none none' },
			},
		);
	});

	document.querySelectorAll('.reveal-right').forEach((el) => {
		gsap.fromTo(
			el,
			{ opacity: 0, x: xReveal },
			{
				opacity: 1,
				x: 0,
				duration,
				ease: 'power2.out',
				scrollTrigger: { trigger: el, start, toggleActions: 'play none none none' },
			},
		);
	});

	document.querySelectorAll('.stagger-group').forEach((group) => {
		const children = group.querySelectorAll('.stagger-child');
		gsap.fromTo(
			children,
			{ opacity: 0, y: mobile ? 16 : 28 },
			{
				opacity: 1,
				y: 0,
				duration: mobile ? 0.55 : 0.8,
				stagger: mobile ? 0.08 : 0.12,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: group,
					start: mobile ? 'top 90%' : 'top 85%',
				},
			},
		);
	});

	if (!mobile) {
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
					duration: mobile ? 1.5 : 2.5,
					ease: 'power2.out',
					onUpdate: () => {
						el.textContent = Math.ceil(obj.val) + suffix;
					},
				});
			},
		});
	});
}

function finishLoading() {
	const loadingScreen = document.getElementById('loading-screen');
	loadingScreen?.classList.add('hidden');
	setTimeout(() => {
		if (loadingScreen) loadingScreen.style.display = 'none';
		markAppReady();
		ScrollTrigger.refresh();
	}, prefersReducedMotion() ? 0 : 500);
}

function forceDismissLoading() {
	const loadingScreen = document.getElementById('loading-screen');
	if (loadingScreen) {
		loadingScreen.classList.add('hidden');
		loadingScreen.style.display = 'none';
	}
	if (document.body.dataset.appReady !== 'true') {
		showStaticContent();
		markAppReady();
	}
	ScrollTrigger.refresh();
}

onReady(() => {
	/* Safety: never block the page behind the loading overlay (common on mobile) */
	setTimeout(forceDismissLoading, 2800);

	if (prefersReducedMotion()) {
		showStaticContent();
		markAppReady();
		forceDismissLoading();
		return;
	}

	try {
		initScrollAnimations();
	} catch (err) {
		console.warn('Scroll animations skipped:', err);
		showStaticContent();
	}

	const loadingBar = document.getElementById('loading-bar-fill');
	const mobile = isMobileExperience();
	const barFillMs = mobile ? 700 : 1400;
	const hideMs = mobile ? 800 : 1600;

	if (loadingBar) {
		loadingBar.style.transition = `width ${barFillMs}ms ease`;
		setTimeout(() => {
			loadingBar.style.width = '100%';
		}, 80);
		setTimeout(finishLoading, hideMs);
	} else {
		markAppReady();
		forceDismissLoading();
	}
});

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
