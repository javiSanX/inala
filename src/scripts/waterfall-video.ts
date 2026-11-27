// Looping waterfall of the home services section: plays only while on screen.
// Reduced motion, Save-Data and 2G keep the poster, and the video
// (preload="none") is never fetched.

// A module, so its top-level names don't clash with hero-video.ts.
export {};

type Connection = { saveData?: boolean; effectiveType?: string };

const connection = (navigator as Navigator & { connection?: Connection })
	.connection;
const keepPoster =
	matchMedia("(prefers-reduced-motion: reduce)").matches ||
	connection?.saveData ||
	/2g/.test(connection?.effectiveType ?? "");

if (!keepPoster) {
	const observer = new IntersectionObserver((entries) => {
		for (const { target, isIntersecting } of entries) {
			const video = target as HTMLVideoElement;
			if (isIntersecting) {
				video.preload = "auto";
				video.play().catch(() => {});
			} else {
				video.pause();
			}
		}
	});
	for (const video of document.querySelectorAll<HTMLVideoElement>(
		"[data-waterfall-video]",
	)) {
		observer.observe(video);
	}
}
