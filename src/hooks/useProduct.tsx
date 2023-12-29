import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { ProductInterface } from "../models/ProductInterface";




export const useProduct = () => {
  const products = useSelector((state: RootState) => state.productsState.products);

  const findProductById = (id: number) => {
    return products.find(product => product.id === id)
  }

  const findProductByTitle = (title: string): ProductInterface | undefined => {
    return products.find(product => product.title === title)
  }

  const findProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category)
  }

  return {
    products,
    findProductById,
    findProductByTitle,
    findProductsByCategory
  }
}