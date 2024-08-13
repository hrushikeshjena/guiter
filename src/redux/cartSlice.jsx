// import { createSlice } from "@reduxjs/toolkit";

// const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers : {
//         addToCart(state, action){
//             state.push(action.payload)            
//         },
//         deleteFromCart(state,action){
//             return state.filter(item => item.id != action.payload.id);
//         }
//     }
// })

// export const {addToCart, deleteFromCart} = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state[itemIndex].quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    incrementItemQuantity: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state[itemIndex].quantity += 1;
      }
    },
    decrementItemQuantity: (state, action) => {
      const itemIndex = state.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        } else {
          state.splice(itemIndex, 1); // Remove item if quantity is 0
        }
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { addToCart, incrementItemQuantity, decrementItemQuantity, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
