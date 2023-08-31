import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      othentPublicApiId: process.env.NUXT_PUBLIC_OTHENT_API_ID,
    },
  },
  vite: {
    plugins: [nodePolyfills()],
  },
});
