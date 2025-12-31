import { Globe, Smartphone, Code2, Palette, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites built with React, Vue.js, and cutting-edge technologies that perform beautifully on any device.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications using Flutter that deliver native-like experiences on iOS and Android.",
  },
  {
    icon: Code2,
    title: "Custom Solutions",
    description: "Tailored digital products designed to solve your unique business challenges and drive growth.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality to create memorable experiences.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized for speed and efficiency, ensuring your digital products load fast and run smoothly.",
  },
  {
    icon: Shield,
    title: "Maintenance",
    description: "Ongoing support and updates to keep your digital presence secure, current, and performing at its best.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            From Concept to Launch
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a complete range of digital services to bring your vision to life,
            from initial design to ongoing support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-elegant"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
