import { Smartphone, Server, Brain, Globe, Settings, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native Android (Kotlin) & iOS (Swift), Cross-platform with Flutter",
    features: ["Native iOS & Android", "Flutter Cross-platform", "App Store Optimization"]
  },
  {
    icon: Server,
    title: "Backend & Microservices",
    description: ".NET, Go, Python, Ruby on Rails, API design & system architecture",
    features: ["Microservices Architecture", "API Design", "Database Optimization"]
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "AI-driven apps (face recognition, chatbots, recommendation engines), Automation solutions",
    features: ["Machine Learning", "Computer Vision", "Natural Language Processing"]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "React, Angular, Vue.js, Tailored UI/UX experiences",
    features: ["Modern Frameworks", "Responsive Design", "Progressive Web Apps"]
  },
  {
    icon: Settings,
    title: "Consulting & Strategy",
    description: "Architecture reviews, Digital transformation roadmaps",
    features: ["Technical Audits", "Digital Strategy", "Performance Optimization"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From mobile apps to AI integration, we provide comprehensive digital solutions 
            that drive your business forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border/50 
                         shadow-soft hover:shadow-brand transition-all duration-300 
                         hover:scale-105 hover:border-primary/20"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-primary rounded-xl 
                              flex items-center justify-center group-hover:shadow-glow 
                              transition-all duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white shadow-brand">
            <h3 className="font-heading font-bold text-3xl mb-4">
              Ready to Transform Your Ideas?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with cutting-edge technology
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary font-semibold px-8 py-4 rounded-xl 
                         hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;