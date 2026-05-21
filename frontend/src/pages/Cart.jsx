import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'
import { Trash2 } from 'lucide-react'

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalPrice } = useSelector(state => state.cart)

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
        <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
        <Link to="/products" className="btn-primary inline-block">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {items.map(item => (
            <div key={item._id} className="card p-4 mb-4 flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-primary-600">{formatPrice(item.price)}</p>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => dispatch(updateQuantity({ id: item._id, quantity: parseInt(e.target.value) }))}
                  className="input-field w-16"
                />
                <button
                  onClick={() => dispatch(removeFromCart(item._id))}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="card p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
          </div>
          <button className="w-full btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
