// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,
  },

  experimental: {
    componentIslands: true,
    viewTransition: true,
  },

  css: ['@unocss/reset/tailwind.css'],

  typescript: {
    strict: true,
  },

  modules: ['@nuxt/eslint', '@unocss/nuxt', '@nuxt/fonts', '@nuxt/content'],

  eslint: {
    config: {
      typescript: true,
    },

    checker: {
      fix: true,
    },
  },

  fonts: {
    google: {
      families: [
        'Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
      ],
    },
  },
})
