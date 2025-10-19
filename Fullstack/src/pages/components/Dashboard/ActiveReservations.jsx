import ReservationCard from './UI/ReservationCard';
const ActiveReservations = () => {
  const reservations = [{
    id: 1,
    carName: 'Toyota Corolla',
    pickupDate: 'May 15, 2023',
    returnDate: 'May 20, 2023',
    location: 'San Francisco Airport',
    status: 'Confirmed',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 2,
    carName: 'Honda CR-V',
    pickupDate: 'June 3, 2023',
    returnDate: 'June 7, 2023',
    location: 'Los Angeles Downtown',
    status: 'Pending',
    image: 'https://images.unsplash.com/photo-1568844293986-ca4c357d527f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }];
  return <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Active Reservations</h2>
        <a href="#" className="text-green-500 text-sm font-medium hover:text-green-600">
          View All
        </a>
      </div>
      <div className="space-y-4">
        {reservations.map(reservation => <ReservationCard key={reservation.id} reservation={reservation} />)}
      </div>
    </div>;
};
export default ActiveReservations;