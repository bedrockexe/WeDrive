import React, { useState } from 'react';
import { BellIcon, ChevronDownIcon, MenuIcon, UserIcon } from 'lucide-react';
const TopNavBar = ({
  toggleSidebar,
  name
}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  return <header className="bg-white shadow-sm z-10">
      <div className="px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 hover:text-gray-900" onClick={toggleSidebar}>
          <MenuIcon size={24} />
        </button>
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-800">
            <span className="text-green-500">We</span>Drive
          </span>
        </div>
        {/* Right Side Navigation */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button className="text-gray-600 hover:text-gray-900 relative" onClick={() => setNotificationsOpen(!notificationsOpen)}>
              <BellIcon size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
            {notificationsOpen && <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="font-medium text-sm">Notifications</p>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  <div className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50">
                    <p className="text-sm font-medium">
                      Your booking is confirmed!
                    </p>
                    <p className="text-xs text-gray-500">10 minutes ago</p>
                  </div>
                  <div className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50">
                    <p className="text-sm font-medium">
                      Special discount available
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-50">
                    <p className="text-sm font-medium">
                      Your feedback is appreciated
                    </p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-gray-100 text-center">
                  <button className="text-green-500 text-sm hover:text-green-600">
                    View All
                  </button>
                </div>
              </div>}
          </div>
          {/* User Profile */}
          <div className="relative">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900" onClick={() => setUserMenuOpen(!userMenuOpen)}>
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
                <UserIcon size={18} className="text-gray-600" />
              </div>
              <span className="hidden md:inline text-sm font-medium">
                {name ? name : 'Anonymous'}
              </span>
              <ChevronDownIcon size={16} />
            </button>
            {userMenuOpen && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 border border-gray-100">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  View Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Edit Account
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                </a>
                <div className="border-t border-gray-100"></div>
                <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Logout
                </a>
              </div>}
          </div>
        </div>
      </div>
    </header>;
};
export default TopNavBar;