import { App, Plugin, createApp } from "vue";
import * as comps from "@/components";
import TApp from "./App.vue";
export default {
    install:(app:App,options:any) =>{
        app.component("MessageDisplayer",comps.MessageDisplayer);
    }
} as Plugin;

const app = createApp(TApp);

app
.component("MessageDisplayer", comps.MessageDisplayer)
.mount("#app");