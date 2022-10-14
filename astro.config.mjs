import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";


import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  markdown: {
    drafts: true,
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: ayuMirage,
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ["javascript", "bash"],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
