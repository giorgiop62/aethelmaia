import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "E-Commerce",
    title: "Online Store Redesign",
    description: "Complete digital transformation for a fashion retailer",
    year: "2024",
  },
  {
    category: "Restaurant",
    title: "Culinary Experience",
    description: "Immersive website for a Michelin-starred restaurant",
    year: "2024",
  },
  {
    category: "Startup",
    title: "SaaS Platform",
    description: "Modern web application for a tech startup",
    year: "2023",
  },
  {
    category: "Corporate",
    title: "Brand Identity",
    description: "Digital presence for an innovative company",
    year: "2023",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32 lg:py-40 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">
              Selected Work
            </h2>
          </div>
          <a 
            href="#contact" 
            className="text-sm tracking-[0.2em] uppercase text-accent hover:text-accent-light hover-line transition-colors duration-300 self-start lg:self-end"
          >
            View All Projects
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-background border border-border overflow-hidden cursor-pointer transition-all duration-500 hover:border-accent/30"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl lg:text-8xl font-serif text-foreground/5 group-hover:text-foreground/10 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
              </div>

              {/* Project Info */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs tracking-[0.2em] uppercase text-accent">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-serif mb-2 group-hover:text-accent transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground transition-colors duration-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
