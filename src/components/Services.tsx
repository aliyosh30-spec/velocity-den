import { Wrench, Zap, Shield, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "PRECISION REPAIRS",
      description: "Advanced diagnostic technology and expert craftsmanship for all premium vehicles.",
      features: ["Engine Diagnostics", "Transmission Service", "Brake Systems", "Electrical Repairs"],
      price: "From $150",
    },
    {
      icon: Zap,
      title: "PERFORMANCE TUNING",
      description: "Unlock your vehicle's full potential with professional performance modifications.",
      features: ["ECU Tuning", "Exhaust Systems", "Cold Air Intakes", "Suspension Upgrades"],
      price: "From $500",
    },
    {
      icon: Shield,
      title: "PREVENTIVE MAINTENANCE",
      description: "Comprehensive maintenance programs to keep your vehicle in peak condition.",
      features: ["Oil Changes", "Filter Replacements", "Fluid Services", "Multi-Point Inspections"],
      price: "From $80",
    },
    {
      icon: Trophy,
      title: "CUSTOM MODIFICATIONS",
      description: "Personalized upgrades and modifications tailored to your unique vision.",
      features: ["Body Kits", "Custom Paint", "Interior Upgrades", "Wheel & Tire Packages"],
      price: "Quote Required",
    },
  ];

  return (
    <section id="services" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-black text-foreground mb-6 tracking-tight">
            ELITE <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground font-open-sans max-w-3xl mx-auto leading-relaxed">
            From routine maintenance to high-performance modifications, our certified technicians deliver excellence in every service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="gradient-card border-border/20 card-shadow hover:electric-glow transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full gradient-electric w-16 h-16 flex items-center justify-center group-hover:animate-electric-glow">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-montserrat font-black text-foreground mb-2 tracking-wide">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-muted-foreground font-open-sans mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground font-open-sans">
                      • {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-border/20 pt-6">
                  <div className="text-2xl font-montserrat font-black text-primary mb-4">
                    {service.price}
                  </div>
                  <Button variant="hero" size="sm" className="w-full group">
                    <Calendar className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    BOOK NOW
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="gradient-card border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-montserrat font-black text-foreground mb-4">
              EMERGENCY ROADSIDE ASSISTANCE
            </h3>
            <p className="text-muted-foreground font-open-sans mb-6">
              24/7 emergency services available. We'll get you back on the road, fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                CALL (555) 123-AUTO
              </Button>
              <Button variant="secondary-outline" size="lg">
                REQUEST CALLBACK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;