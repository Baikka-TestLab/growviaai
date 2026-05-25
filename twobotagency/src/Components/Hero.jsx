import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { getHeroData } from "../services/heroService";

const DEFAULT_STATS = [
  { label: "Leads Captured", value: "300+" },
  { label: "AI Uptime", value: "24/7" },
  { label: "Setup Time", value: "5 min" },
];

const DEFAULT_HERO = {
  heading: "Grow Your Business",
  headingHighlight: "With AI",
  subheading:
    "AI-powered booking systems and voice calling agents that work 24/7 — so you never miss a lead, a call, or an appointment again.",
  ctaPrimary: "See How It Works",
  ctaSecondary: "Watch Demo",
  stats: DEFAULT_STATS,
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const HeroSection = () => {
  const [hero, setHero] = useState(DEFAULT_HERO);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data = await getHeroData();
        setHero(data);
      } catch (error) {
        console.error("Hero fetch failed:", error);
      }
    };

    fetchHero();
  }, []);

  const { heading, headingHighlight, subheading, ctaPrimary, ctaSecondary, stats } = hero;
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {" "}
      <div className="absolute inset-0 dot-grid opacity-20 sm:opacity-30" />{" "}
      <div className="hero-arc" /> <div className="hero-arc-line" />{" "}
      <div className="absolute top-1/4 left-1/4 w-40 sm:w-72 lg:w-96 h-40 sm:h-72 lg:h-96 rounded-full bg-brand-purple/5 blur-[80px] sm:blur-[100px] lg:blur-[120px]" />{" "}
      <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-56 lg:w-72 h-32 sm:h-56 lg:h-72 rounded-full bg-brand-magenta/5 blur-[70px] sm:blur-[90px] lg:blur-[100px]" />{" "}
      <div className="relative z-10 max-w-6xl mx-auto text-center pt-24 sm:pt-28 md:pt-32">
        {" "}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display font-extrabold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight sm:leading-[1.1] mb-4 sm:mb-6"
        >
          {" "}
          <span className="text-foreground text-amber-500">{heading}</span> <br />{" "}
          <span className="gradient-text">{headingHighlight}</span>{" "}
        </motion.h1>{" "}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-brand-muted text-sm sm:text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-10 font-body leading-relaxed px-2"
        >
          {" "}
          {subheading}{" "}
        </motion.p>{" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full"
        >
          {" "}
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="btn-gradient w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 cursor-pointer"
          >
            {" "}
            {ctaPrimary} <ArrowRight size={18} />{" "}
          </button>{" "}
          <button className="btn-ghost w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer">
            {" "}
            <Play size={18} /> {ctaSecondary}{" "}
          </button>{" "}
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto"
        >
          {" "}
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card-dark px-4 sm:px-5 py-3 flex items-center justify-center sm:justify-start gap-2 sm:gap-3"
            >
              {" "}
              <span className="font-display font-bold text-base sm:text-lg gradient-text">
                {" "}
                {stat.value}{" "}
              </span>{" "}
              <span className="text-brand-muted text-xs sm:text-sm font-body">
                {" "}
                {stat.label}{" "}
              </span>{" "}
            </div>
          ))}{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
};
export default HeroSection;
