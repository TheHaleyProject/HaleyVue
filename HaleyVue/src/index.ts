import { App, Plugin, createApp } from "vue";
import * as comps from "@/components";
// import TApp from "./App.vue";
const plugin: Plugin = {
  install: (app: App, options: any) => {
    app.component("MessageDisplayer", comps.MessageDisplayer);
  },
};
export * from "@/components";
export { plugin as Haley };
export default plugin;