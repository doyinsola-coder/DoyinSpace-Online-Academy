import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] text-white font-inter">
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.h1 initial="hidden" whileInView="visible" variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-[#00D4FF] to-[#39FF14] bg-clip-text text-transparent">
          Learn Frontend Development <br /> with DoyinSpace
        </motion.h1>
        <motion.p initial="hidden" whileInView="visible" variants={fadeUp} className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
          Master HTML, CSS, JavaScript, and React by building real-world projects.
        </motion.p>
        <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="space-x-4">
         <Link to="/join">
          <button className="px-6 py-3 rounded-xl bg-[#00D4FF] text-black font-semibold hover:scale-105 transition">
            Start Learning
          </button>
         </Link>
          <Link to="/course">
          <button className="px-6 py-3 rounded-xl border border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition">
            View Courses
          </button>
          </Link>
        </motion.div>
      </section>

      {/* About Instructor */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto text-center">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} className="text-3xl font-bold mb-4">
          Meet Your Instructor
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" variants={fadeUp} className="text-gray-400 mb-6">
          I'm Abdulateef Doyinsola Abdulmubeen, a Frontend Developer passionate about teaching 
          and helping beginners become confident coders. You’ll learn by building 
          hands-on projects and gaining real coding experience.
        </motion.p>
      </section>

      {/* Courses Preview */}
      <section id="courses" className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} className="text-3xl font-bold mb-8 text-center">
          Popular Courses
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Frontend Bootcamp", "Landing Page Masterclass", "React Essentials"].map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              className="p-6 rounded-xl bg-[#111] border border-gray-800 hover:border-[#00D4FF] transition"
            >
              <h3 className="text-xl font-semibold mb-2">{course}</h3>
              <p className="text-gray-400 mb-4">Learn {course} step-by-step with projects.</p>
              <Link
                to={`/course/${course.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[#39FF14] font-medium hover:underline"
              >
                Enroll Now →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Learn */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} className="text-3xl font-bold mb-4">
          Why Learn with Me?
        </motion.h2>
        <motion.ul initial="hidden" whileInView="visible" variants={fadeUp} className="text-gray-300 space-y-2">
          <li>✅ Hands-on projects with real code</li>
          <li>✅ Beginner-friendly approach</li>
          <li>✅ 1-on-1 mentorship available</li>
          <li>✅ Lifetime access to resources</li>
        </motion.ul>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 px-6 text-center">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} className="text-3xl font-bold mb-4">
          Ready to Start Your Coding Journey?
        </motion.h2>
        <motion.button initial="hidden" whileInView="visible" variants={fadeUp} className="mt-4 px-8 py-3 bg-[#39FF14] text-black rounded-xl font-semibold hover:scale-105 transition">
          Join Now
        </motion.button>
        <Link 
          to="/course/frontend-bootcamp" 
          className="mt-4 ml-4 inline-block text-[#39FF14] font-medium hover:underline"
        >
          Explore Frontend Bootcamp →
        </Link>
      </section>

    </div>
  );
}
