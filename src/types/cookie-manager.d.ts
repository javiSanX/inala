// Extend Window interface for global properties
declare global {
   interface Window {
      cookieManager?: CookieManager;
      revokeCookieConsent?: () => void;
      gtag?: (command: string, target: string, config?: any) => void;
      dataLayer?: any[];
   }
}

// Cookie consent interface
interface CookieConsent {
   technical: boolean;
   analytics: boolean;
   marketing: boolean;
   timestamp: number;
}

// Extend HTMLElement for form inputs
interface HTMLInputElement extends HTMLElement {
   checked: boolean;
}

export {};
