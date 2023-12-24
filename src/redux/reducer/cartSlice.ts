import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../reducer/productSlice";
export type CartItem = Product & {
  quantity: number;
};
type CartState = {
  products: CartItem[];
  totalPrice: number;
};
// const localData = JSON.parse(getProductFromLocalStorage)
const initialState: CartState = {
  products: JSON.parse(localStorage.getItem("cart_item") || "[]"),
  // products = getProductFromLocalStorage? getProductFromLocalStorage : []
  totalPrice: JSON.parse(localStorage.getItem("cart_total") || "0"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state: CartState, action: PayloadAction<{ product: Product, quantity?: number }>) => {
      const newItem = action.payload?.product;
      
      const { quantity } = action.payload
      const existingItemIndex = state.products.findIndex(
        (product) => product._id === newItem?._id
      );

      if (existingItemIndex !== -1) {
        state.products[existingItemIndex].quantity += 1;
        state.totalPrice += newItem?.price;
        localStorage.setItem('cart_item', JSON.stringify(state.products))
        localStorage.setItem('cart_total', JSON.stringify(state.totalPrice))
      } else {
        state.products.push({
          ...newItem,
          quantity: quantity && quantity > 0 ? quantity : 1
        });
        state.totalPrice += quantity && quantity > 0 ? quantity * newItem.price : newItem.price;
        localStorage.setItem('cart_item', JSON.stringify(state.products))
        localStorage.setItem('cart_total', JSON.stringify(state.totalPrice))
      }

    },
    removeProductFromCart: (
      state: CartState,
      action: PayloadAction<{ id: string; full?: boolean }>
    ) => {
      const product_id = action.payload.id;
      const full = action.payload.full;

      const productIndex = state.products.findIndex(
        (product) => product._id === product_id
      );

      const currentProduct = state.products[productIndex];

      const priceToBeSubtractedFromTotal = full
        ? currentProduct.price * currentProduct.quantity
        : currentProduct.price;

      state.products[productIndex].quantity -= 1;
      localStorage.setItem('cart_total', JSON.stringify(state.totalPrice))

      if (full || state.products[productIndex].quantity <= 0) {
        state.products = state.products.filter(
          (product) => product._id !== product_id
        );
        localStorage.setItem('cart_item', JSON.stringify(state.products))
      }

      state.totalPrice -= priceToBeSubtractedFromTotal;
      localStorage.setItem('cart_total', JSON.stringify(state.totalPrice))
    },
    clearCart(state, action: PayloadAction<{ _id?: string; full?: boolean }>) {
      state.products = [];
      state.totalPrice = 0;
      localStorage.setItem("cart_item", JSON.stringify(state.products));
      localStorage.setItem("cart_total", JSON.stringify(state.totalPrice));
    },
  },
});

export default cartSlice.reducer;
export const { addProductToCart, removeProductFromCart, clearCart } = cartSlice.actions;
