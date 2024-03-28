//could also try something like type DialogLoadAnimation = "Rotate" | "Zoom" | "FromTop"...

export enum DialogLoadAnimation {
  Rotate =0,
  FromBottom =1,
  FromRight =2,
  FromTop =3,
  FromLeft =4,
  Zoom =5,
}

export enum WizardStep{
  InActive =0,
  Active =1,
  Complete =2,
  Skipped = 3
}

export enum LoadingAnimation{
  SimpleSpinner,
  DoubleRectangleSpinner,
  RotatingBalls,
}

export enum HTTPMethod{
  GET,
  POST,
  PUT,
  DELETE
}