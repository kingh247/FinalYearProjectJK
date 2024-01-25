import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find((i) => i._id === item._id);

      if (existingItem) {
       state.items = state.items.map((i) => i._id === 
       existingItem._id ? item: i);
      } else {
        state.items =[...state.items, item];
      }

      // Product price 
      state.itemsPrice = state.items.reduce((accumilator, item) => 
        accumilator + item.price* item.qty, 0);
      // total price
      state.totalPrice = (state.itemsPrice).toFixed(2);

      // save to local storage
      localStorage.setItem('cartItems', JSON.stringify(state));
      
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(itemIndex, 1);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
