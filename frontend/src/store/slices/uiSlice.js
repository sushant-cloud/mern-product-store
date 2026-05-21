import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: localStorage.getItem('theme') === 'dark',
  sidebarOpen: false,
  filters: {
    category: 'all',
    minPrice: 0,
    maxPrice: 10000,
    rating: 0,
    sortBy: 'newest',
    searchQuery: '',
  },
  loading: false,
  toast: null,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode
    },
    
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },
    
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    
    resetFilters: (state) => {
      state.filters = initialState.filters
    },
    
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    
    showToast: (state, action) => {
      state.toast = action.payload
    },
    
    hideToast: (state) => {
      state.toast = null
    },
  },
})

export const { toggleTheme, toggleSidebar, setFilters, resetFilters, setLoading, showToast, hideToast } = uiSlice.actions
export default uiSlice.reducer
