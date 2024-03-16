import { defineCollection, z } from 'astro:content'

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			publishDate: z.coerce.date(),
			title: z.string(),
			description: z.string(),
			cover: z.string(),
			cover_alt: z.string().optional(),
			chips: z.array(z.string()),
		}),
	}),
}
