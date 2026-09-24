import { defineConfig, fontProviders } from 'astro/config'
import vercel from '@astrojs/vercel'
import mdx from '@astrojs/mdx'

export default defineConfig({
	site: 'https://www.rubencastillo.com',
	redirects: {
		// old resume URLs may still be shared (e.g. LinkedIn)
		'/documents/cv-ruben-castillo%20ux-ui-2024.pdf': '/cv.pdf',
	},
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	image: {
		// generates srcset for markdown images in content collections
		layout: 'constrained',
	},
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Geist Mono',
			cssVariable: '--font-geist-mono',
			weights: ['100 900'],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['monospace'],
		},
		{
			provider: fontProviders.local(),
			name: 'TexasLED',
			cssVariable: '--font-led',
			fallbacks: ['monospace'],
			options: {
				variants: [{ src: ['./src/assets/fonts/TexasLED.woff2'], weight: 400, style: 'normal' }],
			},
		},
		{
			provider: fontProviders.fontsource(),
			name: 'Inter',
			cssVariable: '--font-inter',
			weights: [400, 700],
			styles: ['normal'],
			subsets: ['latin'],
		},
	],
	integrations: [mdx()],
})
