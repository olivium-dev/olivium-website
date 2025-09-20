import { Lightbulb, Shield, Users, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Smart solutions powered by creativity and technology."
  },
  {
    icon: Shield,
    title: "Quality", 
    description: "We deliver robust, scalable, and reliable digital products."
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Designed for seamless experiences."
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Helping businesses scale with future-ready tech."
  }
];

const Highlights = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Why Choose Olivium
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine innovation, quality, and user-centric design to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-card border border-border/50 
                         shadow-soft hover:shadow-brand transition-all duration-300 
                         hover:scale-105 hover:border-primary/20"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full 
                              flex items-center justify-center group-hover:shadow-glow 
                              transition-all duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;