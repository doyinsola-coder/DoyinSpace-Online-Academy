import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SingleCourse from "./pages/SingleCourse";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import SignUp from "./pages/SignUp";
import FlutterwaveTest from "./pages/FlutterwaveTest";
import CourseDetails from "./pages/PaymentSuccess";
import About from "./pages/About";

// ✅ Import AuthProvider
import { AuthProvider } from "./context/AuthContext";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();

  const isLandingPage = location.pathname === "/"; // ✅ only landing page uses loader

  // ✅ Loader runs only on landing page
  useEffect(() => {
    if (isLandingPage) {
      setLoading(true);
      setFadeOut(false);

      const timer = setTimeout(() => setFadeOut(true), 800);
      const removeTimer = setTimeout(() => setLoading(false), 1300);

      return () => {
        clearTimeout(timer);
        clearTimeout(removeTimer);
      };
    } else {
      setLoading(false);
    }
  }, [location.pathname, isLandingPage]);

  return (
    <>
      {/* ✅ Loader only on landing page */}
      {isLandingPage && loading && (
        <div
          className={`fixed inset-0 z-50 bg-[#0A0A0A] flex items-center justify-center transition-opacity duration-700 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loader />
        </div>
      )}

      <Navbar />

      {/* ✅ Prevent white flash by wrapping in relative container */}
      <div className="relative min-h-screen bg-[#0A0A0A]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-full min-h-screen top-0 left-0"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/course" element={<Course />} />
              <Route path="/course/:id" element={<SingleCourse />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/join" element={<SignUp />} />
              <Route path="/flutterwave-test" element={<FlutterwaveTest />} />
              <Route path="/details" element={<CourseDetails />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
