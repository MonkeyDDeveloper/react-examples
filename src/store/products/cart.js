import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
  cart: {
    products: []
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem (state, newItem) {
      const existingItem = state.cart.products.findIndex((item) => item.id === newItem.payload.id)
      if (existingItem >= 0) {
        state.cart.products[existingItem].quantity += 1
        return
      }
      state.cart.products.push({ ...newItem.payload, quantity: 1 })
    },
    removeItem (state, productId) {
      const existingItem = state.cart.products.findIndex((item) => item.id === productId.payload)
      if (existingItem >= 0) {
        if (state.cart.products[existingItem].quantity === 1) {
          state.cart.products = state.cart.products.filter((item) => item.id !== productId.payload)
          return
        }
        state.cart.products[existingItem].quantity -= 1
      }
    },
    resetCart (state) {
      state.cart.products = []
    }
  }
})

export const { addItem, resetCart, removeItem } = cartSlice.actions

export default cartSlice.reducer
