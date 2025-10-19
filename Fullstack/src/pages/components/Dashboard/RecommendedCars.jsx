import React from 'react';
import CarCard from './UI/CarCard';
const RecommendedCars = () => {
  const cars = [{
    id: 1,
    name: 'Toyota Corolla',
    category: 'Sedan',
    pricePerDay: 45,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 2,
    name: 'Honda CR-V',
    category: 'SUV',
    pricePerDay: 65,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1568844293986-ca4c357d527f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 3,
    name: 'Tesla Model 3',
    category: 'Electric',
    pricePerDay: 85,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 4,
    name: 'Jeep Wrangler',
    category: 'SUV',
    pricePerDay: 75,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }];
  return <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Recommended Cars</h2>
        <a href="#" className="text-green-500 text-sm font-medium hover:text-green-600">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
    </div>;
};
export default RecommendedCars;