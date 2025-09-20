import { Heart, Target, Zap, Rocket, Lightbulb } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "Pushing boundaries with creative solutions" },
  { icon: Heart, title: "Integrity", description: "Building trust through transparent practices" },
  { icon: Zap, title: "Efficiency", description: "Delivering results with optimal performance" },
  { icon: Rocket, title: "Impact", description: "Creating meaningful change for businesses" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-8">
            About Olivium
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-primary font-medium mb-8 leading-relaxed">
              "At Olivium, we merge technology with creativity to craft solutions that inspire, engage, and deliver results."
            </p>
          </div>
        </div>

        {/* Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="font-heading font-bold text-3xl text-foreground mb-6">
              Who We Are
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A team of passionate software engineers, designers, and innovators based in the Netherlands and the Middle East. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in mobile apps, backend microservices, and AI-powered products that transform businesses and enhance user experiences.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-primary rounded-3xl p-8 text-white shadow-brand">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-xl opacity-90">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="font-heading font-bold text-3xl text-foreground mb-8">
            Our Values
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border/50 
                         hover:border-primary/30 transition-all duration-300 hover:shadow-soft"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-accent/20 rounded-full 
                              flex items-center justify-center">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h4 className="font-heading font-bold text-xl text-foreground mb-3">
                {value.title}
              </h4>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;