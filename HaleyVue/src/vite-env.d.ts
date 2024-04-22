/// <reference types="vite/client" />

import {MessageDisplayer} from "@lib";

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
  export interface GlobalComponents {
    MessageDisplayer  : typeof MessageDisplayer; //Option 1 to import
    Displayer2 : typeof import("@haleyjs/vue")["MessageDisplayer"]; //Option 2 to import
}
}

export {};
