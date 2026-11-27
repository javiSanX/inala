// Background video of PageHero: plays once, from --hero-video-start while the home
// intro runs (global.css), otherwise right away. Reduced motion, Save-Data and 2G
// keep the poster, and the video (preload="none") is never fetched.

type Connection = { saveData?: boolean; effectiveType?: string };

const connection = (navigator as Navigator & { connection?: Connection })
	.connection;
const keepPoster =
	matchMedia("(prefers-reduced-motion: reduce)").matches ||
	connection?.saveData ||
	/2g/.test(connection?.effectiveType ?? "");

const value = getComputedStyle(document.documentElement)
	.getPropertyValue("--hero-video-start")
	.trim();
// The minifier may rewrite 2300ms as 2.3s.
const start = Number.parseFloat(value) * (value.endsWith("ms") ? 1 : 1000) || 0;

if (!keepPoster) {
	for (const video of document.querySelectorAll<HTMLVideoElement>(
		"[data-hero-video]",
	)) {
		video.preload = "auto";
		video.load();
		const play = () => video.play().catch(() => {});
		setTimeout(
			() => {
				if (video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) play();
				else video.addEventListener("canplaythrough", play, { once: true });
			},
			Math.max(0, start - performance.now()),
		);
	}
}
