import { ProductInterface, ProductApiResponseInterface, sizesDict, SearchResutProductInterface } from "../models/ProductInterface";

const setRandomSizes = (): sizesDict => {
  const minSize = 22;
  const maxSize = 33;
  const minQuantity = 0;
  const maxQuantity = 14;
  const sizes: sizesDict = {};

  for(let size = minSize; size <= maxSize; size++) {
    sizes[size.toString()] = Math.floor(Math.random() * (maxQuantity - minQuantity + 1)) + minQuantity;
  }

  return sizes;
};

export const pickRandomAvailableSize = (sizes: sizesDict | undefined): string => {
  if(!sizes) return '0';
  const availableSizes = Object.keys(sizes).filter((size) => sizes[size] > 0);
  if(availableSizes.length === 0) return '0';
  const random = Math.floor(Math.random() * availableSizes.length);
  const ret = parseInt(availableSizes[random])
  if(isNumeric(ret.toString())) {
    return ret.toString();
  }
  return '0';
}

const isNumeric = (str: string): boolean => {
  return /^[+-]?\d+(\.\d+)?$/.test(str);
}

export const processProductResponse = (productApi: ProductApiResponseInterface): ProductInterface => {
  const colors = ["Red", "Blue", "Green", "Black", "White"];
  const sizes = setRandomSizes();
  const product: ProductInterface = {
    id: productApi.id,
    category: productApi.category,
    title: productApi.title,
    color: colors[Math.floor(Math.random() * colors.length)],
    sizes: sizes,
    description: productApi.description,
    price: productApi.price,
    image: productApi.image,
    rating: productApi.rating,
    totalSizeInventory: getTotaSizeInventory(sizes),
  };
  return product;
};

export const serializeProductsForSearch = (products: ProductApiResponseInterface[] | ProductInterface[]): SearchResutProductInterface[] => {
  const searchableProducts: SearchResutProductInterface[] = [];
  products.forEach((product) => {
    const resultProduct: SearchResutProductInterface = {
      id: product.id,
      title: product.title,
      category: product.category,
      img: product.image,
    };
    searchableProducts.push(resultProduct);
  });
  return searchableProducts;
}

export const getProductCategories = (products: ProductInterface[] | ProductApiResponseInterface[] | SearchResutProductInterface[]): string[] => {
  const categories: string[] = [];
  products.forEach((product) => {
    if(!categories.includes(product.category)) {
      categories.push(product.category.toLowerCase());
    }
  });
  return categories;
}

export const replaceDuplicateProduct = (products: ProductInterface[], product: ProductInterface): ProductInterface[] => {
  const index = products.findIndex((product) => product.id === product.id);
  if(index !== -1) {
    products.splice(index, 1, product);
  }
  return products;
}

export const getTotaSizeInventory = (sizes: sizesDict): number => {
  let total = 0;
  Object.keys(sizes).forEach((size) => {
    total += sizes[size];
  });
  return total;
}