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

// ✅ Import AuthProvider
import { AuthProvider } from "./context/AuthContext";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();

  // ✅ Trigger loader on every route change
  useEffect(() => {
    setLoading(true);
    setFadeOut(false);

    const timer = setTimeout(() => setFadeOut(true), 800);
    const removeTimer = setTimeout(() => setLoading(false), 1300);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [location.pathname]);

  return (
    <>
      {/* ✅ Loader overlays the page while fading */}
      {loading && (
        <div
          className={`fixed inset-0 z-50 bg-[#0A0A0A] flex items-center justify-center transition-opacity duration-700 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loader />
        </div>
      )}

      <Navbar />

      {/* ✅ Page Transition with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="min-h-screen"
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/course/:id" element={<SingleCourse />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<SignUp />} />
            <Route path="/flutterwave-test" element={<FlutterwaveTest />} />
            <Route path="/details" element={<CourseDetails />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* ✅ Wrap App with AuthProvider */}
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
