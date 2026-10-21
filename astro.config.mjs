// @ts-check

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://inala.es",
	integrations: [
		sitemap({
			// Pages marked noindex stay out of the sitemap.
			filter: (page) => !new URL(page).pathname.startsWith("/404"),
		}),
	],
	// URLs that exist on main (the live site) but not on this build. In static
	// output Astro writes each one as a meta-refresh page with a canonical link.
	redirects: {
		"/servicios/psicologia-perinatal": "/servicios/psicologia-parental/",
		"/blog/2": "/blog/",
		"/blog/author": "/blog/",
		"/blog/author/maria-sanchez": "/blog/",
		"/blog/author/Maria Sanchez": "/blog/",
		"/blog/El_coraje_de_seguir_adelante": "/blog/el-coraje-de-seguir-adelante/",
		"/blog/Guia_de_supervivencia_navideña":
			"/blog/guia-de-supervivencia-navidena/",
		"/blog/como_superar_la_andiedad":
			"/blog/como-superar-la-ansiedad-diagnostico/",
		"/blog/navegar_en_la_nueva_realidad": "/blog/navegar-en-la-nueva-realidad/",
	},
	// Self-hosted faces (Fontshare, ITF Free Font License): Gambetta for headings,
	// Synonym for text. Files are served unmodified, as the licence requires.
	fonts: [
		{
			provider: fontProviders.local(),
			name: "Gambetta",
			cssVariable: "--font-gambetta",
			fallbacks: ["Georgia", "serif"],
			display: "swap",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/Gambetta-Variable.woff2"],
						weight: "300 700",
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/Gambetta-VariableItalic.woff2"],
						weight: "300 700",
						style: "italic",
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: "Synonym",
			cssVariable: "--font-synonym",
			fallbacks: ["system-ui", "sans-serif"],
			display: "swap",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/Synonym-Variable.woff2"],
						weight: "200 700",
						style: "normal",
					},
				],
			},
		},
	],
	vite: {
		plugins: [tailwindcss(), basicSsl()],
	},
	output: "static",
});
