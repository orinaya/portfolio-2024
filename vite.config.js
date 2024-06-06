import {fileURLToPath, URL} from "node:url"

import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "vue-easy-lightbox$": "vue-easy-lightbox/dist/external-css/vue-easy-lightbox.esm.min.js",
    },
  },
})
