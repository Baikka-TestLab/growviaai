import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { getIcon } from "../utils/iconMap";
import { getServicesData } from "../services/servicesService";

const DEFAULT_SERVICES = [
  {
    icon: "Phone", price: "$499", title: "AI Voice Calling Agent",
    description: "A human-like AI voice agent that answers every call, books jobs, and handles FAQs automatically.",
    features: ["24/7 call answering", "Natural conversation", "Call analytics", "Customizable scripts"],
  },
  {
    icon: "Calendar", price: "$499", title: "Booking Automation",
    description: "Smart 24/7 booking that schedules appointments automatically and syncs with your calendar.",
    features: ["Online booking widget", "Calendar sync", "Auto-Confirmation Messages"],
  },
  {
    icon: "Users", price: "$499", title: "Lead Automation",
    description: "AI captures and qualifies new customers from website bookings.",
    features: ["Website lead capture", "Lead integration", "Instant notifications"],
  },
  {
    icon: "Star", price: "$499", title: "Google Review Automation",
    description: "A review seeking automated message will be sent to your customers after service, increasing your Google reviews.",
    features: ["Enrichment of google reviews", "Boosting online reputation"],
  },
  {
    icon: "CheckCircle", price: "$499", title: "Follow Up Automation",
    description: "AI automatically follows up with prospects through email/whatsapp until they convert.",
    features: ["Smart follow-ups", "Email/Whatsapp automation", "Reactivation campaigns", "Conversion tracking"],
  },
  {
    icon: "Mail", price: "$499", title: "Automated Messaging",
    description: "Automated reply to clients enquiries through chat.",
    features: ["Smart Chatbot", "Chat automation", "Conversation tracking"],
  },
];

const ServicesSection = () => {
  const [services, setServices] = useState(DEFAULT_SERVICES);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServicesData();
        setServices(data);
      } catch {
        // keep defaults
      }
    };
    fetchData();
  }, []);

  return (
    <section id="services" className="py-20 bg-brand-navy text-foreground">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center font-display font-bold text-4xl md:text-5xl text-foreground mb-14">
          What We <span className="gradient-text">Automate</span> For You
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card-dark p-8 rounded-xl"
              >
                <div className="mb-6">
                  <Icon size={28} className="text-brand-purple" />
                </div>

                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-brand-purple text-sm font-semibold mb-3">
                  Price: {service.price}
                </p>

                <p className="text-brand-muted mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-brand-muted">
                      <CheckCircle size={16} className="text-brand-purple flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
