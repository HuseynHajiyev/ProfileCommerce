import { ProductInterface } from "../models/ProductInterface";


export const getRandomItems = (arr: ProductInterface[], num: number) => {
  const result = new Array(num);
  let len = arr.length;
  const taken = new Array(len);
  if (num > len)
      throw new RangeError("getRandom: more elements taken than available");

  while (num--) {
      const x = Math.floor(Math.random() * len);
      result[num] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}