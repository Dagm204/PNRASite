// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import AboutUs from "./components/AboutUs.js";
import Mission from "./components/Mission.js";
import Approach from "./components/Approach.js";
import Footer from "./components/Footer.js";
import LanguageContext from "./LanguageContext.js";
import "./App.css";

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const toggleLanguage = () => setIsEnglish((prev) => !prev);

  return (
    <LanguageContext.Provider value={{ isEnglish, toggleLanguage }}>
      <Router>
        <div className="app-container">
          <Navbar />
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <div>
                  <Hero />
                  <About />
                  <Mission />
                  <Approach />
                </div>
              }
            />
            {/* About Us Page */}
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
