import React, { useState, useContext } from 'react';
import TopNavBar from './components/Dashboard/Navigation/TopNavBar';
import SideNavBar from './components/Dashboard/Navigation/SideNavBar';
import WelcomeSection from './components/Dashboard/WelcomeSection';
import RecommendedCars from './components/Dashboard/RecommendedCars';
import ActiveReservations from './components/Dashboard/ActiveReservations';
import FAQSection from './components/Dashboard/FAQSection';
import Footer from './components/Dashboard/Footer';
import { BellIcon, MessageCircleIcon } from 'lucide-react';


const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const firstname = user.firstName;
  const lastname = user.lastName;
  console.log(user.email);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return <div className="flex flex-col min-h-screen bg-gray-50">
      <TopNavBar toggleSidebar={toggleSidebar} name={firstname} />
      <div className="flex flex-1">
        <SideNavBar isOpen={sidebarOpen} />
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          <WelcomeSection firstname={firstname} lastname={lastname} />
          <div className="mt-8">
            <RecommendedCars />
          </div>
          <div className="mt-8">
            <ActiveReservations />
          </div>
          <div className="mt-8">
            <FAQSection />
          </div>
          <Footer />
        </main>
      </div>
      {/* Floating Chat Support Button */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-10">
        <MessageCircleIcon size={24} />
      </button>
    </div>;
};
export default DashboardLayout;