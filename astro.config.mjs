import { defineConfig } from "astro/config";

import pageInsight from "astro-page-insight";

// https://astro.build/config
export default defineConfig({
  integrations: [pageInsight()]
});