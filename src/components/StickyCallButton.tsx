import { Phone } from "lucide-react";

const StickyCallButton = () => {
  return (
    <a
      href="tel:7607287094"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 md:hidden"
      aria-label="Call Draves Pipeline at 760-728-7094"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default StickyCallButton;
