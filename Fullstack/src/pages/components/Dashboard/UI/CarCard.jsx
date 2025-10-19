import { StarIcon } from 'lucide-react';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md">
      <div className="h-40 overflow-hidden">
        <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-gray-800">{car.name}</h3>
            <p className="text-xs text-gray-500">{car.category}</p>
          </div>
          <div className="flex items-center">
            <StarIcon size={16} className="text-yellow-400 fill-current" />
            <span className="text-sm ml-1 font-medium">{car.rating}</span>
          </div>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">
              <span className="font-bold text-gray-800">
                ${car.pricePerDay}
              </span>{' '}
              / day
            </p>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 rounded-md transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
