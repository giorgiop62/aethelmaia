const technologies = [
  "React", "Vue.js", "Flutter", "WordPress", "TypeScript", "Node.js", "Tailwind", "Next.js"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 lg:py-40 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                About Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8">
              Two Cultures,<br />One Vision
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Aethelmaia brings together the best of two worlds: the warmth, aesthetics, 
              and artistic heritage of Italian design with the precision, reliability, 
              and engineering excellence of German craftsmanship.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our collaborative, creative, and results-driven approach has helped 
              restaurants, startups, e-commerce brands, and innovative companies 
              transform their digital presence.
            </p>

            {/* Locations */}
            <div className="flex gap-12 mt-12 pt-12 border-t border-border">
              <div>
                <span className="text-3xl mb-2 block">🇮🇹</span>
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Italy</span>
                <p className="text-sm text-foreground mt-1">Creativity & Passion</p>
              </div>
              <div>
                <span className="text-3xl mb-2 block">🇩🇪</span>
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Germany</span>
                <p className="text-sm text-foreground mt-1">Precision & Excellence</p>
              </div>
            </div>
          </div>

          {/* Right Column - Technologies */}
          <div className="lg:pt-24">
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-8">
              Technologies We Master
            </span>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={tech}
                  className="group py-4 px-5 border border-border hover:border-accent/50 hover:bg-card transition-all duration-300"
                >
                  <span className="text-foreground group-hover:text-accent transition-colors duration-300">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              ...and many more tailored to your project needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
