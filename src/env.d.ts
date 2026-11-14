interface ImportMetaEnv {
	/** GA4 measurement ID (G-XXXXXXXXXX). Analytics is skipped when it is unset. */
	readonly PUBLIC_GA_TRACKING_ID?: string;
}

interface Window {
	dataLayer?: unknown[];
	gtag?: (...args: unknown[]) => void;
}
