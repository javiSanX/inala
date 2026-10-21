// Entrance for grids marked [data-bento]: the cards start scrambled and glide
// into place once the scroll reaches the lower half of the grid, a little past
// its middle. When the grid leaves the viewport they scramble again, so the
// entrance plays on every pass. Content is visible by default: only when
// motion is welcome does this script scramble anything, so nothing depends on
// it to be readable.
const grids = [...document.querySelectorAll<HTMLElement>("[data-bento]")];
const motionOk = window.matchMedia(
	"(prefers-reduced-motion: no-preference)",
).matches;

if (grids.length > 0 && motionOk && "IntersectionObserver" in window) {
	const fold = window.innerHeight;
	const below = grids.filter((grid) => grid.getBoundingClientRect().top > fold);
	for (const grid of below) grid.dataset.bento = "pending";

	// A marker a little below the grid's midpoint, so the trigger works for any grid height.
	const markerObserver = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const grid = (entry.target as HTMLElement).parentElement;
				if (entry.isIntersecting && grid?.dataset.bento === "pending") {
					grid.dataset.bento = "shown";
				}
			}
		},
		{ rootMargin: "0px 0px -10% 0px" },
	);

	// Fully out of the viewport: scramble again for the next pass.
	const gridObserver = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			const grid = entry.target as HTMLElement;
			if (!entry.isIntersecting && grid.dataset.bento === "shown") {
				grid.dataset.bento = "pending";
			}
		}
	});

	for (const grid of grids) {
		const marker = document.createElement("div");
		marker.className = "pointer-events-none absolute inset-x-0 top-[55%] h-px";
		marker.setAttribute("aria-hidden", "true");
		grid.append(marker);
		markerObserver.observe(marker);
		gridObserver.observe(grid);
	}
}

export {};
