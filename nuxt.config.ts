// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
  },
  experimental: {
    componentIslands: true,
    typedPages: true,
    viewTransition: true,
  },
  runtimeConfig: {
    public: {
      mapboxToken: process.env.NUXT_MAPBOX_TOKEN,
    },
  },

  css: ['@unocss/reset/tailwind.css'],

  typescript: {
    strict: true,
    typeCheck: true,
  },

  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@nuxt/fonts',
    '@nuxt/content',
    'nuxt-lucide-icons',
    '@vueuse/nuxt',
  ],

  eslint: {
    config: {
      typescript: true,
    },

    checker: {
      fix: true,
    },
  },
})
