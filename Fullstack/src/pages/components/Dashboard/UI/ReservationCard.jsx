import { CalendarIcon, MapPinIcon } from 'lucide-react';

const ReservationCard = ({ reservation }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-24 sm:h-24 mb-3 sm:mb-0 overflow-hidden rounded-md">
          <img src={reservation.image} alt={reservation.carName} className="w-full h-full object-cover" />
        </div>
        <div className="sm:ml-4 flex-grow">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div>
              <h3 className="font-medium text-gray-800">
                {reservation.carName}
              </h3>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <CalendarIcon size={14} className="mr-1" />
                <span>
                  {reservation.pickupDate} - {reservation.returnDate}
                </span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <MapPinIcon size={14} className="mr-1" />
                <span>{reservation.location}</span>
              </div>
            </div>
            <div className="mt-2 sm:mt-0">
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(reservation.status)}`}>
                {reservation.status}
              </span>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <button className="text-sm text-gray-600 hover:text-gray-900">
              View Details
            </button>
            {reservation.status.toLowerCase() !== 'completed' && <button className="text-sm text-red-500 hover:text-red-600">
                Cancel
              </button>}
          </div>
        </div>
      </div>
    </div>;
};

export default ReservationCard;
