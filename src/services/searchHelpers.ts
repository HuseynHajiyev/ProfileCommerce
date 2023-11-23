import { SearchResutProductInterface } from "../models/ProductInterface";


export const findSearchProductsById = (id: number, products: SearchResutProductInterface[]): SearchResutProductInterface[] => {
  if(!products || products.length === 0) return [];
  return products.filter((product) => product.id === id);
}

export const findSearchProductsByTitle = (title: string, products: SearchResutProductInterface[]): SearchResutProductInterface[] => {
  if(!products || products.length == 0) return [];
  return products.filter((product) => product.title.toLowerCase().includes(title.toLowerCase()));
}

export const findSearchProductsByCategory = (category: string, products: SearchResutProductInterface[]): SearchResutProductInterface[] => {
  if(!products || products.length == 0) return [];
  if(category === "all") return products;
  return products.filter((product) => product.category.toLowerCase().includes(category.toLowerCase()));
}

export const findCategory = (category: string, categories: string[]): string => {
  if(!categories || categories.length === 0) return "";
  if(category === "all") return "all";
  return categories.find((cat) => cat.toLowerCase() === category.toLowerCase()) || "";
}

export const findCategories = (categories: string[], query: string): string[] => {
  if(!categories || categories.length === 0) return [];
  const categoriesSet = new Set<string>();
  categories.forEach((category) => {
    if(category.toLowerCase().includes(query.toLowerCase())) {
      categoriesSet.add(category);
    }
  });
  return Array.from(categoriesSet);
}

export const isCategory = (category: string, categories: string[]): boolean => {
  if(!categories || categories.length === 0) return false;
  if(category === "all") return true;
  return categories.includes(category);
}


export const findSearchProducts = (query: string, products: SearchResutProductInterface[]): SearchResutProductInterface[] => {
  if(!products || products.length === 0) return [];
  const productsByTitle = findSearchProductsByTitle(query, products);    
  if(productsByTitle.length > 0) return productsByTitle;
  const productsById = findSearchProductsById(parseInt(query), products);
  if(productsById.length > 0) return productsById;
  return [];
}

export const searchProductsAreEqual = (product1: SearchResutProductInterface, product2: SearchResutProductInterface): boolean => {
  if(product1.id !== product2.id) return false;
  if(product1.title !== product2.title) return false;
  return true;
}

export const filterSearchDuplicates = (products: SearchResutProductInterface[]): SearchResutProductInterface[] => {
  const filteredProducts: SearchResutProductInterface[] = [];
  products.forEach((product) => {
    if(!filteredProducts.find((filteredProduct) => !searchProductsAreEqual(product, filteredProduct))) {
      filteredProducts.push(product);
    }
  });
  return filteredProducts;
}