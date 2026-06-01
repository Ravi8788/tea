import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

document.addEventListener('DOMContentLoaded', () => {
	if (!document.querySelector('.products-page')) return;

	// §4 — icon circles scale in with stagger
	document.querySelectorAll('.trust-cell').forEach((cell, i) => {
		const circle = cell.querySelector('.trust-icon-circle');
		if (!circle) return;

		gsap.fromTo(
			circle,
			{ scale: 0.8, opacity: 0 },
			{
				scale: 1,
				opacity: 1,
				duration: 0.55,
				delay: i * 0.08,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: cell,
					start: 'top 88%',
					toggleActions: 'play none none none',
				},
			}
		);
	});

	// §6 — benefits tighter stagger
	document.querySelectorAll('.benefits-stagger-group').forEach((group) => {
		const children = group.querySelectorAll('.benefit-card-v2');
		gsap.fromTo(
			children,
			{ opacity: 0, y: 28 },
			{
				opacity: 1,
				y: 0,
				duration: 0.65,
				stagger: 0.06,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: group,
					start: 'top 85%',
					toggleActions: 'play none none none',
				},
			}
		);
	});

	// §7 — connecting lines
	const prepLineH = document.querySelector('.prep-line-horizontal');
	if (prepLineH) {
		gsap.fromTo(
			prepLineH,
			{ scaleX: 0 },
			{
				scaleX: 1,
				ease: 'none',
				scrollTrigger: {
					trigger: '.prep-section',
					start: 'top 70%',
					end: 'top 35%',
					scrub: 1,
				},
			}
		);
	}

	const prepLineV = document.querySelector('.prep-line-vertical');
	if (prepLineV) {
		gsap.fromTo(
			prepLineV,
			{ scaleY: 0 },
			{
				scaleY: 1,
				ease: 'none',
				scrollTrigger: {
					trigger: '.prep-section',
					start: 'top 75%',
					end: 'bottom 45%',
					scrub: 1,
				},
			}
		);
	}

	// §7 — step circles stagger
	document.querySelectorAll('.prep-step-item').forEach((step, i) => {
		gsap.fromTo(
			step,
			{ opacity: 0, scale: 0.85 },
			{
				opacity: 1,
				scale: 1,
				duration: 0.65,
				delay: i * 0.25,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.prep-steps',
					start: 'top 82%',
					toggleActions: 'play none none none',
				},
			}
		);
	});

	// §9 — dealer card gold glow on entry
	const dealerCard = document.querySelector('.dealer-partner-card-v2');
	if (dealerCard) {
		gsap.fromTo(
			dealerCard,
			{ boxShadow: '0 0 0 rgba(201,162,39,0)' },
			{
				boxShadow: '0 0 40px rgba(201,162,39,0.28)',
				duration: 1.1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: dealerCard,
					start: 'top 85%',
					toggleActions: 'play none none none',
				},
			}
		);
	}
});
