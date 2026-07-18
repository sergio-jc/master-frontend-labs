import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  runtimeConfig: {
    public: {
      apiUrl: "http://localhost:3001",
      imageUrl: "http://localhost:3001",
    },
  },

  vite: {
    plugins: [tailwindcss() as any],
  },

  modules: ["@nuxt/image"],

  image: {
    domains: ["localhost:3001"],
  },
});