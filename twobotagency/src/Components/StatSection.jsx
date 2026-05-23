import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { useContent } from "../context/ContentContext";

const DEFAULT_STATS = [
  { value: 95, suffix: "%", label: "Calls Answered by AI" },
  { value: 3, suffix: "x", label: "More Leads Captured" },
  { value: 40, suffix: "%", label: "Reduction in No-Shows" },
  { value: 5, prefix: "< ", suffix: " min", label: "Average Setup Time" },
];

const Counter = ({ value, prefix, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;

    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display font-extrabold text-4xl md:text-5xl gradient-text">
      {prefix}{count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const content = useContent();
  const stats = content?.stats ?? DEFAULT_STATS;

  return (
    <section className="relative bg-brand-navy-light py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[150px]"
      />

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            Real Results From <span className="gradient-text">AI Automation</span>
          </h2>

          <p className="text-brand-muted max-w-2xl mx-auto text-base md:text-lg">
            Our AI systems help local businesses answer faster, capture more leads,
            and reduce missed opportunities automatically.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
              p-8 text-center hover:border-brand-purple/40 transition-all duration-300"
            >
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />

              <p className="text-brand-muted font-body text-sm md:text-base mt-4 leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
