import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteMockServe } from "vite-plugin-mock";
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0"
  },
  plugins: [vue(), vueJsx(), viteMockServe(),WindiCSS()],
  resolve: {
    alias: {
      "@": resolve("src")
    }
  }
});
