import { motion } from "motion/react";
import { useContent } from "../context/ContentContext";


const DEFAULT_FAQS = [
  { q: "How long does setup take?", a: "Most businesses are fully set up within 24-48 hours. Our streamlined onboarding process makes it fast and painless." },
  { q: "Do I need technical knowledge?", a: "Not at all. We handle everything — from setup to integration. You just need to tell us about your business and we do the rest." },
  { q: "What happens if AI can't handle a call?", a: "Our AI is trained to recognize when it needs to escalate. It seamlessly transfers the call to you or your team, and logs the interaction for follow-up." },
  { q: "Can it integrate with my existing CRM?", a: "Yes! We integrate with most popular CRMs including HubSpot, Salesforce, Jobber, ServiceTitan, and more." },
  { q: "Is there a contract?", a: "No long-term contracts. All our plans are month-to-month. You can cancel anytime." },
  { q: "What industries do you support?", a: "We specialize in plumbing, electrical, HVAC, roofing, painting, building, auto repair, and general contracting — with e-commerce coming soon." },
  { q: "How is this different from a chatbot?", a: "Our AI voice agent actually answers phone calls with natural, human-like conversation. It's not a text-based chatbot — it's a full voice AI that books appointments, answers questions, and captures leads." },
];

const FAQSection = () => {
  const content = useContent();
  const faqs = content?.faq ?? DEFAULT_FAQS;

  return (
    <section className="relative bg-brand-navy py-24 px-6 overflow-hidden">

      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[600px] h-[600px] rounded-full bg-brand-purple/10 blur-[180px]"
      />

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6 leading-tight">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>

          <p className="text-brand-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our AI automation systems,
            onboarding process, integrations, and support.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-card bg-card
              backdrop-blur-xl p-7 md:p-8 transition-all duration-300
              hover:border-brand-purple/30 hover:bg-[var(--card-hover-bg)]
              hover:-translate-y-1"
            >
              <h3 className="text-lg md:text-xl text-foreground font-display font-semibold mb-4 leading-snug group-hover:text-foreground transition-colors">
                {faq.q}
              </h3>

              <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
