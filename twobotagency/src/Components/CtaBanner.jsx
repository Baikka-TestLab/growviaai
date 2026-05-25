import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useContent } from "../context/ContentContext";


const CTABanner = () => {
  const content = useContent();
  const cta = content?.cta;

  const heading = cta?.heading ?? "Ready to Put Your Business on Autopilot?";
  const subheading = cta?.subheading ?? "Join local service businesses already saving time and capturing more leads.";
  const buttonText = cta?.buttonText ?? "Get Your Free Consultation";

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy" />
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/80 font-body text-lg mb-8"
        >
          {subheading}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="inline-block bg-foreground text-brand-navy px-8 py-3.5 rounded-full font-display font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
