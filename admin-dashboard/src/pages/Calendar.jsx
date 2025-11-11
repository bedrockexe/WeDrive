import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CalendarIcon, 
  ChevronLeft,
  ChevronRight 
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Vehicle colors for the legend
const vehicles = [
  { name: "Jason", color: "bg-[#C4E538]" },
  { name: "Wiggy", color: "bg-[#8B5CF6]" },
  { name: "Jeremiah", color: "bg-[#F97316]" },
  { name: "Pedro", color: "bg-[#A855F7]" },
  { name: "Shadow", color: "bg-[#60A5FA]" },
  { name: "Noah", color: "bg-[#EF4444]" },
  { name: "Gizmo", color: "bg-[#06B6D4]" },
  { name: "Lian", color: "bg-[#10B981]" },
];

// Sample bookings data with full vehicle lists
const bookings = [
  { date: 23, vehicles: ["Jason", "Wiggy", "Jeremiah", "Pedro", "Shadow", "Noah", "Gizmo"] },
  { date: 24, vehicles: ["Jason"] },
  { date: 25, vehicles: ["Jason"] },
];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 20)); // October 20, 2025
  const [selectedDate, setSelectedDate] = useState(23);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogDate, setDialogDate] = useState(null);

  const monthNames = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const getVehicleColor = (vehicleName) => {
    const vehicle = vehicles.find(v => v.name === vehicleName);
    return vehicle?.color || "bg-gray-400";
  };

  const getBookingForDate = (day) => {
    return bookings.find(b => b.date === day);
  };

  const changeMonth = (delta) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + delta);
    setCurrentDate(newDate);
  };

  const getDayName = (day) => {
    const dateToUse = day || selectedDate;
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), dateToUse);
    return dayNames[date.getDay()];
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
    const booking = getBookingForDate(day);
    if (booking && booking.vehicles.length > 3) {
      setDialogDate(day);
      setIsDialogOpen(true);
    }
  };

  // Create calendar grid
  const calendarDays = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-20 sm:h-24 md:h-28 lg:h-32" />);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="p-4 sm:p-6 lg:p-8">
        {/* Date indicator and month navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-foreground rounded-lg flex items-center justify-center shrink-0">
              <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                {monthNames[currentDate.getMonth()]} {selectedDate}, {currentDate.getFullYear()}
              </h2>
              <p className="text-sm text-muted-foreground">{getDayName()}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => changeMonth(-1)}
              className="h-8 w-8 hover:bg-background"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="px-3 text-sm font-medium min-w-[100px] text-center">
              {monthNames[currentDate.getMonth()]}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => changeMonth(1)}
              className="h-8 w-8 hover:bg-background"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="mb-6">
          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="text-center font-semibold text-sm sm:text-base py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, index) => {
              if (typeof day === 'number') {
                const booking = getBookingForDate(day);
                const isSelected = day === selectedDate;
                const today = new Date();
                const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                const isPast = dayDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());

                return (
                  <div
                    key={index}
                    onClick={() => handleDayClick(day)}
                    className={`
                      h-20 sm:h-24 md:h-28 lg:h-32 rounded-lg p-2 cursor-pointer
                      transition-colors relative
                      ${isPast ? 'bg-muted/50 opacity-60' : 'bg-muted hover:bg-muted/70'}
                      ${isSelected ? 'ring-2 ring-primary' : ''}
                    `}
                  >
                    <span className={`text-sm sm:text-base font-semibold ${
                      isPast ? 'text-muted-foreground' : booking ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {day}
                    </span>
                    
                    {booking && (
                      <div className="mt-1 space-y-0.5">
                        {booking.vehicles.slice(0, 3).map((vehicle, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-xs">
                            <div className={`w-2 h-2 rounded-full ${getVehicleColor(vehicle)} ${isPast ? 'opacity-50' : ''}`} />
                            <span className={`truncate ${isPast ? 'opacity-70' : ''}`}>{vehicle}</span>
                          </div>
                        ))}
                        {booking.vehicles.length > 3 && (
                          <div className={`text-xs text-muted-foreground font-medium ${isPast ? 'opacity-70' : ''}`}>
                            +{booking.vehicles.length - 3} more
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              }
              return calendarDays[index];
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 border-t">
          {vehicles.map((vehicle) => (
            <div key={vehicle.name} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${vehicle.color}`} />
              <span className="text-sm">{vehicle.name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Booking Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Bookings for {monthNames[currentDate.getMonth()]} {dialogDate}, {currentDate.getFullYear()}
            </DialogTitle>
            <p className="text-sm text-muted-foreground">{getDayName(dialogDate || undefined)}</p>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            {dialogDate && getBookingForDate(dialogDate)?.vehicles.map((vehicle, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <div className={`w-4 h-4 rounded-full ${getVehicleColor(vehicle)} shrink-0`} />
                <span className="font-medium">{vehicle}</span>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
