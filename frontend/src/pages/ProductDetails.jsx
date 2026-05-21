import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'

const ProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const [product] = useState({
    _id: id,
    title: 'Product Title',
    price: 99,
    description: 'Product description here',
    image: 'https://via.placeholder.com/500x500',
    rating: 4.5,
    reviews: 128,
  })

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-200 rounded-lg h-96"></div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl text-primary-600 font-bold mb-4">${product.price}</p>
          <div className="flex items-center space-x-4 mb-6">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="input-field w-20"
            />
            <button onClick={handleAddToCart} className="btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
