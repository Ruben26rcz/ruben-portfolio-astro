import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'

export default defineConfig({
	site: 'https://www.rubencastillo.com',
	adapter: vercel({
		webAnalytics: { enabled: true },
		imageService: true,
	}),
})
