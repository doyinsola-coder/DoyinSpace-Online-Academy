import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  // ✅ Sample Courses Data
  const courses = [
    { title: "Frontend Bootcamp", level: "Beginner", description: "Learn HTML, CSS, and JavaScript from scratch." },
    { title: "Landing Page Masterclass", level: "Intermediate", description: "Build stunning landing pages with Tailwind CSS & React." },
    { title: "React Essentials", level: "Intermediate", description: "Master React fundamentals with real-world projects." },
    { title: "Advanced React & APIs", level: "Advanced", description: "Learn advanced React patterns and API integrations." },
  ];

  const filteredCourses = filter === "All" ? courses : courses.filter(c => c.level === filter);

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen pt-24 px-4 sm:px-6 lg:px-12 pb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-6"
      >
        Our Courses
      </motion.h2>

      {/* ✅ Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {["All", "Beginner", "Intermediate", "Advanced"].map((cat, i) => (
          <button
            key={i}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === cat ? "bg-[#39FF14] text-black" : "bg-[#111] text-gray-300 hover:text-[#39FF14]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ✅ Responsive Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-[#00D4FF] transition shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <span className="text-sm text-[#00D4FF]">{course.level}</span>
            <p className="text-gray-400 my-3">{course.description}</p>
            <button
              onClick={() => navigate(`/course/${course.title.toLowerCase().replace(/\s+/g, "-")}`)}
              className="mt-3 px-4 py-2 bg-[#39FF14] text-black rounded-lg font-semibold hover:scale-105 transition"
            >
              Enroll Now →
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
