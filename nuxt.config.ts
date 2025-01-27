// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Compatibility settings
  compatibilityDate: '2024-11-01',

  // Enable development tools
  devtools: { enabled: true },

  // Global meta configuration
  app: {
    head: {
      title: 'Default Title',
      meta: [
        { name: 'description', content: 'Default description for Cyde.' },
      ],
    },
  },
  // Add middleware globally for setting meta dynamically

  // Include external CSS (e.g., from `assets/`)
  css: [
    '~/assets/css/colors.css',
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
  ],

  // Plugins to initialize custom logic
  plugins: [
    '~/plugins/functions.js',
    '~/plugins/source.js',
  ],

  // Modules (if needed, e.g., for SEO or state management)
  modules: [
    '@pinia/nuxt', // For Pinia state management // If you need Axios for API requests
  ],

  // Runtime configuration (add environment variables here)
  runtimeConfig: {
    public: {
      baseUrl: 'https://cyde.xyz',
    },
  },

  // Build settings
  build: {
    transpile: ['@headlessui/vue'], // Add libraries if needed
  },
});
