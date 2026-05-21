import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme, toggleSidebar } from '../../store/slices/uiSlice'
import { Menu, X, Sun, Moon, ShoppingCart, Heart, Search } from 'lucide-react'

const Navbar = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { darkMode, sidebarOpen } = useSelector(state => state.ui)
  const { totalItems } = useSelector(state => state.cart)
  const { items: wishlistItems } = useSelector(state => state.wishlist)
  const [searchActive, setSearchActive] = useState(false)

  const isActive = (path) => location.pathname === path ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingCart className="w-6 h-6 text-primary-600" />
            <span className="text-xl font-bold text-primary-600">ProductStore</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition ${isActive('/')}`}>Home</Link>
            <Link to="/products" className={`transition ${isActive('/products')}`}>Products</Link>
            <Link to="/about" className={`transition ${isActive('/about')}`}>About</Link>
            <Link to="/contact" className={`transition ${isActive('/contact')}`}>Contact</Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
              <Heart className="w-5 h-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
