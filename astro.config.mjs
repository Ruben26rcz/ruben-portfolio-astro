import { defineConfig } from 'astro/config'

import pageInsight from 'astro-page-insight'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	integrations: [pageInsight()],
})
