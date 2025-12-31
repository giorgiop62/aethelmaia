import logo from "@/assets/aethelmaia-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Aethelmaia Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="#services" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a 
              href="#technologies" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Technologies
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aethelmaia. All rights reserved.
          </p>
        </div>

        {/* Tagline */}
        <p className="text-center text-muted-foreground/60 text-sm mt-8">
          Turning your ideas into digital products that work and delight users.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
