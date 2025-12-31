import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-foreground" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-foreground" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-up">
            <div className="w-12 h-px bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Web Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.95] mb-8">
            <span className="block opacity-0 animate-fade-up stagger-1">
              Italian Creativity
            </span>
            <span className="block opacity-0 animate-fade-up stagger-2">
              <span className="text-gradient">German Precision</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12 opacity-0 animate-fade-up stagger-3">
            We craft digital experiences that captivate and convert. 
            From concept to launch, we build solutions that work and delight.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-up stagger-4">
            <Button variant="accent" size="xl">
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="xl">
              View Our Work
            </Button>
          </div>

          {/* Location tags */}
          <div className="flex items-center gap-6 mt-20 opacity-0 animate-fade-up stagger-5">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              🇮🇹 Italy
            </span>
            <span className="w-8 h-px bg-border" />
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              🇩🇪 Germany
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0 animate-fade-in stagger-6">
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground rotate-90 origin-center translate-y-8">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
