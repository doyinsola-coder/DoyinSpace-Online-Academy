import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Sample course data
const courseData = {
  "frontend-bootcamp": {
    title: "Frontend Bootcamp",
    level: "Beginner",
    description: "Learn HTML, CSS, and JavaScript from scratch while building real projects.",
    syllabus: [
      "Introduction to Web Development",
      "HTML & CSS Fundamentals",
      "JavaScript Basics",
      "Mini Project: Portfolio Website",
      "Final Project: Responsive Website"
    ]
  },
  "landing-page-masterclass": {
    title: "Landing Page Masterclass",
    level: "Intermediate",
    description: "Create stunning, high-converting landing pages with Tailwind CSS & React.",
    syllabus: [
      "Design Principles for Landing Pages",
      "Using Tailwind for Fast Styling",
      "React Components & Props",
      "Animations with Framer Motion",
      "Final Project: Product Landing Page"
    ]
  },
  "react-essentials": {
    title: "React Essentials",
    level: "Intermediate",
    description: "Master React fundamentals and build scalable frontend applications.",
    syllabus: [
      "React Basics & JSX",
      "State & Props",
      "React Router for Navigation",
      "APIs & Fetching Data",
      "Project: Weather App"
    ]
  },
  "advanced-react-apis": {
    title: "Advanced React & APIs",
    level: "Advanced",
    description: "Learn advanced patterns and API integrations to build powerful apps.",
    syllabus: [
      "Context API & Custom Hooks",
      "Authentication & Protected Routes",
      "Working with REST & GraphQL APIs",
      "Optimizing React Performance",
      "Capstone Project: Full-stack Dashboard"
    ]
  }
};

export default function SingleCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courseData[id];

  if (!course) {
    return (
      <div className="text-center text-white pt-32">
        <h2 className="text-3xl mb-4">❌ Course Not Found</h2>
        <button
          onClick={() => navigate("/courses")}
          className="px-4 py-2 bg-[#39FF14] text-black rounded-lg font-semibold"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen pt-24 px-8">
      {/* ✅ Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#00D4FF] to-[#39FF14] bg-clip-text text-transparent"
      >
        {course.title}
      </motion.h1>

      <p className="text-[#00D4FF] mb-4">{course.level} Level</p>

      {/* ✅ Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-300 mb-6"
      >
        {course.description}
      </motion.p>

      {/* ✅ Syllabus */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-semibold mb-3"
      >
        📚 Course Syllabus
      </motion.h3>

      <ul className="space-y-2 mb-8">
        {course.syllabus.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * i }}
            className="p-3 bg-[#111] rounded-lg border border-gray-800 hover:border-[#00D4FF] transition"
          >
            {i + 1}. {item}
          </motion.li>
        ))}
      </ul>

      {/* ✅ Join CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => alert("🚀 Enrollment process will be added soon!")}
        className="px-6 py-3 bg-[#39FF14] text-black rounded-lg font-bold text-lg"
      >
        Join Now →
      </motion.button>
    </div>
  );
}
