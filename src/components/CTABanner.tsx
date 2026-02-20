import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="py-20 section-dark">
      <div className="container text-center space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          Ready to Start Your Pipeline Project?
        </h2>
        <p className="text-section-dark-foreground/70 text-lg">
          Get a free, no-obligation estimate from a team that handles everything — permits, inspections, and installation — so you don't have to.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="tel:7607287094">
              <Phone className="h-5 w-5" />
              Call 760-728-7094
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="mailto:estimates@dravespipeline.com">
              Email for Estimate
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
