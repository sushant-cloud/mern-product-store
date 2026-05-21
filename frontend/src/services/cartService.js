import api from './api'

const cartService = {
  // Get user cart
  getCart: () => {
    return api.get('/cart')
  },

  // Add item to cart
  addToCart: (productId, quantity = 1) => {
    return api.post('/cart', { productId, quantity })
  },

  // Update cart item
  updateCart: (cartItemId, quantity) => {
    return api.put(`/cart/${cartItemId}`, { quantity })
  },

  // Remove from cart
  removeFromCart: (cartItemId) => {
    return api.delete(`/cart/${cartItemId}`)
  },

  // Clear cart
  clearCart: () => {
    return api.delete('/cart')
  },
}

export default cartService
