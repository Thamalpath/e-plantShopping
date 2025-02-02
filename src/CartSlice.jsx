import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],// Initialize items as an empty array
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== itemToRemove.name);
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    updateQuantity: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    },
});

export const { addItem, removeItem, updateQuantity, totalQuantity} = CartSlice.actions;

export default CartSlice.reducer;
