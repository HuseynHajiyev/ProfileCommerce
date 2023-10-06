export interface sizesDict {
  [key: string]: number,
}

export interface ProductInterface extends ProductApiResponseInterface {
  color: string;
  sizes: sizesDict;
  totalSizeInventory: number;
}


export interface ProductApiResponseInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number,
    count: number,
  }
}

export interface SearchResutProduct {
  id: number;
  title: string;
  category: string;
  img: string;
}

export interface ProductsState {
  products: ProductInterface[];
  categories: string[];
  loading: boolean;
  error: string | null;
  log: string[];
}

export interface ProductState {
  product: ProductInterface | null;
  loading: boolean;
  error: string | null;
  log: string[];
}