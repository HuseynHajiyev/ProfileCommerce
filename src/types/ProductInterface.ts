export interface ProductInterface {
    id: number;
    category: string;
    title: string;
    color: string;
    size: string;
    description: string;
    price: number;
    image: string;
    rating: {
      rate: number,
      count: number,
    }
  }
  