/// <reference types="vite/client" />

import { MessageDisplayer } from "@haleyjs/vue";
declare module '@haleyjs/vue' {
    // import type { DefineComponent } from 'vue'
    // const component: DefineComponent<{}, {}, any>
    // export default component

    export interface GlobalComponents {
        MessageDisplayer  : typeof MessageDisplayer;
    }
}

export {}