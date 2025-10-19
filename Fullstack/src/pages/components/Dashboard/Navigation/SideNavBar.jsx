import { HomeIcon, CalendarIcon, CarIcon, CreditCardIcon, HelpCircleIcon, SettingsIcon } from 'lucide-react';
const SideNavBar = ({
  isOpen
}) => {
  const navItems = [{
    name: 'Dashboard',
    icon: <HomeIcon size={20} />,
    active: true
  }, {
    name: 'My Bookings',
    icon: <CalendarIcon size={20} />
  }, {
    name: 'Available Cars',
    icon: <CarIcon size={20} />
  }, {
    name: 'Payment History',
    icon: <CreditCardIcon size={20} />
  }, {
    name: 'Support / FAQs',
    icon: <HelpCircleIcon size={20} />
  }, {
    name: 'Settings',
    icon: <SettingsIcon size={20} />
  }];
  return <aside className={`bg-white shadow-md z-10 fixed md:relative inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out w-64 overflow-y-auto`}>
      <div className="px-4 py-6">
        <nav>
          <ul className="space-y-1">
            {navItems.map((item, index) => <li key={index}>
                <a href="#" className={`flex items-center px-4 py-3 rounded-lg text-sm ${item.active ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                  <span className={`mr-3 ${item.active ? 'text-green-500' : 'text-gray-500'}`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </a>
              </li>)}
          </ul>
        </nav>
      </div>
    </aside>;
};
export default SideNavBar;