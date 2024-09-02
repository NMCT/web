// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  experimental: {
    componentIslands: true,
    viewTransition: true,
  },

  typescript: {
    strict: true,
  },

  modules: ['@nuxt/eslint'],

  eslint: {
    config: {
      typescript: true,
    },

    checker: {
      fix: true,
    },
  },
})
