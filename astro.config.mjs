// @ts-check

import { readdirSync, readFileSync } from "node:fs";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig, fontProviders } from "astro/config";

// Sitemap lastmod for blog posts: updatedDate, or else pubDate, read from each
// post's frontmatter. Other pages carry no lastmod rather than a made-up date.
const blogDir = "./src/content/blog";
/** @type {Map<string, string>} */
const postDates = new Map();
for (const file of readdirSync(blogDir).filter((name) =>
	name.endsWith(".md"),
)) {
	const text = readFileSync(`${blogDir}/${file}`, "utf8");
	/** @param {string} name */
	const field = (name) =>
		text.match(new RegExp(`^${name}:\\s*['"]?([^'"\\n]+)`, "m"))?.[1];
	const date = new Date(field("updatedDate") ?? field("pubDate") ?? "");
	if (!Number.isNaN(date.valueOf())) {
		postDates.set(`/blog/${file.replace(/\.md$/, "")}/`, date.toISOString());
	}
}

// https://astro.build/config
export default defineConfig({
	site: "https://inala.es",
	server: {
		host: true,
	},
	integrations: [
		sitemap({
			// Pages marked noindex stay out of the sitemap.
			filter: (page) => !new URL(page).pathname.startsWith("/404"),
			serialize: (item) => {
				const lastmod = postDates.get(new URL(item.url).pathname);
				return lastmod ? { ...item, lastmod } : item;
			},
		}),
	],
	// URLs that exist on main (the live site) but not on this build. In static
	// output Astro writes each one as a meta-refresh page with a canonical link;
	// vercel.json serves the same list as real 301s. Keep both in sync.
	redirects: {
		"/servicios/psicologia-parental": "/servicios/psicologia-perinatal/",
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
		// Home h1 only: Cormorant Garamond is downloaded at build time and self-hosted.
		{
			provider: fontProviders.google(),
			name: "Cormorant Garamond",
			cssVariable: "--font-cormorant",
			fallbacks: ["Georgia", "serif"],
			display: "swap",
			weights: ["400", "500"],
			styles: ["normal", "italic"],
			subsets: ["latin"],
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
