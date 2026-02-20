import { FileCheck, Headphones, Truck, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    icon: FileCheck,
    title: "Turnkey Permitting",
    description: "We handle dig alerts, permits, and inspections end-to-end so you don't have to.",
  },
  {
    icon: Headphones,
    title: "Responsive Communication",
    description: "Jon and the team promptly return calls and check on every job daily until completion.",
  },
  {
    icon: Truck,
    title: "Equipment & Materials On-Hand",
    description: "In-house equipment rental and material supply means faster starts and fewer delays.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Fully Insured",
    description: "Competitive pricing backed by proper licensing, insurance, and expert workmanship.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 section-dark">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Why Draves Pipeline</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Why San Diego County Trusts Us Underground
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <div key={item.title} className="text-center space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-section-dark-foreground/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
