const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl mb-2">
              Olivium
            </h3>
            <p className="text-white/80 text-sm">
              Turning Ideas Into Digital Reality
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/80 hover:text-white transition-colors text-sm 
                             hover:underline underline-offset-4"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-right">
            <div className="space-y-2">
              <p className="text-white/80 text-sm">
                <a 
                  href="mailto:connect@olivium.space" 
                  className="hover:text-white transition-colors"
                >
                  connect@olivium.space
                </a>
              </p>
              <p className="text-white/80 text-sm">
                <a 
                  href="https://www.olivium.space" 
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.olivium.space
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Olivium.space. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;