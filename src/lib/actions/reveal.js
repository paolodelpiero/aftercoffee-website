/**
 * Scroll-reveal Svelte action.
 *
 * Client-only (actions don't run during SSR), so prerendered HTML ships fully
 * visible. On mount we add the `.reveal` class (initial hidden state) and use an
 * IntersectionObserver to add `.is-visible` when the element scrolls into view.
 * Honours `prefers-reduced-motion` — motion-averse users see content immediately.
 *
 * Usage: <div use:reveal>…</div>  or  <div use:reveal={{ delay: 120 }}>…</div>
 *
 * @param {HTMLElement} node
 * @param {{ y?: number, delay?: number, threshold?: number, once?: boolean }} [options]
 */
export function reveal(node, options = {}) {
	const reduce =
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
	if (reduce) return;

	let { y = 18, delay = 0, threshold = 0.14, once = true } = options;

	node.style.setProperty('--reveal-y', `${y}px`);
	node.style.setProperty('--reveal-delay', `${delay}ms`);
	node.classList.add('reveal');

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					if (once) io.unobserve(node);
				} else if (!once) {
					node.classList.remove('is-visible');
				}
			}
		},
		{ threshold, rootMargin: '0px 0px -8% 0px' }
	);

	io.observe(node);

	return {
		destroy() {
			io.disconnect();
		}
	};
}
