import { defineCollection } from 'astro:content'
import { file, glob } from 'astro/loaders'
import { z } from 'astro/zod'

const works = defineCollection({
	loader: glob({ pattern: '*.mdx', base: './src/content/works' }),
	schema: ({ image }) =>
		z.object({
			order: z.number(),
			title: z.string(),
			description: z.string(),
			cover: image(),
			coverAlt: z.string(),
			appIcon: z.string(),
			publishDate: z.coerce.date(),
			duration: z.string(),
			chips: z.array(z.string()),
			tools: z.array(z.string()),
			type: z.string(),
			draft: z.boolean().default(false),
		}),
})

const repos = defineCollection({
	loader: file('./src/content/repos.json'),
	schema: ({ image }) =>
		z.object({
			order: z.number(),
			title: z.string(),
			description: z.string(),
			cover: image(),
			coverAlt: z.string(),
			publishDate: z.coerce.date(),
			technologies: z.object({
				front: z.array(z.string()),
				back: z.array(z.string()),
				database: z.array(z.string()),
				testing: z.array(z.string()),
			}),
			links: z.array(
				z.object({
					name: z.string(),
					url: z.url(),
					icon: z.enum(['Globe', 'GitHub']),
				}),
			),
		}),
})

export const collections = { works, repos }
