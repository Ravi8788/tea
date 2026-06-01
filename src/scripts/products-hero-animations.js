import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
	const hero = document.querySelector('.products-hero');
	if (!hero) return;

	const tl = gsap.timeline({ delay: 1.7 });

	tl.fromTo(
		'.ph-hero-label-bar',
		{ x: -48, opacity: 0 },
		{ x: 0, opacity: 1, duration: 0.75, ease: 'power3.out' }
	)
		.fromTo(
			'.ph-hero-word',
			{ y: 56, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: 'power3.out' },
			'-=0.35'
		)
		.fromTo(
			'.ph-hero-sub',
			{ opacity: 0 },
			{ opacity: 1, duration: 0.6, ease: 'power2.out' },
			'-=0.25'
		)
		.fromTo(
			'.ph-hero-body',
			{ y: 24, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
			'-=0.2'
		)
		.fromTo(
			'.ph-hero-btns',
			{ y: 16, opacity: 0, scale: 0.96 },
			{ y: 0, opacity: 1, scale: 1, duration: 0.65, ease: 'power2.out' },
			'-=0.25'
		)
		.fromTo(
			'.ph-card',
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out' },
			'-=0.4'
		);
});
