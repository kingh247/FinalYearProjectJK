import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { items: [] };

const addDecemial = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // initialState: {
  //   items: [],
  // },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload; // get the item when clicked

      const existingItem = state.items.find((i) => i._id === item._id); // search throught to find matching item

      if (existingItem) {
        // update the quantity
        state.items = state.items.map((i) =>
          i._id === existingItem._id ? item : i
        );
      } else {
        state.items = [...state.items, item]; // state is inmutable so usig spread operate
      }

      // Product price
      state.itemsPrice = addDecemial(
        state.items.reduce((accumulator, item) => {
          const itemPrice = item.MyPrice * item.qty || 0;
          console.log(
            `Item ${item._id}: Myprice=${item.MyPrice}, qty=${item.qty}, price=${itemPrice}`
          );
          return accumulator + itemPrice;
        }, 0)
      );

      // total price
      state.totalPrice = Number(state.itemsPrice).toFixed(2);

      // save to local storage
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(itemIndex, 1);
    },
  },
  // reducers: {
  //   addItem: (state, action) => {
  //     const item = action.payload;

  //     const existingItem = state.items.find((i) => i._id === item._id);

  //     if (existingItem) {
  //       state.items = state.items.map((i) =>
  //         i._id === existingItem._id ? item : i
  //       );
  //     } else {
  //       state.items = [...state.items, item];
  //     }

  //     // Product price
  //     state.itemsPrice = state.items.reduce(
  //       (accumilator, item) => accumilator + item.price * item.qty,
  //       0
  //     );
  //     // total price
  //     state.totalPrice = state.itemsPrice.toFixed(2);

  //     // save to local storage
  //     localStorage.setItem('cartItems', JSON.stringify(state));
  //   },
  //   removeItem: (state, action) => {
  //     const itemIndex = state.items.findIndex(
  //       (item) => item.id === action.payload.id
  //     );
  //     state.items.splice(itemIndex, 1);
  //   },
  // },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
