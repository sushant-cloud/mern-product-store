import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="inline-flex items-center space-x-2 btn-primary">
        <Home className="w-5 h-5" />
        <span>Go Home</span>
      </Link>
    </div>
  )
}

export default NotFound
