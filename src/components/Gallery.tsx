import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import carDetail from "@/assets/car-detail-1.jpg";
import beforeAfter from "@/assets/before-after.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [
    {
      src: carDetail,
      alt: "Premium sports car wheel and brake system detail",
      category: "Detail Work",
    },
    {
      src: beforeAfter,
      alt: "Before and after vehicle transformation",
      category: "Restoration",
    },
    {
      src: carDetail,
      alt: "Custom performance modifications",
      category: "Performance",
    },
    {
      src: beforeAfter,
      alt: "Paint correction and ceramic coating",
      category: "Detailing",
    },
    {
      src: carDetail,
      alt: "Engine bay restoration",
      category: "Restoration",
    },
    {
      src: beforeAfter,
      alt: "Custom exhaust installation",
      category: "Performance",
    },
  ];

  const categories = ["All", "Performance", "Restoration", "Detailing", "Detail Work"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-black text-foreground mb-6 tracking-tight">
            OUR <span className="text-primary">WORK</span>
          </h2>
          <p className="text-xl text-muted-foreground font-open-sans max-w-3xl mx-auto leading-relaxed">
            Precision craftsmanship and attention to detail in every project. See the transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "hero" : "secondary-outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="transition-electric"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Image Slider */}
        <div className="relative mb-12 overflow-hidden rounded-lg">
          <div className="relative h-[400px] md:h-[600px]">
            <img
              src={filteredImages[selectedImage]?.src}
              alt={filteredImages[selectedImage]?.alt}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 gradient-card border border-primary/20 rounded-full hover:electric-glow transition-electric"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 gradient-card border border-primary/20 rounded-full hover:electric-glow transition-electric"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <div className="gradient-card border border-primary/20 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">
                  {filteredImages[selectedImage]?.alt}
                </h3>
                <span className="inline-block px-3 py-1 gradient-electric text-primary-foreground text-sm font-montserrat font-bold rounded-full">
                  {filteredImages[selectedImage]?.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {filteredImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative group overflow-hidden rounded-lg aspect-square transition-electric ${
                selectedImage === index ? 'ring-2 ring-primary electric-glow' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-primary/20 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-6 h-6 text-foreground" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="gradient-card border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-montserrat font-black text-foreground mb-4">
              READY TO TRANSFORM YOUR VEHICLE?
            </h3>
            <p className="text-muted-foreground font-open-sans mb-6">
              Schedule a consultation and let our experts create a custom solution for your automotive needs.
            </p>
            <Button variant="hero" size="lg">
              START YOUR PROJECT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;