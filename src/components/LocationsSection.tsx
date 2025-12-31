import { MapPin } from "lucide-react";

const locations = [
  {
    country: "Italy",
    flag: "🇮🇹",
    tagline: "Creativity & Passion",
    description: "Italian design heritage meets digital innovation. We bring warmth, aesthetics, and artistic vision to every project.",
    accent: "from-accent/20 to-accent/5",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    tagline: "Precision & Excellence",
    description: "German engineering principles applied to web development. Reliable, efficient, and meticulously crafted solutions.",
    accent: "from-primary/20 to-primary/5",
  },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Where We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Two Cultures, One Vision
          </h2>
          <p className="text-muted-foreground text-lg">
            Our unique blend of Italian creativity and German precision creates 
            digital experiences that stand out.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((location) => (
            <div
              key={location.country}
              className={`relative p-8 lg:p-10 rounded-2xl bg-gradient-to-br ${location.accent} border border-border/50 overflow-hidden group hover:shadow-elegant transition-all duration-500`}
            >
              {/* Flag background */}
              <span className="absolute -top-6 -right-6 text-9xl opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                {location.flag}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-4xl">{location.flag}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  {location.country}
                </h3>
                <span className="text-accent font-medium text-sm uppercase tracking-wider block mb-4">
                  {location.tagline}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {location.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
