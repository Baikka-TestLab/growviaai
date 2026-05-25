import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

import { getNavbarData } from "../services/navbarService";
import { useTheme } from "../context/ThemeContext";

const NAVBAR_HEIGHT = 80;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const [navbarData, setNavbarData] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

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
    return (
      <nav className="fixed w-full z-50 bg-brand-navy/80 backdrop-blur border-b border-brand-purple/20">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="h-6 w-32 bg-brand-purple/20 rounded animate-pulse" />
          <div className="hidden lg:flex gap-6 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 w-16 bg-brand-purple/20 rounded animate-pulse" />
            ))}
            <div className="h-9 w-28 rounded-full bg-brand-purple/20 animate-pulse" />
          </div>
          <div className="lg:hidden h-6 w-6 bg-brand-purple/20 rounded animate-pulse" />
        </div>
      </nav>
    );
  }

  const renderLink = (link) => (
    <button
      key={link.id}
      onClick={() => handleClick(link.href)}
      className="text-sm text-brand-muted hover:text-foreground transition-colors text-left cursor-pointer"
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
          onClick={() => { setOpen(false); if (location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-xl font-bold gradient-text cursor-pointer"
        >
          {navbarData.logo}
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex gap-6 items-center">
          {navbarData.navLinks.map(renderLink)}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-brand-purple/10 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} className="text-brand-muted" /> : <Moon size={18} className="text-brand-muted" />}
          </button>

          <button
            onClick={() =>
              handleClick(navbarData.ctaButton.href)
            }
            className="btn-gradient px-4 py-2 text-sm cursor-pointer"
          >
            {navbarData.ctaButton.text}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-brand-navy border-t border-brand-purple/20 px-4 py-4 flex flex-col gap-4">
          {navbarData.navLinks.map(renderLink)}
          <div className="flex items-center gap-3 pt-2 border-t border-card">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-sm text-brand-muted hover:text-foreground transition-colors cursor-pointer"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;