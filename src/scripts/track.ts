// Contact events for Google Tag Manager. Each click on a contact link pushes a
// named event to the dataLayer; GTM decides what to send, and Consent Mode
// keeps Analytics cookieless until the visitor accepts. No personal data and
// no service choice are pushed: only which channel was used.
const channels: [test: (href: string) => boolean, event: string][] = [
	[(href) => href.startsWith("https://wa.me/"), "whatsapp_click"],
	[(href) => href.startsWith("tel:"), "phone_click"],
	[(href) => href.startsWith("mailto:"), "email_click"],
	[(href) => href.startsWith("https://maps.google.com/"), "directions_click"],
];

export function track(event: string) {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({ event });
}

document.addEventListener("click", (event) => {
	const link = (event.target as Element).closest<HTMLAnchorElement>("a[href]");
	if (!link) return;
	const href = link.getAttribute("href") ?? "";
	const match = channels.find(([test]) => test(href));
	if (match) track(match[1]);
});
