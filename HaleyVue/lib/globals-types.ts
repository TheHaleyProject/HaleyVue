export {}; 

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // Badge :typeof Badge; //Option 1 to import
    DialogBox: (typeof import("@components"))["DialogBox"];
    Badge: (typeof import("@components"))["Badge"];
}
}