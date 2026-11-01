// One-shot reveal for figures marked [data-reveal]. Content is visible by
// default: only elements still below the fold at load are hidden, and only
// when motion is welcome, so nothing depends on this script to be readable.
const targets = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
const motionOk = window.matchMedia(
	"(prefers-reduced-motion: no-preference)",
).matches;

if (targets.length > 0 && motionOk && "IntersectionObserver" in window) {
	const fold = window.innerHeight;
	// Read every position first, then write, to avoid layout thrashing.
	const below = targets.filter(
		(element) => element.getBoundingClientRect().top > fold,
	);
	for (const element of below) element.dataset.reveal = "pending";

	// Elements reveal once they are 12% into the viewport, or as far in as
	// their data-reveal-at (a percentage) asks: one observer per distance.
	const observers = new Map<string, IntersectionObserver>();
	const observerFor = (at: string) => {
		let observer = observers.get(at);
		if (!observer) {
			observer = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (!entry.isIntersecting) continue;
						const element = entry.target as HTMLElement;
						element.dataset.reveal = "shown";
						observer?.unobserve(element);
					}
				},
				{ rootMargin: `0px 0px -${at}% 0px` },
			);
			observers.set(at, observer);
		}
		return observer;
	};
	for (const element of below) {
		observerFor(element.dataset.revealAt ?? "12").observe(element);
	}
}
