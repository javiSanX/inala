import { defineCollection } from "astro:content";
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
		}),
});

export const collections = { blog };
