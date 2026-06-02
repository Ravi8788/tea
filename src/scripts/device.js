/** Shared breakpoints for mobile-first behaviour (Hostinger / real phones). */
export function isMobileViewport() {
	return window.matchMedia('(max-width: 767px)').matches;
}

export function isTouchDevice() {
	return window.matchMedia('(pointer: coarse)').matches;
}

export function prefersReducedMotion() {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Use native scroll + lighter animations on phones and tablets. */
export function isMobileExperience() {
	return isMobileViewport() || isTouchDevice();
}
