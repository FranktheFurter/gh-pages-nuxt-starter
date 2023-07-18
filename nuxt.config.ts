export default defineNuxtConfig({
  devtools: true,
  css: ["@/assets/css/main.css"],
  modules: ["@unocss/nuxt", "@vueuse/nuxt", "@nuxt/image"],
  app: {
    baseURL: "/gh-pages-nuxt-starter/",
  },
  ssr: true,
})
