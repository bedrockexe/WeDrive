import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const initialVehicles = [
  {
    id: 1,
    name: "SHADOW",
    model: "Ford Fiesta 2014",
    plateNumber: "NCT 505",
    status: "maintenance",
  },
  {
    id: 2,
    name: "ATOM",
    model: "Toyota Corolla 2018",
    plateNumber: "ABC 123",
    status: "completed",
  },
  {
    id: 3,
    name: "KOKO",
    model: "Honda Civic 2016",
    plateNumber: "XYZ 789",
    status: "maintenance",
  },
  {
    id: 4,
    name: "MARVEIL",
    model: "Nissan Sentra 2019",
    plateNumber: "DEF 456",
    status: "cancelled",
  },
  {
    id: 5,
    name: "PEDRO",
    model: "Mazda 3 2017",
    plateNumber: "GHI 012",
    status: "completed",
  },
  {
    id: 6,
    name: "LISA",
    model: "Honda Accord 2020",
    plateNumber: "JKL 345",
    status: "ready",
  },
];

export default function FleetManagement() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [vehicles, setVehicles] = useState(initialVehicles);
  const { toast } = useToast();

  const statusFilters = [
    { label: "All Rent", value: "all", count: vehicles.length },
    { label: "Completed", value: "completed", count: vehicles.filter(v => v.status === "completed").length },
    { label: "Maintenance", value: "maintenance", count: vehicles.filter(v => v.status === "maintenance").length },
    { label: "Cancelled", value: "cancelled", count: vehicles.filter(v => v.status === "cancelled").length },
    { label: "Ready", value: "ready", count: vehicles.filter(v => v.status === "ready").length },
  ];

  const filteredVehicles = activeFilter === "all" 
    ? vehicles 
    : vehicles.filter(v => v.status === activeFilter);

  const handleStatusChange = (vehicleId, newStatus) => {
    setVehicles(prevVehicles => 
      prevVehicles.map(vehicle => 
        vehicle.id === vehicleId 
          ? { ...vehicle, status: newStatus }
          : vehicle
      )
    );
    
    const vehicle = vehicles.find(v => v.id === vehicleId);
    toast({
      title: "Status Updated",
      description: `${vehicle?.name} has been marked as ${newStatus}.`,
    });
  };

  return (
    <div>
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {statusFilters.map((filter) => (
          <Button
            key={filter.value}
            variant={activeFilter === filter.value ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter.value)}
            className="rounded-full whitespace-nowrap flex-shrink-0"
          >
            {filter.label}
            <Badge variant="secondary" className="ml-2">
              {filter.count}
            </Badge>
          </Button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredVehicles.map((vehicle) => {
          const statusConfig = {
            maintenance: { bg: "bg-status-maintenance", label: "Maintenance" },
            completed: { bg: "bg-stat-green", label: "Completed" },
            cancelled: { bg: "bg-stat-red", label: "Cancelled" },
            ready: { bg: "bg-stat-blue", label: "Ready" },
          };
          const config = statusConfig[vehicle.status];

          return (
            <Card key={vehicle.id} className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold">{vehicle.name}</h3>
                    <Badge 
                      variant="secondary" 
                      className={`${config.bg} text-foreground whitespace-nowrap`}
                    >
                      {config.label}
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 shrink-0" />
                      <span className="truncate">{vehicle.model}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 shrink-0" />
                      <span>{vehicle.plateNumber}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-row items-center gap-2">
                  {vehicle.status === "maintenance" && (
                    <Button 
                      size="sm" 
                      className="bg-status-maintenance hover:bg-status-maintenance/90 text-foreground whitespace-nowrap"
                      onClick={() => handleStatusChange(vehicle.id, "completed")}
                    >
                      Mark as Complete
                    </Button>
                  )}
                  {vehicle.status === "cancelled" && (
                    <Button 
                      size="sm" 
                      className="bg-stat-blue hover:bg-stat-blue/90 text-white whitespace-nowrap"
                      onClick={() => handleStatusChange(vehicle.id, "ready")}
                    >
                      Mark as Ready
                    </Button>
                  )}
                  {vehicle.status === "completed" && (
                    <Button 
                      size="sm" 
                      className="bg-stat-blue hover:bg-stat-blue/90 text-white whitespace-nowrap"
                      onClick={() => handleStatusChange(vehicle.id, "ready")}
                    >
                      Mark as Ready
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
