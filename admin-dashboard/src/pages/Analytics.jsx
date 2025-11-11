import { useState } from "react";
import { StatCard } from "@/components/StatCard";
import { Car, TrendingDown, DollarSign, Package, Users, Calendar as CalendarIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";

// Full year data
const allRevenueData = [
  { month: "Jan", current: 9, previous: 8 },
  { month: "Feb", current: 7, previous: 9 },
  { month: "Mar", current: 9, previous: 10 },
  { month: "Apr", current: 8, previous: 9 },
  { month: "May", current: 11, previous: 7 },
  { month: "Jun", current: 6, previous: 8 },
  { month: "Jul", current: 10, previous: 9 },
  { month: "Aug", current: 12, previous: 10 },
  { month: "Sep", current: 8, previous: 11 },
  { month: "Oct", current: 9, previous: 8 },
  { month: "Nov", current: 11, previous: 9 },
  { month: "Dec", current: 10, previous: 10 },
];

const allVehicleData = [
  { month: "Jan", Atom: 9, Koko: 8, Marveil: 7, Pedro: 6, Shadow: 9, Noah: 10, Sherz: 8, Lisa: 7 },
  { month: "Feb", Atom: 8, Koko: 9, Marveil: 8, Pedro: 7, Shadow: 10, Noah: 9, Sherz: 7, Lisa: 8 },
  { month: "Mar", Atom: 7, Koko: 7, Marveil: 9, Pedro: 8, Shadow: 8, Noah: 7, Sherz: 9, Lisa: 9 },
  { month: "Apr", Atom: 9, Koko: 8, Marveil: 7, Pedro: 9, Shadow: 9, Noah: 8, Sherz: 8, Lisa: 10 },
  { month: "May", Atom: 10, Koko: 9, Marveil: 8, Pedro: 7, Shadow: 10, Noah: 9, Sherz: 9, Lisa: 8 },
  { month: "Jun", Atom: 8, Koko: 7, Marveil: 9, Pedro: 8, Shadow: 8, Noah: 10, Sherz: 7, Lisa: 9 },
  { month: "Jul", Atom: 9, Koko: 10, Marveil: 8, Pedro: 9, Shadow: 9, Noah: 8, Sherz: 10, Lisa: 7 },
  { month: "Aug", Atom: 11, Koko: 9, Marveil: 10, Pedro: 8, Shadow: 10, Noah: 9, Sherz: 8, Lisa: 9 },
  { month: "Sep", Atom: 8, Koko: 8, Marveil: 7, Pedro: 10, Shadow: 9, Noah: 7, Sherz: 9, Lisa: 10 },
  { month: "Oct", Atom: 9, Koko: 9, Marveil: 8, Pedro: 7, Shadow: 8, Noah: 10, Sherz: 8, Lisa: 8 },
  { month: "Nov", Atom: 10, Koko: 8, Marveil: 9, Pedro: 9, Shadow: 10, Noah: 8, Sherz: 9, Lisa: 9 },
  { month: "Dec", Atom: 9, Koko: 10, Marveil: 8, Pedro: 8, Shadow: 9, Noah: 9, Sherz: 10, Lisa: 8 },
];

export default function Analytics() {
  const currentMonth = new Date().getMonth();
  const sixMonthsAgo = Math.max(0, currentMonth - 5);
  
  const [customDateRange, setCustomDateRange] = useState({
    from: new Date(new Date().getFullYear(), sixMonthsAgo, 1),
    to: new Date(new Date().getFullYear(), currentMonth, 1),
  });
  const [isCustomPopoverOpen, setIsCustomPopoverOpen] = useState(false);

  const getFilteredData = () => {
    if (customDateRange.from && customDateRange.to) {
      const fromMonth = customDateRange.from.getMonth();
      const toMonth = customDateRange.to.getMonth();
      return {
        revenue: allRevenueData.slice(fromMonth, toMonth + 1),
        vehicles: allVehicleData.slice(fromMonth, toMonth + 1),
      };
    }
    // Default to 6 months
    return {
      revenue: allRevenueData.slice(sixMonthsAgo, currentMonth + 1),
      vehicles: allVehicleData.slice(sixMonthsAgo, currentMonth + 1),
    };
  };

  const { revenue: revenueData, vehicles: vehicleData } = getFilteredData();

  return (
    <div>
      <div className="flex gap-2 mb-6 flex-wrap">
        <Popover open={isCustomPopoverOpen} onOpenChange={setIsCustomPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <CalendarIcon className="w-4 h-4" />
              Date Range
              {customDateRange.from && customDateRange.to && (
                <span className="ml-1 text-xs">
                  ({format(customDateRange.from, "MMM")} - {format(customDateRange.to, "MMM")})
                </span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="p-3">
              <p className="text-sm font-medium mb-2">Select Date Range (Min 6 months)</p>
              <Calendar
                mode="range"
                selected={{ from: customDateRange.from, to: customDateRange.to }}
                onSelect={(range) => {
                  setCustomDateRange({ from: range?.from, to: range?.to });
                  if (range?.from && range?.to) {
                    setIsCustomPopoverOpen(false);
                  }
                }}
                numberOfMonths={2}
                defaultMonth={customDateRange.from}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <StatCard
          title="Completed Rent"
          value="121"
          subtitle="Successfully returned vehicles"
          icon={Car}
          valueColorClass="text-stat-blue"
          iconColorClass="bg-stat-blue/10 text-stat-blue"
        />
        <StatCard
          title="Declined Rent"
          value="121"
          subtitle="Successfully returned vehicles"
          icon={TrendingDown}
          valueColorClass="text-stat-red"
          iconColorClass="bg-stat-red/10 text-stat-red"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2 p-6">
          <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="hsl(var(--stat-orange))" 
                strokeWidth={2}
                name="This Period"
              />
              <Line 
                type="monotone" 
                dataKey="previous" 
                stroke="hsl(var(--muted-foreground))" 
                strokeWidth={2}
                name="Previous Period"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Total Rent</h3>
              <Package className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-4xl font-bold mb-1">
              {revenueData.reduce((sum, month) => sum + month.current, 0)}
            </p>
            <p className="text-sm text-muted-foreground">This period</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Previous Period</h3>
              <Package className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-4xl font-bold mb-1">
              {revenueData.reduce((sum, month) => sum + month.previous, 0)}
            </p>
            <p className="text-sm text-muted-foreground">Comparison</p>
          </Card>
        </div>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Total Rent per Vehicle</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={vehicleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Atom" fill="#f59e0b" />
            <Bar dataKey="Koko" fill="#3b82f6" />
            <Bar dataKey="Marveil" fill="#8b5cf6" />
            <Bar dataKey="Pedro" fill="#ec4899" />
            <Bar dataKey="Shadow" fill="#10b981" />
            <Bar dataKey="Noah" fill="#ef4444" />
            <Bar dataKey="Sherz" fill="#06b6d4" />
            <Bar dataKey="Lisa" fill="#84cc16" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
