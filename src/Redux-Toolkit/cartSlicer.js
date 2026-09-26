import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: {
    product: [],
    cartCount: 0,
    totalPrice: 0,
  },
  reducers: {
    addTocart: (state, action) => {
      const existProd = state.product.find(
        (prod) => prod.id === action.payload.id,
      );
      if (existProd) {
        existProd.quantity += 1;
        state.totalPrice += action.payload.price;
      } else {
        state.product.push({ ...action.payload, quantity: 1 });
        state.cartCount += 1;
        state.totalPrice += action.payload.price;
      }
    },
    increaseQty: (state, action) => {
      const product = state.product.find((prod) => prod.id === action.payload);
      if (product) {
        product.quantity += 1;
        state.totalPrice += product.price;
      }
    },
    decreaseQty: (state, action) => {
      const product = state.product.find((prod) => prod.id === action.payload);
      if (product && product.quantity >= 1) {
        product.quantity -= 1;
        state.totalPrice -= product.price;
        if (product.quantity === 0) {
          state.product = state.product.filter(
            (prod) => prod.id !== action.payload,
          );
          state.cartCount -= 1;
        }
      }
    },
    removeItem: (state, action) => {
      const product = state.product.find((prod) => prod.id === action.payload);
      if (product) {
        const updatedCart = state.product.filter(
          (prod) => prod.id !== action.payload,
        );
        state.product = updatedCart;
        state.cartCount -= 1;
        state.totalPrice -= product.price * product.quantity;
      }
    },
    clearCarttt: (state) => {
      state.product = [];
      state.cartCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addTocart, increaseQty, decreaseQty, removeItem, clearCarttt } =
  cartSlicer.actions;
export default cartSlicer.reducer;
