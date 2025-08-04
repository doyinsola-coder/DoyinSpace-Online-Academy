import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ Auth state
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
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

  // ✅ Login & Logout simulation
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/profile"); // (later you can create a profile page)
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const links = [
    { name: "Home", scroll: true },
    { name: "Courses", path: "/course" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 shadow-md shadow-[#00D4FF]/10 border-b border-gray-800" : "bg-[#0A0A0A]"
      }`}
    >
      {/* ✅ Logo */}
      <h1
        className="text-2xl font-bold text-[#00D4FF] cursor-pointer"
        onClick={() => handleScrollTo("home")}
      >
        DoyinSpace
      </h1>

      {/* ✅ Desktop Links */}
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

      {/* ✅ Auth Icon Behavior */}
      {!isLoggedIn ? (
        <button
          onClick={() => navigate("/join")} // ✅ Go to SignUp if not logged in
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#39FF14] text-black hover:scale-110 transition"
        >
          <FaUser size={18} />
        </button>
      ) : (
        <button
          onClick={handleLogout} // ✅ Show Logout if logged in
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white hover:scale-110 transition"
        >
          <FaSignOutAlt size={18} />
        </button>
      )}

      {/* ✅ Mobile Menu */}
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

          {/* ✅ Mobile Auth Icon */}
          {!isLoggedIn ? (
            <button
              onClick={() => navigate("/join")} // ✅ Navigate to signup
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#39FF14] text-black hover:scale-110 transition"
            >
              <FaUser size={22} />
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white hover:scale-110 transition"
            >
              <FaSignOutAlt size={22} />
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
