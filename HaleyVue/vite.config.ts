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
      "@": fileURLToPath(new URL("./lib", import.meta.url)), //Source location.

      //Method 2 : Using path resolve.
      "@components": resolve(__dirname, "lib/components"),
      "@enums":resolve(__dirname,"lib/enums"),
      "@functions":resolve(__dirname,"lib/functions")
    },
  },
  build: {
    // emptyOutDir: false,
    // sourcemap: true,
    copyPublicDir:true, //In case we need to copy some files from public, enable this.
    minify: true,
    lib: {
      name: "HaleyVue",
      entry: resolve(__dirname, "lib/index.ts"),
      // fileName:(format) => `haley-vue.${format}.js`,
      fileName: "haleyvue",
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
