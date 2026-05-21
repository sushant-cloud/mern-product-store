const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Welcome to MERN Product Store, your ultimate destination for quality products at the best prices.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Founded in 2026, we're committed to providing excellent customer service and a seamless shopping experience.
          </p>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-80"></div>
      </div>
    </div>
  )
}

export default About
