import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]">
      {/* ✅ Animated Logo Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="text-4xl font-extrabold bg-gradient-to-r from-[#00D4FF] to-[#39FF14] bg-clip-text text-transparent"
      >
        DoyinSpace
      </motion.h1>

      {/* ✅ Spinner Animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="mt-6 w-12 h-12 border-4 border-[#39FF14] border-t-[#00D4FF] rounded-full shadow-lg shadow-[#39FF14]/50"
      />
    </div>
  );
}
