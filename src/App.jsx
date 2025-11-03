import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, image: '🎧' },
    { id: 2, name: 'Smart Watch', price: 249.99, image: '⌚' },
    { id: 3, name: 'Laptop Stand', price: 49.99, image: '💻' },
    { id: 4, name: 'USB-C Cable', price: 19.99, image: '🔌' },
    { id: 5, name: 'Wireless Mouse', price: 39.99, image: '🖱️' },
    { id: 6, name: 'Mechanical Keyboard', price: 129.99, image: '⌨️' },
  ]

  const addToCart = (product) => {
    setCart([...cart, product])
    setIsCartOpen(true)
  }

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">ShopNow</div>
            <div className="flex gap-4 items-center">
              <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Cart ({cart.length})
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Summer Sale - 50% Off</h1>
          <p className="text-xl">Limited time offer on selected items</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="text-6xl mb-4 text-center">{product.image}</div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsCartOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-4">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-blue-600">${item.price}</p>
                      </div>
                      <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-700">Remove</button>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">Total:</span>
                    <span className="text-2xl font-bold text-blue-600">${getTotal()}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App

