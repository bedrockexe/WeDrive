import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Car,
  CreditCard,
  CheckCircle,
  XCircle
} from "lucide-react";

export default function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card className="p-6">
          <div className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-lg mb-6">
            Personal Information
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">First Name</p>
                <p className="font-semibold">Kenn</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Last Name</p>
                <p className="font-semibold">Jarangue</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-semibold">BLK ## LOT ## Regal Homes, Alapan 1-A</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Contact No.</p>
                <p className="font-semibold">96923882551325</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold">example@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <div className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-lg mb-6">
              Vehicle Information
            </div>
            
            <div className="flex items-start gap-3">
              <Car className="w-5 h-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Vehicle</p>
                <p className="font-semibold">Shadow - Ford Fiesta 2014 SRT</p>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Rent Information */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-lg mb-6">
              Rent Information
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pickup</p>
                <p className="font-bold text-lg">Sept 21, 2025</p>
                <p className="text-sm text-muted-foreground mt-2">From</p>
                <p className="font-semibold">Imus, Cavite</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Return</p>
                <p className="font-bold text-lg">Sept 21, 2025</p>
                <p className="text-sm text-muted-foreground mt-2">To</p>
                <p className="font-semibold">Lucena, Quezon</p>
              </div>
            </div>
          </Card>
          
          {/* ID Card */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-pink-50">
            <div className="aspect-[1.6/1] bg-white rounded-lg shadow-lg p-4 flex items-center justify-center">
              <CreditCard className="w-24 h-24 text-muted-foreground" />
            </div>
          </Card>
          
          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button 
              variant="destructive" 
              className="flex-1 h-12"
              size="lg"
            >
              <XCircle className="w-5 h-5 mr-2" />
              DECLINE
            </Button>
            <Button 
              className="flex-1 h-12 bg-primary hover:bg-primary/90"
              size="lg"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              APPROVE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
