
import {Badge, MessageDisplayer} from "./components";

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Badger3 :typeof Badge; //Option 1 to import
    Displayer2: typeof MessageDisplayer;
}
}