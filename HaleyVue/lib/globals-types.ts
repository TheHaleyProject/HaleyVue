export {}; 

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // Badge :typeof Badge; //Option 1 to import
    DialogBox: (typeof import("./components"))["DialogBox"];
    ConfirmBox: (typeof import("./components"))["ConfirmBox"];
    Badge: (typeof import("./components"))["Badge"];
    SvgIcon: (typeof import("./components"))["SvgIcon"];
    Pagination: (typeof import("./components"))["Pagination"];
}
}