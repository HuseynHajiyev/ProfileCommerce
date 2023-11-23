import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ProductInterface } from "../models/ProductInterface";
import { addTempSizeSelection, addToShoppingBag, decreaseQuantity, removeFromShoppingBag, removeTempSizeSelection, updateQuantity } from "../features/shoppingBagReducer/shoppingBagSlice";
import { decreaseProductInSize, increaseProductInSize, updateProductInSize } from "../features/productsReducer/productsSlice";
import { CartItemInterface } from "../models/CartiItemInterface";
import { useCallback } from "react";

export const useProductQuantity = () => {
  const productsStore = useSelector((state: RootState) => state.productsState);
  const shoppingBagStore = useSelector((state: RootState) => state.shoppingBag);
  const dispatch = useDispatch();

  const getSizeAvailability = useCallback((productId: number, size: string): number => {
    const product = findProduct(productId, productsStore.products);
    if(!product) return 0;
    const sizeAvailability = product.sizes[size];
    return sizeAvailability;
  },[productsStore.products]);

  const getAllsizesAvailable = useCallback((productId: number): string[] => {
    const product = findProduct(productId, productsStore.products);
    if(!product) return [];
    const sizesAvailable = Object.keys(product.sizes).filter(size => product.sizes[size] > 0);
    return sizesAvailable;
  },[productsStore.products]);

  const updateProductQuantity = (cartItem: CartItemInterface) => {
    const product = findProduct(cartItem.product.id, productsStore.products);
    if(!product) return;
    const sizeInStock = getSizeAvailability(cartItem.product.id, cartItem.sizeSelected);
    if(sizeInStock < 1 || cartItem.quantity > sizeInStock) return;
    const newCartItem: CartItemInterface = {
      ...cartItem,
      cartPrice: product.price,
    }
    dispatch(updateQuantity(newCartItem));
    dispatch(updateProductInSize({productId: cartItem.product.id, size: cartItem.sizeSelected, quantity: cartItem.quantity}));
  };

  const addProductToShoppingBag = (product: ProductInterface, size: string, discount: number | null) => {
    const productFromStore = findProduct(product.id, productsStore.products);
    if(!productFromStore) return;
    const sizeAvailability = getSizeAvailability(productFromStore.id, size);
    if(sizeAvailability < 1) return;
    const sizeInStock = getSizeAvailability(productFromStore.id, size);
    if(sizeInStock < 1) return;
    const newCartItem: CartItemInterface = {
      product: productFromStore,
      sizeSelected: size,
      quantity: 1,
      cartPrice: discount ? product.price * (1-discount) : product.price,
    }
    dispatch(addToShoppingBag(newCartItem));
    dispatch(decreaseProductInSize({productId: product.id, size}));
  }

  const decreaseShoppingBagProductQuantity = (cartItem: CartItemInterface) => {
    const product = findProduct(cartItem.product.id, productsStore.products);
    if(!product) return;
    const quantityInShoppingBag = cartItem.quantity;
    if(quantityInShoppingBag < 2) return;
    dispatch(decreaseQuantity(cartItem));
    dispatch(increaseProductInSize({productId: cartItem.product.id, size: cartItem.sizeSelected}));
  }

  const removeProductFromShoppingBag = (cartItem: CartItemInterface) => {
    const product = findProduct(cartItem.product.id, productsStore.products);
    if(!product) return;
    dispatch(removeFromShoppingBag(cartItem));
    dispatch(increaseProductInSize({productId: cartItem.product.id, size: cartItem.sizeSelected}));
  }

  const sizeIsSelected = (size: string, productId: number) => {
    const product = findProduct(productId, productsStore.products);
    if(!product) return false;
    const tempProductIndex = findTempProductIndex(productId, size, shoppingBagStore.tempProducts);
    if(tempProductIndex > -1) return true;
    return false;
  }

  const selectedSizes = (productId: number) => {
    const product = findProduct(productId, productsStore.products);
    const tempProductIndex = shoppingBagStore.tempProducts.findIndex(product => product.productId === productId);
    if(!product) return [];
    if(tempProductIndex > -1) return shoppingBagStore.tempProducts[tempProductIndex].size;
    return [];
  }

  const addASelectedSize = (size: string, productId: number) => {
    const product = findProduct(productId, productsStore.products);
    if(!product) return;
    dispatch(addTempSizeSelection({productId: product.id, size}));
  }

  const removeASelectedSize = (size: string, productId: number) => {
    const product = findProduct(productId, productsStore.products);
    if(!product) return;
    dispatch(removeTempSizeSelection({productId: product.id, size}));
  }


  const commitAllSelections = (productId: number) => {
    const product = findProduct(productId, productsStore.products);
    if(!product) return;
    const allSelections = shoppingBagStore.tempProducts
    const selections = allSelections.filter(selection => selection.productId === productId);
    for(const selection of selections) {
      if(product.sizes[selection.size] > 0){
        addProductToShoppingBag(product, selection.size, null);
        removeASelectedSize(selection.size, productId);
      }
    }
  }

  return {
    productsStore,
    shoppingBagStore,
    selectedSizes,
    sizeIsSelected,
    getSizeAvailability,
    getAllsizesAvailable,
    updateProductQuantity,
    addProductToShoppingBag,
    decreaseShoppingBagProductQuantity,
    removeProductFromShoppingBag,
    addASelectedSize,
    removeASelectedSize,
    commitAllSelections,
  }
}

const findProduct = (id: number, products: ProductInterface[]) => {
  return products.find(product => product.id === id);
}

const findTempProductIndex = (id: number, size: string, selections: {productId: number, size: string}[]) => {
  return selections.findIndex(product => product.productId === id && product.size === size);
}
