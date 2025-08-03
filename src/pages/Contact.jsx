import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");
  const formspreeURL = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(formspreeURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("✅ Message Sent Successfully!");
        e.target.reset();
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch {
      setStatus("❌ Network error. Try again.");
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen pt-24 px-6 flex flex-col items-center">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold mb-6">
        Contact Me
      </motion.h2>

      <form onSubmit={handleSubmit} className="bg-[#111] p-6 rounded-xl shadow-lg w-full max-w-md border border-gray-800">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 mb-3 rounded bg-[#0A0A0A] border border-gray-700 text-white" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 mb-3 rounded bg-[#0A0A0A] border border-gray-700 text-white" />
        <textarea name="message" placeholder="Your Message" required rows="5" className="w-full p-3 mb-3 rounded bg-[#0A0A0A] border border-gray-700 text-white"></textarea>
        <button type="submit" className="w-full py-3 bg-[#39FF14] text-black font-semibold rounded hover:scale-105 transition">
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-center text-[#00D4FF]">{status}</p>}
    </div>
  );
}
