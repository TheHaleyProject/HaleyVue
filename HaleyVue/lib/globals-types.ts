export {}; 

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // Badge :typeof Badge; //Option 1 to import
    DialogBox: (typeof import("./components"))["DialogBox"];
    ConfirmBox: (typeof import("./components"))["ConfirmBox"];
    SvgIcon: (typeof import("./components"))["SvgIcon"];
    Pagination: (typeof import("./components"))["Pagination"];
    AnimatedLoader:(typeof import ("./components"))["AnimatedLoader"];
    ComboBox:(typeof import("./components"))["ComboBox"];
}
}