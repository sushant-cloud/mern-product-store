import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  loading: false,
  error: null,
  totalCount: 0,
  currentPage: 1,
  totalPages: 1,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
      state.error = null
    },
    
    fetchSuccess: (state, action) => {
      state.loading = false
      state.items = action.payload.items
      state.totalCount = action.payload.totalCount
      state.currentPage = action.payload.currentPage
      state.totalPages = action.payload.totalPages
    },
    
    fetchFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { fetchStart, fetchSuccess, fetchFailure } = productsSlice.actions
export default productsSlice.reducer
