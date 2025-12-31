import logo from "@/assets/aethelmaia-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Aethelmaia" 
              className="h-10 w-auto brightness-0 invert opacity-70"
            />
          </div>

          {/* Links */}
          <div className="flex items-center justify-center gap-8">
            {["Services", "Work", "About", "Contact"].map((link) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`} 
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-right">
            © {currentYear} Aethelmaia
          </p>
        </div>

        {/* Tagline */}
        <p className="text-center text-muted-foreground/50 text-sm mt-12 font-serif italic">
          Turning ideas into digital products that work and delight.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
