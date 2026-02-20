import { Star } from "lucide-react";

const reviews = [
  {
    name: "Chris F.",
    location: "San Diego, CA",
    text: "Jon and his crew were great! We needed to reconnect our lateral to the city's main. After talking to several contractors, it was clear Jon would not cut any corners, would offer the best work, and would do so at a very competitive price. Their office handled everything from dig alert, permits, and inspections.",
  },
  {
    name: "Chloe D.",
    location: "Corona, CA",
    text: "If you want 5 star service, this guy is your guy! Jon came in and organized everything for us and showed up on site everyday until the job was done. Jon and his team are the definition of above and beyond.",
  },
  {
    name: "Daina Z.",
    location: "San Diego, CA",
    text: "If I could give this company 100 stars, it would still be too small. When no one else would even call me back, he instantly jumped in head first and took charge of our job. He promptly returns phone calls, constantly checks up on the job — and teaches everyone on site so they learn.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-lg border border-border bg-card p-6 flex flex-col"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                "{review.text}"
              </blockquote>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
