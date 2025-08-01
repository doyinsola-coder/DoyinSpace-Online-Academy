import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xjkooqgv", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    setLoading(false);

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }

    // Hide notification after 3 seconds
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen pt-24 px-6 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-6"
      >
        Contact Me
      </motion.h2>

      {/* ✅ Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-[#111] p-6 rounded-xl border border-gray-800 shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full mb-4 p-3 rounded bg-[#0A0A0A] border border-gray-700 focus:border-[#00D4FF] outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full mb-4 p-3 rounded bg-[#0A0A0A] border border-gray-700 focus:border-[#00D4FF] outline-none"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full mb-4 p-3 rounded bg-[#0A0A0A] border border-gray-700 focus:border-[#00D4FF] outline-none"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            loading
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : "bg-[#39FF14] text-black hover:scale-105"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* ✅ Toast Notifications */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed top-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2"
          >
            <span className="text-xl">✅</span>
            <p>Message sent successfully!</p>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="fixed top-5 right-5 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2"
          >
            <span className="text-xl">❌</span>
            <p>Failed to send message. Try again.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
