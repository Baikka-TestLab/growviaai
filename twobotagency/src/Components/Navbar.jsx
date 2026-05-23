import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { getNavbarData } from "../services/navbarService";

const NAVBAR_HEIGHT = 80;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const [navbarData, setNavbarData] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const data = await getNavbarData();
        setNavbarData(data);
      } catch (error) {
        console.error("Navbar fetch failed:", error);
      }
    };

    fetchNavbar();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);

    if (el) {
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        NAVBAR_HEIGHT;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (href) => {
    setOpen(false);

    if (href.startsWith("/#")) {
      const id = href.slice(2);

      if (location.pathname === "/") {
        scrollToId(id);
      } else {
        navigate("/");

        setTimeout(() => {
          scrollToId(id);
        }, 100);
      }

      return;
    }

    if (href.startsWith("#")) {
      const id = href.slice(1);

      scrollToId(id);

      return;
    }

    navigate(href);
  };

  if (!navbarData) {
    return null;
  }

  const renderLink = (link) => (
    <button
      key={link.id}
      onClick={() => handleClick(link.href)}
      className="text-sm text-brand-muted hover:text-white transition-colors text-left"
    >
      {link.label}
    </button>
  );

  return (
    <nav
      className={`fixed w-full z-50 transition ${
        scrolled
          ? "bg-brand-navy/80 backdrop-blur border-b border-brand-purple/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold gradient-text"
        >
          {navbarData.logo}
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex gap-6 items-center">
          {navbarData.navLinks.map(renderLink)}

          <button
            onClick={() =>
              handleClick(navbarData.ctaButton.href)
            }
            className="btn-gradient px-4 py-2 text-sm"
          >
            {navbarData.ctaButton.text}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-brand-navy border-t border-brand-purple/20 px-4 py-4 flex flex-col gap-4">
          {navbarData.navLinks.map(renderLink)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;