export function isNumeric(value: any): boolean {
  return /^-?\d+$/.test(value); // Can be a positive or negative number
}

export function NumbersOnly(args: any): boolean {
  if (args.charCode == null) return false;
  if (
    args.charCode > 31 &&
    (args.charCode < 48 || args.charCode > 57) &&
    args.charCode !== 46
  ) {
    args.preventDefault(); //prevent further action
  } else {
    return true;
  }
  return false;
}
