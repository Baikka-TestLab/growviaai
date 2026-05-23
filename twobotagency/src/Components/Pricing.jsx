import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { getPricingData } from "../services/pricingService";

const DEFAULT_PLANS = [
  {
    name: "Starter", subtitle: "Basic", oneTime: "$1497 / one-time",
    price: "$197", period: "/mo",
    features: ["AI Voice Agent", "Booking Automation", "Lead automation"],
    popular: false,
  },
  {
    name: "Growth", subtitle: "Pro", oneTime: "$1997 / one-time",
    price: "$297", period: "/mo",
    features: ["Everything in Starter", "Review Automation", "Professional Website"],
    popular: true,
  },
  {
    name: "Enterprise", subtitle: "Pro Max", oneTime: "$2777 / one-time",
    price: "$497", period: "/mo",
    features: ["All in one", "Professional Website"],
    popular: false,
  },
];

const PricingSection = () => {
  const [plans, setPlans] = useState(DEFAULT_PLANS);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPricingData();
        setPlans(data);
      } catch {
        // keep defaults
      }
    };
    fetchData();
  }, []);

  return (
    <section
      id="pricing"
      className="relative bg-brand-navy-light py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[600px] h-[600px] rounded-full bg-brand-purple/10 blur-[180px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-5 leading-tight">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>

          <p className="text-brand-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose the perfect AI automation package for your business.
            Scale faster, capture more leads, and automate your workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative rounded-3xl border backdrop-blur-xl
              p-8 md:p-10 flex flex-col justify-between
              transition-all duration-300 hover:-translate-y-2
              ${
                plan.popular
                  ? "bg-brand-purple/10 border-brand-purple/40 shadow-[0_0_40px_rgba(123,47,255,0.25)] scale-105"
                  : "bg-white/5 border-white/10 hover:border-brand-purple/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-bg text-white text-xs font-semibold tracking-wide px-5 py-2 rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  {plan.name}
                </h3>

                <p className="text-brand-muted text-sm mb-4">{plan.subtitle}</p>

                <div className="flex items-end gap-1 mb-4">
                  <span className="font-display font-extrabold text-5xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-brand-muted mb-1">{plan.period}</span>
                </div>
                <p className="text-brand-muted text-sm mb-8">{plan.oneTime}</p>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm md:text-base text-brand-muted">
                      <CheckCircle size={18} className="text-brand-purple flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className={`w-full text-center py-4 rounded-2xl font-semibold transition-all duration-300
                ${
                  plan.popular
                    ? "btn-gradient text-white shadow-lg hover:scale-[1.02]"
                    : "bg-white/5 border border-white/10 text-foreground hover:border-brand-purple/40 hover:bg-white/10"
                }`}
              >
                Book a Free Demo
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
