import { useEffect } from "react";
import { motion } from "motion/react";
import { Zap, Boxes, TrendingUp } from "lucide-react";
import CTABanner from "../Components/CtaBanner";
import { useContent } from "../context/ContentContext";


const values = [
  {
    icon: Zap,
    title: "Speed",
    desc: "We move fast. Most businesses are fully automated within 48 hours of onboarding.",
  },
  {
    icon: Boxes,
    title: "Simplicity",
    desc: "No technical knowledge needed. We handle everything so you can focus on your craft.",
  },
  {
    icon: TrendingUp,
    title: "Results",
    desc: "Every solution is measured by one metric: did it grow your business?",
  },
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-brand-navy">
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6">
              Why We Built <span className="gradient-text">TwoBot Agency</span>
            </h1>

            <p className="text-brand-muted font-body text-lg leading-relaxed max-w-2xl mx-auto">
              We saw local service businesses losing thousands of dollars every
              month to missed calls, forgotten follow-ups, and manual
              scheduling. We knew AI could fix it — so we built TwoBot.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-dark p-10 text-center mb-16"
          >
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">
              Our Mission
            </h2>

            <p className="text-brand-muted font-body text-lg leading-relaxed italic">
              "We believe every local business deserves enterprise-level AI —
              without enterprise-level complexity or cost."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card-dark p-8 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-navy-light flex items-center justify-center mx-auto mb-4">
                  <v.icon size={28} className="text-foreground" />
                </div>

                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {v.title}
                </h3>

                <p className="text-brand-muted font-body text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">
              Our Vision
            </h2>

            <p className="text-brand-muted font-body text-lg leading-relaxed max-w-2xl mx-auto">
              We're starting with local service businesses — but we're not
              stopping there. Our roadmap includes expanding into e-commerce AI
              automation, making TwoBot a full AI consultancy that helps
              businesses of all types run on autopilot.
            </p>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default AboutPage;
