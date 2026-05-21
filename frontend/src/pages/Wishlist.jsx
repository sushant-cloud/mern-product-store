import { useSelector } from 'react-redux'
import ProductCard from '../components/common/ProductCard'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  const wishlistItems = useSelector(state => state.wishlist.items)

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Wishlist</h1>
        <p className="text-xl text-gray-600 mb-6">Your wishlist is empty</p>
        <Link to="/products" className="btn-primary inline-block">Start Shopping</Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Wishlist ({wishlistItems.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistItems.map(item => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  )
}

export default Wishlist
