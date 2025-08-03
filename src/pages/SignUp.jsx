import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", whatsapp: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate("/course"), 2000); // Redirect after 2s
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#111] p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-800"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-[#00D4FF]">Join DoyinSpace Academy</h1>

        {submitted ? (
          <p className="text-center text-[#39FF14] font-semibold">
            🎉 Welcome {formData.name}! Redirecting to courses...
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0A0A0A] border border-gray-700 focus:border-[#39FF14] outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0A0A0A] border border-gray-700 focus:border-[#39FF14] outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0A0A0A] border border-gray-700 focus:border-[#39FF14] outline-none"
              required
            />
            <input
              type="text"
              name="whatsapp"
              placeholder="WhatsApp (Optional)"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0A0A0A] border border-gray-700 focus:border-[#39FF14] outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 bg-[#39FF14] text-black rounded-lg font-semibold hover:scale-105 transition"
            >
              Sign Up & Start Learning
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
