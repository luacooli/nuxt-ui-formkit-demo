// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@formkit/nuxt'],

  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
      },
    },
  },

  // formkit: {
  //   configFile: './formkit.config.ts',
  // },

  compatibilityDate: '2024-08-28',
})
