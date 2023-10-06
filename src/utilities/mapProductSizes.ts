import { sizesDict } from "../models/ProductInterface";

export const mapAlphabeticToNumericSizes = (size: string) => {
  switch(size) {
    case "XXS":
      return 22;
    case "XS":
      return 23;
    case "S":
      return 24;
    case "M":
      return 25;
    case "L":
      return 26;
    case "XL":
      return 27;
    case "XXL":
      return 28;
    case "XXXL":
      return 29;
    case "4XL":
      return 30;
    case "5XL":
      return 31;
    case "6XL":
      return 32;
    case "7XL":
      return 33;
    default:
      return 0;
  }
}

export const mapNumericToAlphabeticSizes = (size: number) => {
  switch(size) {
    case 22:
      return "XXS";
    case 23:
      return "XS";
    case 24:
      return "S";
    case 25:
      return "M";
    case 26:
      return "L";
    case 27:
      return "XL";
    case 28:
      return "XXL";
    case 29:
      return "XXXL";
    case 30:
      return "4XL";
    case 31:
      return "5XL";
    case 32:
      return "6XL";
    case 33:
      return "7XL";
    default:
      return "";
  }
}


 