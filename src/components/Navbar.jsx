import { Link, useLocation } from 'react-router-dom'

function Navbar({ cartCount, onCartClick }) {
  const location = useLocation()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            ShopNow
          </Link>
          <div className="flex gap-6 items-center">
            <Link
              to="/"
              className={`transition-colors ${
                location.pathname === '/'
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`transition-colors ${
                location.pathname === '/products'
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                location.pathname === '/about'
                  ? 'text-purple-600 font-semibold'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              About
            </Link>
            <button
              onClick={onCartClick}
              className="relative bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

