import { Link } from 'react-router-dom'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/slices/cartSlice'
import { addToWishlist, removeFromWishlist } from '../../store/slices/wishlistSlice'
import { formatPrice } from '../../utils/helpers'
import { useState } from 'react'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const wishlistItems = useSelector(state => state.wishlist.items)
  const isInWishlist = wishlistItems.some(item => item._id === product._id)
  const [imageLoading, setImageLoading] = useState(true)

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }))
  }

  const handleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product._id))
    } else {
      dispatch(addToWishlist(product))
    }
  }

  return (
    <div className="card overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-200 dark:bg-gray-700 h-48">
        {imageLoading && <div className="animate-pulse-slow w-full h-full" />}
        <img
          src={product.image}
          alt={product.title}
          onLoad={() => setImageLoading(false)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-red-500 hover:text-white transition"
        >
          <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/products/${product._id}`}>
          <h3 className="text-sm font-semibold line-clamp-2 hover:text-primary-600 transition mb-2">
            {product.title}
          </h3>
        </Link>

        {/* Category */}
        <p className="text-xs text-gray-500 mb-2">{product.category}</p>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews || 0})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-lg font-bold text-primary-600">{formatPrice(product.price)}</p>
            {product.originalPrice && (
              <p className="text-xs text-gray-500 line-through">{formatPrice(product.originalPrice)}</p>
            )}
          </div>
          {product.originalPrice && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full btn-primary flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
