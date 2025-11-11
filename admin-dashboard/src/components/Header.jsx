import { Bell, ChevronDown, LogOut, Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLocation } from "react-router-dom";

const getPageTitle = (pathname) => {
  const routes = {
    "/": "Dashboard",
    "/analytics": "Analytics",
    "/customers": "Customers",
    "/fleet": "Fleet Management",
    "/history": "History",
    "/calendar": "Calendar",
    "/settings": "Settings",
    "/help": "Help",
    "/verification": "Verification",
  };
  return routes[pathname] || "Dashboard";
};

export const Header = ({ onMenuClick, isSidebarOpen }) => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <header className="h-14 sm:h-16 border-b border-border bg-card flex items-center justify-between px-3 sm:px-4 md:px-6 sticky top-0 z-30">
      <div className="flex items-center gap-2 sm:gap-3">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onMenuClick}
          title={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <Menu className="w-5 h-5" />
        </Button>
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold truncate">{pageTitle}</h1>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <Button variant="ghost" size="icon" className="relative hidden sm:flex">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
        
        <div className="h-6 sm:h-8 w-px bg-border hidden sm:block" />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 h-auto py-1.5 sm:py-2 px-2 sm:px-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs sm:text-sm font-semibold">KJ</span>
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-sm font-medium">Kenn Jarangue</p>
              </div>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground hidden sm:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-card">
            <DropdownMenuItem className="cursor-pointer">
              Profile Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-destructive hover:text-destructive focus:text-destructive hover:bg-destructive/10">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
