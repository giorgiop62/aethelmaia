import { Globe, Smartphone, Code2, Palette, Zap, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Web Development",
    description: "Modern, responsive websites built with React, Vue.js, and cutting-edge technologies.",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile Apps",
    description: "Cross-platform applications using Flutter for iOS and Android.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Custom Solutions",
    description: "Tailored digital products designed to solve your unique challenges.",
  },
  {
    icon: Palette,
    number: "04",
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality.",
  },
  {
    icon: Zap,
    number: "05",
    title: "CMS & WordPress",
    description: "Powerful content management systems that are easy to maintain.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                What We Do
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">
              Services
            </h2>
          </div>
          <div className="lg:pt-16">
            <p className="text-muted-foreground text-lg leading-relaxed">
              From initial concept to launch and beyond, we offer comprehensive 
              digital services tailored to your vision and goals.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-border">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group border-b border-border py-8 lg:py-10 cursor-pointer transition-colors duration-500 hover:bg-card/50"
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center px-2 lg:px-6">
                {/* Number */}
                <span className="lg:col-span-1 text-xs text-muted-foreground font-mono">
                  {service.number}
                </span>
                
                {/* Icon */}
                <div className="lg:col-span-1">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                    <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-500" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="lg:col-span-4 text-xl lg:text-2xl font-serif group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="lg:col-span-5 text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="lg:col-span-1 flex justify-end">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
