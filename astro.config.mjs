import { defineConfig } from 'astro/config'
import pageInsight from 'astro-page-insight'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
	output: 'server',
	adapter: vercel({
		webAnalytics: { enabled: true },
		imageService: true,
	}),
	integrations: [pageInsight()],
})
