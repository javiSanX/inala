interface ImportMetaEnv {
	/** GA4 measurement ID (G-XXXXXXXXXX). Analytics is skipped when it is unset. */
	readonly PUBLIC_GA_TRACKING_ID?: string;
	/** Password of the hola@inala.es SMTP mailbox (server only, used by the contact form action). */
	readonly SMTP_PASSWORD?: string;
}

interface Window {
	dataLayer?: unknown[];
	gtag?: (...args: unknown[]) => void;
}
