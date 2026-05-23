import { useContent } from "../context/ContentContext";

const DEFAULT_INDUSTRIES = [
  "Plumbing", "Electrical", "HVAC", "Roofing",
  "Painting", "Builder", "Auto Repair", "E-Commerce",
];

const SocialProofBar = () => {
  const content = useContent();
  const industries = content?.socialProof ?? DEFAULT_INDUSTRIES;
  const doubled = [...industries, ...industries];

  return (
    <section className="py-8 border-y border-brand-purple/10 overflow-hidden bg-brand-navy">

      <div className="overflow-hidden relative">
        <div className="marquee flex gap-12 whitespace-nowrap px-6">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="text-sm uppercase tracking-widest flex items-center gap-2 text-brand-muted"
            >
              <span className="w-2 h-2 rounded-full bg-brand-purple inline-block" />
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>
        {`
          .marquee {
            animation: marquee 20s linear infinite;
            width: max-content;
          }
          @keyframes marquee {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee:hover { animation-play-state: paused; }
        `}
      </style>

    </section>
  );
};

export default SocialProofBar;
