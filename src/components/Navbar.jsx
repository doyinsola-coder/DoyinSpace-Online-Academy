import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll for sections on Home
  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // go to Home first
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Links setup
  const links = [
    { name: "Home", scroll: true },
    { name: "Courses", path: "/course" },
    { name: "About", scroll: true },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 shadow-md shadow-[#00D4FF]/10 border-b border-gray-800" : "bg-[#0A0A0A]"
      }`}
    >
      {/* Logo */}
      <h1
        className="text-2xl font-bold text-[#00D4FF] cursor-pointer"
        onClick={() => handleScrollTo("home")}
      >
        DoyinSpace
      </h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 text-gray-300">
        {links.map((link, i) => (
          <li
            key={i}
            className="hover:text-[#39FF14] cursor-pointer transition"
            onClick={() =>
              link.scroll ? handleScrollTo(link.name) : navigate(link.path)
            }
          >
            {link.name}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => navigate("/contact")}
        className="hidden md:block px-4 py-2 rounded-lg bg-[#39FF14] text-black font-semibold hover:scale-105 transition"
      >
        Join Now
      </button>

      {/* Mobile Menu */}
      <div className="md:hidden text-2xl text-[#00D4FF] cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0A0A0A]/95 border-t border-gray-800 md:hidden flex flex-col items-center space-y-4 py-6">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() =>
                link.scroll ? handleScrollTo(link.name) : navigate(link.path)
              }
              className="text-gray-300 hover:text-[#39FF14] text-lg"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => navigate("/contact")}
            className="px-4 py-2 rounded-lg bg-[#39FF14] text-black font-semibold hover:scale-105 transition"
          >
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
}
