import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useContent } from "../context/ContentContext";


const DEFAULT_TESTIMONIALS = [
  {
    name: "Mike Reynolds",
    business: "HVAC Company Owner",
    quote: "GrowVia's AI booking system doubled our appointment bookings in the first month. We haven't missed a lead since.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    business: "Plumbing Business",
    quote: "The AI voice agent sounds so natural — our customers don't even realize they're talking to AI. It's been a game changer.",
    rating: 5,
  },
  {
    name: "James Okafor",
    business: "Electrical Contractor",
    quote: "Setup was incredibly fast. Within a day we had a fully automated booking system that works around the clock.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const content = useContent();
  const testimonials = content?.testimonials ?? DEFAULT_TESTIMONIALS;

  return (
    <section className="section-padding bg-brand-navy relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-dark p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-brand-purple text-brand-purple" />
                ))}
              </div>
              <p className="text-brand-muted font-body mb-6 leading-relaxed italic">"{t.quote}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-brand-muted text-sm font-body">{t.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
