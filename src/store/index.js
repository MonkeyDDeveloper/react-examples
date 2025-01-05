import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import filterReducer from './products/filters'
import cartReducer from './products/cart'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    filters: filterReducer,
    cart: cartReducer
  }
})

export default store
