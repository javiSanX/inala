import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// File names are the post URLs (/blog/<file-name>), kept as on main.
const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			/** Shorter title for search results only (60 characters or fewer); the h1 keeps `title`. */
			seoTitle: z.string().max(60).optional(),
			subtitle: z.string().optional(),
			description: z.string(),
			pubDate: z.coerce.date(),
			/** Set when a post is revised; feeds dateModified and the sitemap lastmod. */
			updatedDate: z.coerce.date().optional(),
			author: z.string(),
			image: image().optional(),
			/** Description of `image` for the post page; leave out only if it is purely decorative. */
			imageAlt: z.string().optional(),
			/** Service pages linked at the end of the post (hrefs from src/data/site.ts). */
			services: z.array(z.string()).default([]),
			/** Posts on the same topic, linked at the end so they don't compete blindly. */
			related: z.array(reference("blog")).default([]),
		}),
});

export const collections = { blog };
