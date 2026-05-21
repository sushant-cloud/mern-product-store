import { useState, useEffect } from 'react'
import ProductCard from '../components/common/ProductCard'
import { useSelector } from 'react-redux'

const ProductListing = () => {
  const filters = useSelector(state => state.ui.filters)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch products based on filters
    setLoading(true)
    setTimeout(() => {
      // Mock data
      setProducts([
        { _id: '1', title: 'Product 1', price: 99, image: 'https://via.placeholder.com/300x300', rating: 4, category: 'Electronics' },
        { _id: '2', title: 'Product 2', price: 199, image: 'https://via.placeholder.com/300x300', rating: 5, category: 'Fashion' },
      ])
      setLoading(false)
    }, 1000)
  }, [filters])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      
      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductListing
