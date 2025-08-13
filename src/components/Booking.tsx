import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, Car, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleInfo: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const serviceTypes = [
    "Precision Repairs",
    "Performance Tuning",
    "Preventive Maintenance",
    "Custom Modifications",
    "Emergency Service",
    "Consultation Only",
  ];

  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-black text-foreground mb-6 tracking-tight">
            BOOK YOUR <span className="text-primary">SERVICE</span>
          </h2>
          <p className="text-xl text-muted-foreground font-open-sans max-w-3xl mx-auto leading-relaxed">
            Schedule your appointment today and experience the Elite Automotive difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="gradient-card border-border/20 card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-black text-foreground">
                  GET IN TOUCH
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 gradient-electric rounded-full">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-foreground">(555) 123-AUTO</p>
                    <p className="text-sm text-muted-foreground">24/7 Emergency Line</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 gradient-electric rounded-full">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-foreground">info@eliteauto.com</p>
                    <p className="text-sm text-muted-foreground">General Inquiries</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 gradient-electric rounded-full">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-foreground">Mon - Fri: 8AM - 6PM</p>
                    <p className="text-sm text-muted-foreground">Sat: 9AM - 4PM</p>
                  </div>
                </div>

                <div className="mt-8 p-6 gradient-electric rounded-lg">
                  <h3 className="font-montserrat font-black text-primary-foreground mb-2">
                    EMERGENCY SERVICE
                  </h3>
                  <p className="text-primary-foreground/90 text-sm mb-4">
                    24/7 roadside assistance and emergency repairs available.
                  </p>
                  <Button variant="secondary-outline" size="sm" className="w-full">
                    CALL NOW
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="gradient-card border-border/20 card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-black text-foreground">
                  SCHEDULE APPOINTMENT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-montserrat font-semibold text-foreground">
                        Full Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="pl-10 gradient-card border-border/20 focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-montserrat font-semibold text-foreground">
                        Phone Number *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="pl-10 gradient-card border-border/20 focus:border-primary"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-montserrat font-semibold text-foreground">
                      Email Address *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10 gradient-card border-border/20 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicle" className="font-montserrat font-semibold text-foreground">
                      Vehicle Information *
                    </Label>
                    <div className="relative">
                      <Car className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="vehicle"
                        placeholder="Year, Make, Model (e.g., 2022 BMW M3)"
                        value={formData.vehicleInfo}
                        onChange={(e) => handleInputChange("vehicleInfo", e.target.value)}
                        className="pl-10 gradient-card border-border/20 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label className="font-montserrat font-semibold text-foreground">
                      Service Type *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                      <SelectTrigger className="gradient-card border-border/20 focus:border-primary">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent className="gradient-card border-border/20">
                        {serviceTypes.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="font-montserrat font-semibold text-foreground">
                        Preferred Date *
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="date"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          className="pl-10 gradient-card border-border/20 focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="font-montserrat font-semibold text-foreground">
                        Preferred Time *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                        <SelectTrigger className="gradient-card border-border/20 focus:border-primary">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="gradient-card border-border/20">
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-montserrat font-semibold text-foreground">
                      Additional Information
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Textarea
                        id="message"
                        placeholder="Tell us about any specific issues or requests..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="pl-10 pt-10 min-h-[120px] gradient-card border-border/20 focus:border-primary resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Calendar className="w-5 h-5 mr-2" />
                    BOOK APPOINTMENT
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields. We'll confirm your appointment within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;