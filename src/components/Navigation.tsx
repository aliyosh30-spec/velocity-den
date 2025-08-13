import { useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "SERVICES", href: "#services" },
    { name: "GALLERY", href: "#gallery" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 gradient-bg border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-montserrat font-black text-foreground tracking-wider">
              ELITE<span className="text-primary">AUTO</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground font-montserrat font-semibold text-sm tracking-wide hover:text-primary transition-electric relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex items-center space-x-3 ml-6">
              <Button variant="outline" size="sm" className="hidden lg:flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (555) 123-AUTO
              </Button>
              <Button variant="hero" size="sm" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                BOOK NOW
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-electric"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 gradient-card border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground font-montserrat font-semibold hover:text-primary transition-electric"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-AUTO
                </Button>
                <Button variant="hero" size="sm" className="w-full justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  BOOK NOW
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;