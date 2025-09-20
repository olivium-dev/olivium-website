import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Rahma",
    description: "A microservice-based charity donation platform with seamless payment integration and transparent donation tracking.",
    tech: ["Microservices", "Payment Gateway", "React", "Node.js"],
    impact: "Streamlined donation process for 10,000+ users"
  },
  {
    title: "Saawt",
    description: "Audiobook platform similar to Audible with AI-powered recommendations and offline listening capabilities.",
    tech: ["React Native", "AI/ML", "Cloud Storage", "Payment Processing"],
    impact: "Enhanced audio experience for book lovers"
  },
  {
    title: "Kremati",
    description: "AI-powered cosmetics e-commerce platform with virtual try-on features and personalized product recommendations.",
    tech: ["AI/Computer Vision", "E-commerce", "Mobile App", "Python"],
    impact: "Revolutionized online beauty shopping experience"
  },
  {
    title: "Vasting Maker",
    description: "Smart digital solutions to streamline workflows and content management for creative professionals.",
    tech: ["Workflow Automation", "CMS", "React", "API Integration"],
    impact: "Increased productivity by 40% for creative teams"
  },
  {
    title: "Jaikar",
    description: "Card game scoring application designed for smooth group play and diwaniyah gatherings.",
    tech: ["Mobile App", "Real-time Sync", "Firebase", "React Native"],
    impact: "Enhanced social gaming experience"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their ideas into successful digital solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border/50 
                         shadow-soft hover:shadow-brand transition-all duration-300 
                         hover:scale-105 hover:border-primary/20"
            >
              <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-accent/20 text-primary text-sm rounded-full 
                                 font-medium border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Impact */}
              <div className="mb-6">
                <div className="bg-gradient-subtle rounded-lg p-4 border border-primary/10">
                  <p className="text-sm text-primary font-medium">
                    💡 {project.impact}
                  </p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
                                   bg-primary text-primary-foreground rounded-lg 
                                   hover:bg-primary/90 transition-all duration-300 
                                   font-medium text-sm group-hover:scale-105">
                  <ExternalLink className="w-4 h-4" />
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-card rounded-2xl p-8 border border-border/50 shadow-soft">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Let's discuss how we can bring your vision to life with innovative technology solutions.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold 
                         hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;