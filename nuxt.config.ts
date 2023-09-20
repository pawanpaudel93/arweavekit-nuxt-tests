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
    plugins: [
      nodePolyfills({
        include: ["buffer", "crypto", "stream", "util", "vm"],
        globals: {
          process: false,
        },
      }),
    ],
    resolve: {
      alias: [
        {
          find: "ethers",
          replacement:
            "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.min.js",
        },
      ],
    },
  },
});
