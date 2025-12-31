import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 lg:py-40 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-accent" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Get in Touch
            </span>
            <div className="w-12 h-px bg-accent" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8">
            Ready to Create<br />
            <span className="text-gradient">Something Great?</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            Let's collaborate to turn your ideas into digital products 
            that work beautifully and delight your users.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="accent" size="xl">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Email */}
          <a 
            href="mailto:hello@aethelmaia.com" 
            className="inline-block text-2xl md:text-3xl font-serif text-foreground hover:text-accent transition-colors duration-300 hover-line"
          >
            hello@aethelmaia.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
