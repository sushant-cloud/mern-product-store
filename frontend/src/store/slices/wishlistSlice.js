import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: JSON.parse(localStorage.getItem('wishlist')) || [],
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.items.find(item => item._id === action.payload._id)
      if (!exists) {
        state.items.push(action.payload)
        localStorage.setItem('wishlist', JSON.stringify(state.items))
      }
    },
    
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload)
      localStorage.setItem('wishlist', JSON.stringify(state.items))
    },
    
    clearWishlist: (state) => {
      state.items = []
      localStorage.removeItem('wishlist')
    },
    
    isInWishlist: (state, action) => {
      return state.items.some(item => item._id === action.payload)
    },
  },
})

export const { addToWishlist, removeFromWishlist, clearWishlist, isInWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
