const featuredCars = [{
  id: 1,
  name: 'Tesla Model 3',
  image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  price: 89,
  description: 'Electric sedan with autopilot features and long range battery.'
}, {
  id: 2,
  name: 'BMW X5',
  image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
  price: 120,
  description: 'Luxury SUV with spacious interior and premium features.'
}, {
  id: 3,
  name: 'Mercedes C-Class',
  image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 110,
  description: 'Elegant sedan with cutting-edge technology and comfort.'
}, {
  id: 4,
  name: 'Toyota RAV4',
  image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80',
  price: 75,
  description: 'Reliable SUV with excellent fuel economy and cargo space.'
}, {
  id: 5,
  name: 'Audi A4',
  image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 95,
  description: 'Sporty sedan with Quattro all-wheel drive and refined interior.'
}, {
  id: 6,
  name: 'Ford Mustang',
  image: 'https://images.unsplash.com/photo-1584345604476-8ec5f82d6873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  price: 105,
  description: 'Iconic American muscle car with powerful engine and bold styling.'
}];
export function FeaturedCars() {
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Popular Rentals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most sought-after vehicles, ready for your next
            adventure.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map(car => <div key={car.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-56 overflow-hidden">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {car.name}
                  </h3>
                  <div className="text-[#1AB759] font-bold">
                    ${car.price}
                    <span className="text-sm text-gray-500">/day</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{car.description}</p>
                <button className="w-full py-2 bg-[#1AB759] text-white rounded-md font-medium hover:bg-[#159a4b] transition-colors">
                  Book Now
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}