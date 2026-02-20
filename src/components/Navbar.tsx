import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-extrabold text-section-dark-foreground">
          Draves<span className="text-primary"> Pipeline</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-section-dark-foreground/80">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="hover:text-primary transition-colors">Testimonials</a>
          <Button variant="hero" size="sm" asChild>
            <a href="tel:7607287094">
              <Phone className="h-4 w-4" />
              760-728-7094
            </a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-section-dark-foreground"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-sm border-t border-secondary-foreground/10 pb-4">
          <div className="container flex flex-col gap-3 pt-3 text-sm font-medium text-section-dark-foreground/80">
            <a href="#services" onClick={() => setMenuOpen(false)} className="py-2 hover:text-primary">Services</a>
            <a href="#" onClick={() => setMenuOpen(false)} className="py-2 hover:text-primary">About</a>
            <a href="#" onClick={() => setMenuOpen(false)} className="py-2 hover:text-primary">Testimonials</a>
            <Button variant="hero" size="sm" asChild>
              <a href="tel:7607287094">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
