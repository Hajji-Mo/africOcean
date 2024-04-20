// cartSlice.js
import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item._id === newItem._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify([...state.cartItems]));
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
        localStorage.setItem(
          "cartItems",
          JSON.stringify([...state.cartItems, newItem])
        );
      }
    },
    removeFromCart(state, action) {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;
