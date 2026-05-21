import api from './api'

const productService = {
  // Get all products with filters
  getAllProducts: (params = {}) => {
    return api.get('/products', { params })
  },

  // Get single product by ID
  getProductById: (id) => {
    return api.get(`/products/${id}`)
  },

  // Search products
  searchProducts: (query) => {
    return api.get('/products/search', { params: { q: query } })
  },

  // Get products by category
  getByCategory: (category) => {
    return api.get(`/products/category/${category}`)
  },

  // Get featured products
  getFeaturedProducts: () => {
    return api.get('/products/featured')
  },

  // Get product reviews
  getReviews: (productId) => {
    return api.get(`/products/${productId}/reviews`)
  },

  // Add review
  addReview: (productId, reviewData) => {
    return api.post(`/products/${productId}/reviews`, reviewData)
  },
}

export default productService
