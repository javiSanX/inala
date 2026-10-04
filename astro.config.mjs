// @ts-check

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://inala.es",
	integrations: [sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Bricolage Grotesque",
			cssVariable: "--font-bricolage",
			weights: ["200 800"],
			styles: ["normal"],
			subsets: ["latin"],
			display: "swap",
			fallbacks: ["system-ui", "sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Barlow Condensed",
			cssVariable: "--font-barlow",
			weights: [500, 600],
			styles: ["normal"],
			subsets: ["latin"],
			display: "swap",
			fallbacks: ["Arial Narrow", "sans-serif"],
		},
	],
	vite: {
		plugins: [tailwindcss(), basicSsl()],
	},
	output: "static",
});
