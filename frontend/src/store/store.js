import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import wishlistReducer from './slices/wishlistSlice'
import authReducer from './slices/authSlice'
import uiReducer from './slices/uiSlice'
import productsReducer from './slices/productsSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
    ui: uiReducer,
    products: productsReducer,
  },
})

export default store
