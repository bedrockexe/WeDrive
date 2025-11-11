import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Calendar as CalendarIcon, ChevronRight } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";

const rentData = [
  { month: "Jul", value: 5 },
  { month: "Aug", value: 15 },
  { month: "Sep", value: 10 },
  { month: "Oct", value: 5 },
];

const topVehicles = [
  { name: "Jeson", rentals: 45 },
  { name: "Jeremiah", rentals: 38 },
  { name: "Shadow", rentals: 32 },
  { name: "Atom", rentals: 28 },
  { name: "Noah", rentals: 22 },
];

const fleetData = [
  { vehicle: "SHADOW", customer: "Kenn Jarangue", returnDate: "Sept 31, 2025", status: "Due Soon" },
  { vehicle: "SHADOW", customer: "Kenn Jarangue", returnDate: "Sept 31, 2025", status: "Due Soon" },
];

const rentRequests = [
  {
    name: "John Doe",
    daysAgo: "2 days ago",
    guests: "2-4",
    pickup: "Tanza, Cavite",
    pickupDate: "Jan 12, 2025",
    returnDate: "Jan 14, 2025",
  },
  {
    name: "John Doe",
    daysAgo: "2 days ago",
    guests: "2-4",
    pickup: "Tanza, Cavite",
    pickupDate: "Jan 12, 2025",
    returnDate: "Jan 14, 2025",
  },
];

export default function Dashboard() {
  return (
    <div>
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Link to="/customers">
          <Card className="p-6 bg-primary/10 hover:bg-primary/15 transition-colors cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 mb-3 text-primary" />
              <h3 className="font-bold text-lg mb-1">Customers</h3>
              <p className="text-sm text-muted-foreground">Manage Customer Inquiries</p>
            </div>
          </Card>
        </Link>

        <Link to="/analytics">
          <Card className="p-6 bg-primary/10 hover:bg-primary/15 transition-colors cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <TrendingUp className="w-12 h-12 mb-3 text-primary" />
              <h3 className="font-bold text-lg mb-1">Analytics</h3>
              <p className="text-sm text-muted-foreground">Manage Customer Inquiries</p>
            </div>
          </Card>
        </Link>

        <Link to="/calendar">
          <Card className="p-6 bg-primary/10 hover:bg-primary/15 transition-colors cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <CalendarIcon className="w-12 h-12 mb-3 text-primary" />
              <h3 className="font-bold text-lg mb-1">Calendar</h3>
              <p className="text-sm text-muted-foreground">Manage Customer Inquiries</p>
            </div>
          </Card>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Rent Overview */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="font-bold text-xl mb-6">Monthly Rent Overview</h3>
          
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={rentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="10"
                    strokeDasharray="175.93 251.33"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dy="0.3em"
                    className="text-xl font-bold fill-foreground"
                  >
                    70%
                  </text>
                </svg>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center max-w-[140px]">
                Rent performance lorem ipsum dolor limit.
              </p>
            </div>
          </div>

          <Button variant="outline" className="mt-6">
            See Details
          </Button>
        </Card>

        {/* Fleet Availability */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bold text-xl">Fleet Availability</h3>
              <p className="text-sm text-muted-foreground">Lorem ipsum dolor innit olo payt</p>
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              See all (5) <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="space-y-4">
            {fleetData.map((item, index) => (
              <div key={index} className="space-y-2 pb-4 border-b last:border-0">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Vehicle</p>
                    <p className="font-semibold flex items-center gap-2">
                      🚗 {item.vehicle}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Customer</p>
                    <p className="font-semibold flex items-center gap-2">
                      👤 {item.customer}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Return Date</p>
                    <p className="text-primary">📅 {item.returnDate}</p>
                    <p className="text-xs text-muted-foreground">9 days left</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Status</p>
                    <p className="font-semibold">{item.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Top Leading Vehicles */}
        <Card className="p-6">
          <h3 className="font-bold text-xl mb-6">Top leading vehicle(s)</h3>
          
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topVehicles}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Bar dataKey="rentals" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Rent Requests */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bold text-xl">Rent Requests</h3>
              <p className="text-sm text-muted-foreground">Lorem ipsum dolor innit olo payt</p>
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              See all (5) <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {rentRequests.map((request, index) => (
              <Card key={index} className="p-4 bg-muted/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{request.name}</p>
                    <p className="text-xs text-muted-foreground">{request.daysAgo}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-background rounded">
                    👥 {request.guests}
                  </span>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Pickup Location</p>
                    <p className="font-medium">📍 {request.pickup}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <p className="text-muted-foreground text-xs">Pickup</p>
                      <p className="font-medium text-xs">📅 {request.pickupDate}</p>
                    </div>
                  </div>

                  <div className="border-t border-dashed pt-2">
                    <div className="flex-1">
                      <p className="text-muted-foreground text-xs">Return</p>
                      <p className="font-medium text-xs">📅 {request.returnDate}</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full mt-4">
                  See other Details
                </Button>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
