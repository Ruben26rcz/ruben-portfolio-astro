import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import mdx from '@astrojs/mdx'

export default defineConfig({
	site: 'https://www.rubencastillo.com',
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	image: {
		// generates srcset for markdown images in content collections
		layout: 'constrained',
	},
	integrations: [mdx()],
})
