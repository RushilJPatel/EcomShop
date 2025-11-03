function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About ShopNow</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <img 
          src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=400&fit=crop" 
          alt="About ShopNow" 
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-2xl font-semibold mb-4">Your Trusted Online Store</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ShopNow is a leading e-commerce platform dedicated to providing high-quality products 
          at competitive prices. We've been serving customers worldwide since 2020, building 
          a reputation for reliability, excellent customer service, and fast shipping.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our mission is to make online shopping easy, convenient, and enjoyable. We carefully 
          curate our product selection to ensure you get the best value for your money. Whether 
          you're looking for the latest electronics, stylish accessories, or powerful computing 
          equipment, we've got you covered.
        </p>
        <p className="text-gray-700 leading-relaxed">
          At ShopNow, customer satisfaction is our top priority. We offer a 30-day return policy, 
          free shipping on orders over $50, and 24/7 customer support to ensure you have the best 
          shopping experience possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-purple-50 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-purple-600 mb-2">50K+</h3>
          <p className="text-gray-700">Happy Customers</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-purple-600 mb-2">500+</h3>
          <p className="text-gray-700">Products</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-6 text-center">
          <h3 className="text-2xl font-bold text-purple-600 mb-2">4.8/5</h3>
          <p className="text-gray-700">Average Rating</p>
        </div>
      </div>
    </div>
  )
}

export default About

