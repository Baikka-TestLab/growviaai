import { motion } from "motion/react";
import { useContent } from "../context/ContentContext";
import { getIcon } from "../utils/iconMap";

const DEFAULT_STEPS = [
  {
    icon: "Search",
    title: "We Audit Your Business",
    desc: "We analyze your current workflow, lead sources, and missed opportunities to build a custom AI plan.",
  },
  {
    icon: "Settings",
    title: "We Build Your AI Stack",
    desc: "Our team deploys your AI booking system and voice agent, tailored to your industry and needs.",
  },
  {
    icon: "Rocket",
    title: "You Sit Back & Grow",
    desc: "Your AI works 24/7 — capturing leads, booking appointments, and answering calls while you focus on the work.",
  },
];

const HowItWorksSection = () => {
  const content = useContent();
  const steps = content?.howItWorks ?? DEFAULT_STEPS;

  return (
    <section
      id="how-it-works"
      className="section-padding bg-brand-navy-light py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
            From Setup to{" "}
            <span className="gradient-text">Autopilot</span> in 3 Steps
          </h2>

          <p className="text-brand-muted max-w-2xl mx-auto">
            A simple proven process to transform your business into an AI-powered
            automation machine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-20 left-[18%] right-[18%] h-px border-t border-dashed border-brand-purple/30" />

          {steps.map((step, i) => {
            const Icon = getIcon(step.icon);
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative"
              >
                <div className="bg-card backdrop-blur-lg border border-card rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-brand-purple/40 hover:shadow-xl hover:shadow-brand-purple/10">

                  <div className="relative mb-6 flex justify-center">
                    <div className="absolute w-20 h-20 rounded-full bg-brand-purple/20 blur-xl group-hover:scale-125 transition" />
                    <div className="w-16 h-16 rounded-full bg-brand-navy-light flex items-center justify-center relative z-10 shadow-lg">
                      <Icon size={28} className="text-foreground" />
                    </div>
                  </div>

                  <span className="font-mono text-xs tracking-widest text-brand-purple uppercase">
                    Step {i + 1}
                  </span>

                  <h3 className="font-display font-bold text-xl text-foreground mt-3 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-brand-muted font-body text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
