import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold mb-6 text-center text-cyan-400"
        >
          About Me
        </motion.h1>

        {/* Intro */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300 leading-relaxed text-center mb-10"
        >
          Hi! I'm <span className="text-cyan-400 font-semibold">Abdulateef Doyinsola Abdulmubeen</span>, 
          a passionate <span className="text-green-400">Frontend Developer</span> and the mind behind 
          <span className="text-cyan-400"> DoyinSpace</span>. I specialize in crafting modern, interactive, 
          and user-friendly web applications with a keen eye for design and performance. My focus is on 
          turning ideas into engaging digital experiences.
        </motion.p>

        {/* Skills Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-[#111] p-6 rounded-2xl shadow-lg border border-gray-700">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              My Expertise
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li>✔️ Frontend Development with React & Tailwind CSS</li>
              <li>✔️ Building modern UI/UX with Framer Motion & AOS</li>
              <li>✔️ E-commerce solutions (Cart, Checkout, Payment Integration)</li>
              <li>✔️ Responsive Design & Performance Optimization</li>
              <li>✔️ Developing engaging Islamic & educational web apps</li>
            </ul>
          </div>

          <div className="bg-[#111] p-6 rounded-2xl shadow-lg border border-gray-700">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Technologies I Use
            </h2>
            <div className="flex flex-wrap gap-3">
              {["React", "Tailwind", "JavaScript", "HTML5", "CSS3", "Framer Motion", "Flutterwave"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-200 border border-gray-600"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Brand Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-cyan-500 to-green-400 p-6 rounded-2xl text-black text-center shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-2">DoyinSpace</h2>
          <p className="text-lg mb-2">
            My personal brand where I innovate, design, and build powerful digital experiences.
          </p>
          <p>
            From e-commerce platforms like <span className="font-semibold">FreshFinds</span> to Islamic 
            engagement apps like <span className="font-semibold">Echoes of Madinah</span>, I create 
            solutions that inspire and impact users.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6 mt-10 text-2xl"
        >
          <a href="https://github.com/doyinsola-coder" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400"><FaTwitter /></a>
        </motion.div>
      </div>
    </section>
  );
}
