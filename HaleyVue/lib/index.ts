import { App, Plugin } from "vue";
import "./style.css"; //Import CSS
import * as comps from "./components";

const plugin: Plugin = {
  install: (app: App, options: any) => {
    app.component("MessageDisplayer", comps.MessageDisplayer);
  },
};

export * from "./components"; //Individual component export
export { plugin as Haley }; //Overall plugin export
export default plugin;