import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CourseDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Extract course name from the navigation state (passed after payment)
  const courseTitle = location.state?.courseTitle || "Your Course";
  const telegramLink = "https://t.me/yourTelegramGroup"; // ✅ Replace with your real invite link

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen flex flex-col justify-center items-center px-6">
      {/* ✅ Success Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-24 h-24 flex items-center justify-center rounded-full bg-[#39FF14] mb-6"
      >
        <span className="text-4xl text-black font-bold">✓</span>
      </motion.div>

      {/* ✅ Success Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#00D4FF] to-[#39FF14] bg-clip-text text-transparent"
      >
        Payment Successful!
      </motion.h1>

      <p className="text-gray-300 mb-6 text-center max-w-md">
        You have successfully enrolled in <span className="text-[#39FF14]">{courseTitle}</span>.
        🎉 Click below to start learning right away!
      </p>

      {/* ✅ Start Learning Button */}
      <motion.a
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-[#39FF14] text-black rounded-lg font-bold text-lg mb-4"
      >
        Start Learning →
      </motion.a>

      {/* ✅ Back to Courses */}
      <button
        onClick={() => navigate("/course")}
        className="px-4 py-2 bg-[#00D4FF] text-black rounded-md font-semibold"
      >
        Back to Courses
      </button>
    </div>
  );
}
