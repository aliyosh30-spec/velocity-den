import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Booking />
      
      {/* Footer */}
      <footer className="gradient-card border-t border-border/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-montserrat font-black text-foreground mb-2">
              ELITE<span className="text-primary">AUTO</span>
            </h3>
            <p className="text-muted-foreground font-open-sans">
              Precision. Performance. Perfection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-montserrat font-bold text-foreground mb-4">CONTACT</h4>
              <p className="text-muted-foreground font-open-sans">
                (555) 123-AUTO<br />
                info@eliteauto.com<br />
                123 Performance Blvd<br />
                Motor City, MC 12345
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold text-foreground mb-4">HOURS</h4>
              <p className="text-muted-foreground font-open-sans">
                Monday - Friday: 8AM - 6PM<br />
                Saturday: 9AM - 4PM<br />
                Sunday: Emergency Only<br />
                24/7 Roadside Assistance
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold text-foreground mb-4">CERTIFICATIONS</h4>
              <p className="text-muted-foreground font-open-sans">
                ASE Certified Technicians<br />
                BMW Specialist<br />
                Mercedes-Benz Certified<br />
                Porsche Authorized Service
              </p>
            </div>
          </div>
          
          <div className="border-t border-border/20 pt-8">
            <p className="text-muted-foreground font-open-sans">
              © 2024 Elite Automotive. All rights reserved. | Precision engineering for premium vehicles.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
