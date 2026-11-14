// Google connectors, carried over from main.
// - Site verification: Google Search Console (meta tag in Layout).
// - Tag Manager: always loaded; Consent Mode starts denied until the visitor chooses.
// - Analytics (GA4): only when PUBLIC_GA_TRACKING_ID is set in the environment.
export const googleSiteVerification =
	"tPXeMdX0nIDCBwsNwGIKYV56PGlxsBqEMzj2aU3zFXg";
export const googleTagManagerID = "GTM-W39Z2VCV";
export const googleAnalyticsMeasurementID: string | undefined = import.meta.env
	.PUBLIC_GA_TRACKING_ID;

/** Same cookie name as main, so consent already given on the live site carries over. */
export const consentCookieName = "inala_cookie_consent";
