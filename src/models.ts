export class ToolTip implements IToolTip {
  title = "Menu";
  top = 0.0;
  show = false;
}

export class SelectedMenu {
  main: string = ""; //When we directly assign a value.
  submenu!: string; //When we promise that this won't be empty
}

export class ApiFetchStatus implements IApiFetchStatus {

  is_loaded = false;
  is_sucess = false;
  loading_msg = "Fetching data from server.. Please wait..";
  error_msg = "Unable to fetch data.. Try later or contact admin..";
  // async setAllProgress(status: boolean):Promise<boolean> {
  //   this.is_loaded = status;
  //   this.is_sucess = status;
  //   return true;
  // };
  // public setProgress(success: boolean, loaded: boolean):void{
  //   this.is_loaded = loaded;
  //   this.is_sucess = success;
  // };
}
