const backend = {
  API_HOST: process.env.BACKEND_API_HOST || 'http://localhost:3001',
  API_KEY: process.env.BACKEND_API_KEY || 'default-key-for-local'
};
console.log('Backend config',backend);
/** @type {import('astro').AstroUserConfig} */
export default {
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  // pages: './src/pages', // Path to Astro components, pages, and data
  // dist: './dist',       // When running `astro build`, path to final static output
  // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  buildOptions: {
    site: 'https://t2badminton.com',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true,         // Generate sitemap (set to "false" to disable)
  },
  devOptions: {
    // hostname: 'localhost',  // The hostname to run the dev server on.
    // port: 3000,             // The port to run the dev server on.
    // tailwindConfig: '',     // Path to tailwind.config.js if used, e.g. './tailwind.config.js'
  },
  renderers: [
    "@astrojs/renderer-solid"
  ],
  vite: {
    server: {
      proxy: {
        '/api': {
          target: backend.API_HOST,
          changeOrigin: true,
          secure: false,
          ws: false,
          followRedirects: false,
          rewrite: (path) => {
            return path
              .replace(/^\/api/, '')
              .concat('/')
              .concat(`?key=${backend.API_KEY}`)
          }
        }
      }
    }
  },
}
