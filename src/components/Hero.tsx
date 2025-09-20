import { Button } from "@/components/ui/button";
import heroWaves from "@/assets/hero-waves.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWaves})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Olivium
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-medium">
            Turning Ideas Into Digital Reality
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="text-lg px-8 py-4 font-semibold transition-smooth hover:scale-105"
          >
            Our Work
          </Button>
          <Button 
            variant="hero-outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="text-lg px-8 py-4 font-semibold transition-smooth hover:scale-105"
          >
            Get in Touch
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;