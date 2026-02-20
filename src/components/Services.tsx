import serviceWater from "@/assets/service-water-sewer.jpg";
import serviceConduit from "@/assets/service-conduit.jpg";
import serviceGrading from "@/assets/service-grading.jpg";
import serviceStormDrain from "@/assets/service-storm-drain.jpg";

const services = [
  {
    title: "Water & Sewer Lines",
    description: "Complete water main and sewer lateral installations, repairs, and reconnections — including permits, dig alerts, and inspections.",
    image: serviceWater,
    alt: "Water and sewer pipeline installation in San Diego County",
  },
  {
    title: "Electrical & Communication Conduits",
    description: "Underground conduit installation for electrical, fiber optic, and communication utilities with precision trenching.",
    image: serviceConduit,
    alt: "Electrical conduit installation for underground utilities",
  },
  {
    title: "Storm Drain & Gas Lines",
    description: "Storm drain systems and gas line installations built to code, with full coordination with local utilities like SDG&E.",
    image: serviceStormDrain,
    alt: "Storm drain and gas pipeline construction",
  },
  {
    title: "Grading, Excavation & Equipment",
    description: "Site grading, excavation services, plus equipment rental and material supply for your project needs.",
    image: serviceGrading,
    alt: "Grading and excavation services with heavy equipment",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Our Services</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Full-Service Pipeline &amp; Utility Solutions
          </h2>
          <p className="mt-4 text-muted-foreground">
            We handle every phase — from permits and dig alerts to installation and final inspection.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
