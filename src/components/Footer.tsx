import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-extrabold">Draves Pipeline</h3>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Professional pipeline installation, grading, and excavation services for San Diego &amp; Riverside Counties.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:7607287094" className="hover:text-primary transition-colors">760-728-7094</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:estimates@dravespipeline.com" className="hover:text-primary transition-colors">estimates@dravespipeline.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>P.O. Box 1051<br />Bonsall, CA 92003</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>Water &amp; Sewer Lines</li>
              <li>Electrical &amp; Comm Conduits</li>
              <li>Storm Drains &amp; Gas Lines</li>
              <li>Grading &amp; Excavation</li>
              <li>Equipment Rental</li>
            </ul>
          </div>

          {/* License */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Credentials</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>CA Contractor License [Lic #]</li>
              <li>Fully Insured</li>
              <li>Bonded</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between text-xs text-secondary-foreground/50 gap-2">
          <p>&copy; {new Date().getFullYear()} Draves Pipeline. All rights reserved.</p>
          <p>Bonsall, CA · Serving San Diego &amp; Riverside Counties</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
