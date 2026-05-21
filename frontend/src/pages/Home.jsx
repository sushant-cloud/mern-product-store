import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to MERN Product Store</h1>
              <p className="text-xl mb-8 text-primary-100">Discover amazing products at unbeatable prices. Shop now and get exclusive deals!</p>
              <Link to="/products" className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/20 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold">Hero Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Fast Shipping', description: 'Get your products delivered quickly' },
              { title: 'Secure Payment', description: 'Safe and secure payment methods' },
              { title: '24/7 Support', description: 'Round the clock customer support' },
            ].map((feature, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
