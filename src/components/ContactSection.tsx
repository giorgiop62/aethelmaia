import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="w-8 h-8 text-accent" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Turn Your Ideas Into Reality?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Let's collaborate to create a digital product that works beautifully 
            and delights your users. Get in touch and let's start the conversation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              <Mail className="w-5 h-5" />
              Contact Us
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Schedule a Call
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Email */}
          <p className="mt-10 text-primary-foreground/60 text-sm">
            Or reach us directly at{" "}
            <a 
              href="mailto:hello@aethelmaia.com" 
              className="text-accent hover:underline font-medium"
            >
              hello@aethelmaia.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
