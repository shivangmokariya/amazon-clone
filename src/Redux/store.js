// Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './actions/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
