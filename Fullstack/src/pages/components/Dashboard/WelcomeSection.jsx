import React from 'react';
import StatsCard from './UI/StatsCard';
import { CalendarIcon, CarIcon, DollarSignIcon, AwardIcon } from 'lucide-react';
const WelcomeSection = ({firstname, lastname}) => {
  return <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Welcome back, {firstname ? firstname : "John"} {lastname ? lastname : "Doe"}!
      </h1>
      <p className="text-gray-600 mt-1">
        Here's an overview of your rental activity
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <StatsCard title="Upcoming Booking" value="May 15" icon={<CalendarIcon className="text-green-500" />} description="Toyota Corolla" />
        <StatsCard title="Total Rentals" value="12" icon={<CarIcon className="text-blue-500" />} description="This year" />
        <StatsCard title="Total Spent" value="$1,245" icon={<DollarSignIcon className="text-purple-500" />} description="This year" />
        <StatsCard title="Loyalty Points" value="350" icon={<AwardIcon className="text-amber-500" />} description="Valid until Dec 2023" />
      </div>
    </div>;
};
export default WelcomeSection;