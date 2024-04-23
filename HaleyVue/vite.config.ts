import { defineConfig } from "vite";
//Install node types before calling below import
import { fileURLToPath } from "url";
// import path from "path";
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts(),
    tsconfigPaths(),
    // dts({outDir:"./dist/types"}),
  ],

  base: "./",
  resolve: {
    alias: {
      //@ infront of the actual folder name is just a preference and not mandatory.
      //Method 1 : using fileURLToPath
      "@": fileURLToPath(new URL("./src", import.meta.url)), //Source location.
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),

      //Method 2 : Using path resolve.
      "@libcomponents": resolve(__dirname, "./lib/components"),
      "@lib": resolve(__dirname, "./lib"),
    },
  },
  build: {
    // emptyOutDir: false,
    // sourcemap: true,
    copyPublicDir:true, //In case we need to copy some files from public, enable this.
    minify: true,
    lib: {
      name: "haley-vue",
      entry: resolve(__dirname, "lib/index.ts"),
      // fileName:(format) => `haley-vue.${format}.js`,
      fileName: "haley-vue",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        }
      },
    },
  },
  preview:{
    
  }
});
