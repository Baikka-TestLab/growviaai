import { motion } from "motion/react";
import { useContent } from "../context/ContentContext";
import { getIcon } from "../utils/iconMap";

const DEFAULT_INDUSTRIES = [
  { icon: "Activity", label: "Dentist" },
  { icon: "Sparkles", label: "Med Spa" },
  { icon: "Scissors", label: "Saloon" },
  { icon: "Wrench", label: "Plumber" },
  { icon: "Zap", label: "Electrician" },
  { icon: "Wind", label: "HVAC" },
  { icon: "Home", label: "Roofer" },
  { icon: "Paintbrush", label: "Painter" },
  { icon: "HardHat", label: "Builder" },
  { icon: "Car", label: "Auto Mechanic" },
  { icon: "Hammer", label: "General Contractor" },
  { icon: "ShoppingCart", label: "E-Commerce", comingSoon: true },
];

const IndustriesSection = () => {
  const content = useContent();
  const industries = content?.industries ?? DEFAULT_INDUSTRIES;

  return (
    <section id="industries" className="section-padding bg-brand-navy relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            Built For <span className="gradient-text">Local Service</span> Businesses
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {industries.map((ind, i) => {
            const Icon = getIcon(ind.icon);
            return (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-dark flex flex-col items-center gap-3 py-8 relative"
              >
                <Icon size={32} className="text-brand-purple" />
                <span className="font-body font-medium text-foreground text-sm">{ind.label}</span>
                {ind.comingSoon && (
                  <span className="absolute top-3 right-3 text-[10px] font-mono bg-brand-navy-light text-foreground px-2 py-0.5 rounded-full">
                    Soon
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
