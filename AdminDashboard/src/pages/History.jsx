import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Filter, Download, Calendar as CalendarIcon } from "lucide-react";
import { StatusIndicator } from "@/components/StatusIndicator";

const historyData = [
  {
    id: "RNT-2025-001",
    customer: "Kenn Jarangue",
    vehicle: "Shadow - Ford Fiesta 2014",
    pickupDate: "Sept 15, 2025",
    returnDate: "Sept 18, 2025",
    amount: "PHP 15,000",
    status: "completed",
    paymentStatus: "paid",
  },
  {
    id: "RNT-2025-002",
    customer: "Maria Santos",
    vehicle: "Atom - Toyota Vios 2018",
    pickupDate: "Sept 12, 2025",
    returnDate: "Sept 15, 2025",
    amount: "PHP 12,000",
    status: "completed",
    paymentStatus: "paid",
  },
  {
    id: "RNT-2025-003",
    customer: "Juan dela Cruz",
    vehicle: "Noah - Honda City 2020",
    pickupDate: "Sept 10, 2025",
    returnDate: "Sept 12, 2025",
    amount: "PHP 10,000",
    status: "cancelled",
    paymentStatus: "refunded",
  },
  {
    id: "RNT-2025-004",
    customer: "Sarah Lee",
    vehicle: "Sherz - Mitsubishi Mirage 2019",
    pickupDate: "Sept 8, 2025",
    returnDate: "Sept 11, 2025",
    amount: "PHP 9,000",
    status: "completed",
    paymentStatus: "paid",
  },
  {
    id: "RNT-2025-005",
    customer: "Michael Tan",
    vehicle: "Pedro - Hyundai Accent 2021",
    pickupDate: "Sept 5, 2025",
    returnDate: "Sept 8, 2025",
    amount: "PHP 11,500",
    status: "completed",
    paymentStatus: "paid",
  },
  {
    id: "RNT-2025-006",
    customer: "Anna Garcia",
    vehicle: "Koko - Nissan Almera 2017",
    pickupDate: "Sept 3, 2025",
    returnDate: "Sept 5, 2025",
    amount: "PHP 8,000",
    status: "cancelled",
    paymentStatus: "refunded",
  },
  {
    id: "RNT-2025-007",
    customer: "David Wong",
    vehicle: "Marveil - Mazda 2 2020",
    pickupDate: "Aug 30, 2025",
    returnDate: "Sept 2, 2025",
    amount: "PHP 10,500",
    status: "completed",
    paymentStatus: "paid",
  },
  {
    id: "RNT-2025-008",
    customer: "Lisa Chen",
    vehicle: "Lisa - Suzuki Swift 2019",
    pickupDate: "Aug 28, 2025",
    returnDate: "Aug 30, 2025",
    amount: "PHP 7,500",
    status: "completed",
    paymentStatus: "paid",
  },
];

export default function History() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentFilter, setPaymentFilter] = useState("all");

  const filteredData = historyData.filter((rental) => {
    const matchesSearch =
      rental.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rental.vehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rental.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || rental.status === statusFilter;
    const matchesPayment = paymentFilter === "all" || rental.paymentStatus === paymentFilter;

    return matchesSearch && matchesStatus && matchesPayment;
  });

  return (
    <div>
      <div className="flex items-center justify-end mb-6">
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Export History
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Total Rentals</p>
          <p className="text-2xl font-bold">{historyData.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Completed</p>
          <p className="text-2xl font-bold text-stat-blue">
            {historyData.filter((r) => r.status === "completed").length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Cancelled</p>
          <p className="text-2xl font-bold text-stat-red">
            {historyData.filter((r) => r.status === "cancelled").length}
          </p>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by customer, vehicle, or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
              <SelectItem value="active">Active</SelectItem>
            </SelectContent>
          </Select>

          <Select value={paymentFilter} onValueChange={setPaymentFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Payment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Payments</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="refunded">Refunded</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* History Table */}
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rental ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Pickup Date</TableHead>
                <TableHead>Return Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((rental) => (
                  <TableRow key={rental.id}>
                    <TableCell className="font-medium">{rental.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-xs font-semibold">
                            {rental.customer.split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                        <span>{rental.customer}</span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-48">{rental.vehicle}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-3 h-3 text-muted-foreground" />
                        {rental.pickupDate}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-3 h-3 text-muted-foreground" />
                        {rental.returnDate}
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">{rental.amount}</TableCell>
                    <TableCell>
                      <StatusIndicator status={rental.status} />
                    </TableCell>
                    <TableCell>
                      <StatusIndicator status={rental.paymentStatus} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No rental history found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
          <p>
            Showing {filteredData.length} of {historyData.length} rentals
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
