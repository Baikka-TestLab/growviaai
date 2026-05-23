import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getFooterData } from "../services/footerService";

const NAVBAR_HEIGHT = 64;

const DEFAULT_FOOTER = {
  brand: {
    logo: "GrowViaAi",
    tagline:
      "Your Business, On Autopilot. AI-powered booking and voice calling agents for local service businesses.",
  },
  companyLinks: ["Services", "Industries", "Pricing", "About", "Contact"],
  legalLinks: ["Privacy Policy", "Terms of Service"],
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/117024444" },
    { name: "X", url: "https://x.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61589721712868" },
  ],
  copyright: "GrowViAi",
};

const Footer = () => {
  const [footerData, setFooterData] = useState(DEFAULT_FOOTER);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFooterData();
        setFooterData(data);
      } catch {
        // keep defaults
      }
    };
    fetchData();
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleLink = (label) => {
    const pageRoutes = ["About", "Contact"];

    if (pageRoutes.includes(label)) {
      navigate(`/${label.toLowerCase()}`);
    } else {
      const id = label.toLowerCase();
      if (location.pathname === "/") {
        scrollToId(id);
      } else {
        navigate("/");
        setTimeout(() => scrollToId(id), 100);
      }
    }
  };

  const { brand, companyLinks, legalLinks, socialLinks, copyright } = footerData;

  return (
    <footer className="bg-brand-navy border-t border-brand-purple/10 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-2xl gradient-text">{brand.logo}</span>
            </div>
            <p className="text-brand-muted font-body max-w-sm">
              {brand.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <div className="flex flex-col gap-2">
              {companyLinks.map((l) => (
                <button
                  key={l}
                  onClick={() => handleLink(l)}
                  className="text-brand-muted hover:text-foreground transition-colors text-sm font-body text-left"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <div className="flex flex-col gap-2">
              {legalLinks.map((l) => (
                <span key={l} className="text-brand-muted text-sm font-body">{l}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-brand-purple/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-sm font-body">&copy; {new Date().getFullYear()} {copyright}. All rights reserved.</p>
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-foreground transition-colors text-sm font-body cursor-pointer"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
