import { defineConfig } from "vite";
//Install node types before calling below import
import { fileURLToPath } from "url";
// import path from "path";
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts(),
    tsconfigPaths(),
    // dts({outDir:"./dist/types"}),
    AutoImport({
      //Targets (file extensions)
      include: [
        /\.[tj]sx?$/, //Regex which says t or j followed by sx. //tsx, jsx, ? next to x says it can happen zero or one time js,ts
        /\.vue$/, //$ at the end says it ends with vue
      ],
      //globals (libraries)
      imports: ["vue"],
      //other settings/files/dirs to import
      dts: true, //Autoimport all the files that ends with d.ts
      //Autoimport inside vue template
      vueTemplate: true,
      eslintrc: { enabled: true },
    }),
  ],

  base: "./",

  resolve: {
    alias: {
      //Two methods available
      //Method 1 : using fireURLtoPath (keep adding other paths as needed)
      "@": fileURLToPath(new URL("./src", import.meta.url)),

      //Method 2: using path
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/@Pages"),
    },
  },

  build: {
    // emptyOutDir: false,
    sourcemap: true,
    lib: {
      name: "haley-vue",
      entry: resolve(__dirname, "src/index.ts"),
      // fileName:(format) => `haley-vue.${format}.js`,
      fileName: "haley-vue",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
