import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ✅ Slugify helper to ensure URL-safe matching
const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// ✅ Courses data
const courses = [
  {
    title: "Frontend Bootcamp",
    level: "Beginner to Intermediate",
    description:
      "Learn HTML, CSS, JavaScript, and React by building multiple real-world projects. Perfect for beginners who want to become frontend developers.",
    topics: [
      "HTML & CSS Fundamentals",
      "Responsive Web Design",
      "JavaScript Basics & ES6",
      "React Introduction & Hooks",
      "Final Project Deployment",
    ],
  },
  {
    title: "Landing Page Masterclass",
    level: "Beginner Friendly",
    description:
      "Master the art of building stunning landing pages with modern UI/UX principles, Tailwind CSS, and animations.",
    topics: [
      "UI/UX for Landing Pages",
      "Tailwind CSS Deep Dive",
      "Animations with Framer Motion",
      "SEO Basics",
      "Live Project Build",
    ],
  },
  {
    title: "React Essentials",
    level: "Intermediate",
    description:
      "A hands-on course that covers everything you need to start building React applications like a pro.",
    topics: [
      "React Components & Props",
      "State Management",
      "React Router",
      "API Integration",
      "Project: React Dashboard",
    ],
  },
  {
    title: "Advanced React & APIs",
    level: "Advanced",
    description:
      "Learn advanced React patterns, API integrations, and performance optimizations.",
    topics: [
      "Advanced React Hooks",
      "Context API & Redux",
      "REST & GraphQL API Integration",
      "Authentication & Security",
      "Performance Optimization",
    ],
  },
];

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  // ✅ Find course using slugify
  const course = courses.find((c) => slugify(c.title) === courseId);

  // ✅ Handle not found (404)
  if (!course) {
    return (
      <div className="bg-[#0A0A0A] text-white min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl mb-4 text-red-500"
        >
          ❌
        </motion.div>
        <p className="text-gray-400 mb-4 text-lg">Course not found.</p>
        <button
          onClick={() => navigate("/course")}
          className="px-6 py-3 bg-[#39FF14] text-black font-semibold rounded-lg hover:scale-105 transition"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen px-6 pt-24 pb-16">
      {/* ✅ Course Header */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#00D4FF]">{course.title}</h1>
        <p className="text-gray-400">{course.level}</p>
      </motion.div>

      {/* ✅ Course Overview */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="max-w-3xl mx-auto mb-12 text-center">
        <p className="text-gray-300">{course.description}</p>
      </motion.div>

      {/* ✅ Curriculum */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">📚 What You'll Learn</h2>
        <ul className="space-y-2 text-gray-300">
          {course.topics.map((topic, i) => (
            <li
              key={i}
              className="p-3 bg-[#111] border border-gray-800 rounded-lg hover:border-[#00D4FF] transition"
            >
              ✅ {topic}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ✅ Instructor Info */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="max-w-3xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-2">Instructor</h2>
        <p className="text-gray-400">
          Taught by <span className="text-[#39FF14] font-medium">Doyinsola Abdulateef</span>, a frontend developer passionate about teaching and building modern web apps.
        </p>
      </motion.div>

      {/* ✅ CTA */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="text-center">
        <button className="px-8 py-3 bg-[#39FF14] text-black rounded-xl font-semibold hover:scale-105 transition">
          Enroll Now
        </button>
      </motion.div>
    </div>
  );
}
