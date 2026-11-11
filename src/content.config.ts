import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// File names are the post URLs (/blog/<file-name>), kept as on main.
const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string().optional(),
			description: z.string(),
			pubDate: z.coerce.date(),
			author: z.string(),
			image: image().optional(),
			/** Service pages linked at the end of the post (hrefs from src/data/site.ts). */
			services: z.array(z.string()).default([]),
			/** Posts on the same topic, linked at the end so they don't compete blindly. */
			related: z.array(reference("blog")).default([]),
		}),
});

export const collections = { blog };
