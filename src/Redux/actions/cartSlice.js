import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (
        existingItemIndex >= 0 &&
        state.items[existingItemIndex].quantity > 1
      ) {
        state.items[existingItemIndex].quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    updateCartQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload.itemId
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
