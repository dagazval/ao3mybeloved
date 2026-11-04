import { defineConfig } from 'astro/config';

export default defineConfig({
  // 1. Tell Astro the exact live subdomain URL
  site: 'http://ao3mybeloved.nomikkh.net',

  // 2. Ensures all links and builds generate clean directory URLs with slashes
  trailingSlash: 'always',

  // 3. Builds pages as /chapters/index.html cleanly
  build: {
    format: 'directory'
  }
});