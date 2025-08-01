import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] text-gray-400 py-6 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Text */}
        <p className="mb-4 md:mb-0 text-sm">
          © 2025 <span className="text-[#00D4FF]">DoyinSpace Online Academy</span>. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/doyinsola-coder" className="hover:text-[#39FF14] transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" className="hover:text-[#39FF14] transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" className="hover:text-[#39FF14] transition">
            <FaTwitter />
          </a>
          <a href="https://wa.me/2349035667678" className="hover:text-[#39FF14] transition">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
