import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { viteMockServe } from "vite-plugin-mock";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), viteMockServe()],
  resolve: {
    alias: {
      "@": resolve("src")
    }
  }
});
