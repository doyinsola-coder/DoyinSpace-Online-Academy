import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SingleCourse from "./pages/SingleCourse";  // ✅ updated
import Contact from "./pages/Contact";
import Course from "./pages/Course";          // ✅ updated

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />          {/* ✅ course list */}
        <Route path="/course/:id" element={<SingleCourse />} />  {/* ✅ dynamic course details */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
