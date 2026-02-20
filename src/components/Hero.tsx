import { Phone, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pipeline.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pipeline installation in Southern California by Draves Pipeline"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Shield className="h-4 w-4" />
            Licensed &amp; Insured · San Diego County
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-section-dark-foreground sm:text-5xl lg:text-6xl">
            Trusted Pipeline Installation in{" "}
            <span className="text-gradient">Bonsall &amp; San Diego County</span>
          </h1>

          <p className="text-lg text-section-dark-foreground/80 max-w-xl">
            From water and sewer lines to gas, electrical conduits, and storm drains — Draves Pipeline delivers reliable underground utility solutions with expert precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:7607287094">
                <Phone className="h-5 w-5" />
                Call 760-728-7094
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="mailto:estimates@dravespipeline.com">
                Get a Free Estimate
              </a>
            </Button>
          </div>

          {/* Trust Row */}
          <div className="flex flex-wrap gap-6 pt-4 text-section-dark-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Licensed Contractor [Lic #]</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>[X]+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
