import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { supabase } from "../lib/supabase";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarDays, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";


export default function BookingForm({ compact = false }) {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(null);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    service_type: "",
    pickup_location: "",
    dropoff_location: "",
    num_passengers: 1,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.full_name || !formData.email || !formData.phone || !formData.service_type) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
     const { error } = await supabase
  .from("nz_road_tours_enquiries")
  
  .insert([
    {
      full_name: formData.full_name,
      email: formData.email,
      phone: formData.phone,
      service_type: formData.service_type,
      pickup_location: formData.pickup_location,
      dropoff_location: formData.dropoff_location,
      travel_date: date ? format(date, "yyyy-MM-dd") : null,
      passengers: formData.num_passengers,
      message: formData.message,
    },
    
  ]);
  await fetch("https://rhqykhtabnadfjjufbgi.supabase.co/functions/v1/hyper-function", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    full_name: formData.full_name,
    email: formData.email,
    phone: formData.phone,
    service_type: formData.service_type,
    pickup_location: formData.pickup_location,
    dropoff_location: formData.dropoff_location,
    travel_date: date ? format(date, "yyyy-MM-dd") : null,
    passengers: formData.num_passengers,
    message: formData.message,
  }),
}); // we have updated this 

if (error) throw error;

      toast.success("Enquiry submitted! We'll get back to you within 24 hours.");
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        service_type: "",
        pickup_location: "",
        dropoff_location: "",
        num_passengers: 1,
        message: "",
      });
      setDate(null);
    } catch (error) {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "bg-white border-[#EAE5DB] focus:border-[#2D5A43] focus:ring-[#2D5A43]/20";

  return (
    <form onSubmit={handleSubmit} data-testid="booking-form" className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="full_name">Full Name *</Label>
          <Input
            id="full_name"
            name="full_name"
            data-testid="booking-full-name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="John Smith"
            className={inputClass}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            data-testid="booking-email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            name="phone"
            data-testid="booking-phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+64 21 234 5678"
            className={inputClass}
            required
          />
        </div>
        <div className="space-y-2">
          <Label>Service Type *</Label>
          <Select
            value={formData.service_type}
            onValueChange={(v) => setFormData({ ...formData, service_type: v })}
          >
            <SelectTrigger data-testid="booking-service-type" className={`${inputClass}`}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="airport-transfer">Airport Transfer</SelectItem>
              <SelectItem value="day-tour">Day Tour from Auckland</SelectItem>
              <SelectItem value="multi-day-tour">Multi-Day NZ Tour</SelectItem>
              <SelectItem value="chauffeur">Private Chauffeur</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="pickup_location">Pickup Location</Label>
          <Input
            id="pickup_location"
            name="pickup_location"
            data-testid="booking-pickup"
            value={formData.pickup_location}
            onChange={handleChange}
            placeholder="e.g., Auckland Airport"
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dropoff_location">Drop-off Location</Label>
          <Input
            id="dropoff_location"
            name="dropoff_location"
            data-testid="booking-dropoff"
            value={formData.dropoff_location}
            onChange={handleChange}
            placeholder="e.g., Rotorua"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Travel Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                data-testid="booking-date-picker"
                className={`w-full justify-start text-left font-normal ${inputClass} hover:bg-white`}
              >
                <CalendarDays className="mr-2 h-4 w-4 text-[#57685E]" />
                {date ? (
                  format(date, "PPP")
                ) : (
                  <span className="text-muted-foreground">Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => d < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="num_passengers">Number of Passengers</Label>
          <Input
            id="num_passengers"
            name="num_passengers"
            type="number"
            min="1"
            max="20"
            data-testid="booking-passengers"
            value={formData.num_passengers}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {!compact && (
        <div className="space-y-2">
          <Label htmlFor="message">Message / Special Requirements</Label>
          <Textarea
            id="message"
            name="message"
            data-testid="booking-message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your travel plans, any special requirements, or questions..."
            className={inputClass}
          />
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        data-testid="booking-submit-btn"
        className="w-full bg-[#D97746] hover:bg-[#BD6032] text-white py-3 rounded-lg text-base h-auto transition-colors duration-200"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Enquiry"
        )}
      </Button>
    </form>
  );
}
