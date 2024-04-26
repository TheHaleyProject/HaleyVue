import { App, Plugin } from "vue";
import "./style.css"; //Import CSS
import * as comps from "@components";

const plugin: Plugin = {
  install: (app: App, options: any) => {
    Object.entries(comps).forEach(p=>{app.component(p[0],p[1]);});
  },
};

export * from "@components"; //Individual components export
export * from "@enums"; //Export all enums
export { plugin as Haley }; //Overall plugin export
export * from "./globals";
export default plugin;