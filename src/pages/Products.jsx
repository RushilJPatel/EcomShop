import { useState } from 'react'

function Products({ cart, setCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    { 
      id: 1, 
      name: 'Wireless Headphones', 
      price: 99.99, 
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      description: 'Premium noise-cancelling wireless headphones'
    },
    { 
      id: 2, 
      name: 'Smart Watch', 
      price: 249.99, 
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      description: 'Advanced fitness tracking and notifications'
    },
    { 
      id: 3, 
      name: 'Laptop Stand', 
      price: 49.99, 
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
      description: 'Ergonomic aluminum laptop stand'
    },
    { 
      id: 4, 
      name: 'USB-C Cable', 
      price: 19.99, 
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop',
      description: 'Fast charging USB-C cable 6ft'
    },
    { 
      id: 5, 
      name: 'Wireless Mouse', 
      price: 39.99, 
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
      description: 'Ergonomic wireless mouse with long battery'
    },
    { 
      id: 6, 
      name: 'Mechanical Keyboard', 
      price: 129.99, 
      category: 'computers',
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
      description: 'RGB mechanical gaming keyboard'
    },
    { 
      id: 7, 
      name: 'Gaming Monitor', 
      price: 299.99, 
      category: 'computers',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
      description: '27" 4K gaming monitor 144Hz'
    },
    { 
      id: 8, 
      name: 'Webcam HD', 
      price: 79.99, 
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop',
      description: '1080p HD webcam with microphone'
    },
    { 
      id: 9, 
      name: 'Bluetooth Speaker', 
      price: 59.99, 
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      description: 'Portable waterproof Bluetooth speaker'
    },
  ]

  const categories = ['all', 'electronics', 'accessories', 'computers']

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      
      {/* Category Filter */}
      <div className="flex gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-purple-50'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <p className="text-2xl font-bold text-purple-600 mb-4">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products

