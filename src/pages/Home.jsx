import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6">Summer Sale - 50% Off</h1>
          <p className="text-2xl mb-8">Limited time offer on selected items</p>
          <Link
            to="/products"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition shadow-lg text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/products?category=electronics" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop" 
                alt="Electronics" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Electronics</h3>
                <p className="text-gray-600">Latest tech gadgets</p>
              </div>
            </div>
          </Link>
          <Link to="/products?category=accessories" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop" 
                alt="Accessories" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Accessories</h3>
                <p className="text-gray-600">Complete your setup</p>
              </div>
            </div>
          </Link>
          <Link to="/products?category=computers" className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img 
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=400&fit=crop" 
                alt="Computers" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Computers</h3>
                <p className="text-gray-600">High-performance gear</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $50</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">↩️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Your data is protected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

