const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Flutter", category: "Mobile" },
  { name: "WordPress", category: "CMS" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Next.js", category: "Framework" },
];

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technologies We Master
          </h2>
          <p className="text-muted-foreground text-lg">
            We work with modern, battle-tested technologies to deliver robust 
            and scalable digital solutions.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative p-6 rounded-xl bg-card border border-border/50 text-center hover:border-primary/30 hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-xs text-accent font-medium uppercase tracking-wider block mb-2">
                {tech.category}
              </span>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional text */}
        <p className="text-center text-muted-foreground mt-12">
          ...and many more technologies tailored to your project needs.
        </p>
      </div>
    </section>
  );
};

export default TechnologiesSection;
