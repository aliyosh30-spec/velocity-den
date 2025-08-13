import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-garage.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elite automotive repair shop with premium sports cars"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full gradient-card border border-primary/20 mb-8">
            <span className="text-primary font-montserrat font-bold text-sm tracking-wider">
              ASE CERTIFIED • 15+ YEARS EXPERIENCE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-foreground mb-6 tracking-tight">
            PRECISION.{" "}
            <span className="text-primary electric-glow inline-block">
              PERFORMANCE.
            </span>{" "}
            PERFECTION.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground font-open-sans max-w-3xl mx-auto mb-12 leading-relaxed">
            Elite automotive repair and customization services for premium vehicles. 
            Where Formula 1 precision meets luxury showroom standards.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              BOOK SERVICE
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="secondary-outline" size="lg" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              VIEW SERVICES
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "VEHICLES SERVICED" },
              { number: "15+", label: "YEARS EXPERIENCE" },
              { number: "24/7", label: "EMERGENCY SERVICE" },
              { number: "100%", label: "SATISFACTION RATE" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-montserrat font-black text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-montserrat font-semibold text-muted-foreground tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;