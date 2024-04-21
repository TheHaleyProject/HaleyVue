import { MessageDisplayer } from "@haleyjs/vue";
declare module '@haleyjs/vue"' {
    export interface GlobalComponents {
        MessageDisplayer  : typeof MessageDisplayer;
    }
}

export {}