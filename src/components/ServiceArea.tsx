import { MapPin } from "lucide-react";

const cities = [
  "Bonsall", "Fallbrook", "Vista", "Oceanside", "Escondido",
  "San Marcos", "Carlsbad", "Encinitas", "Temecula", "Murrieta",
  "Poway", "Rancho Bernardo", "San Diego",
];

const ServiceArea = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Service Area</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Serving San Diego &amp; Riverside Counties
          </h2>
          <p className="mt-4 text-muted-foreground">
            Based in Bonsall, CA — we provide pipeline and utility services throughout the region.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
