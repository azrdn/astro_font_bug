import cloudflare from '@astrojs/cloudflare';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  adapter: cloudflare(),
  fonts: [{
    provider: fontProviders.google(),
    name: "Inter",
    cssVariable: "--font-inter",
  }],
});
