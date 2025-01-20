// src/components/Navbar.js
import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageContext from "../LanguageContext.js";
import "./Navbar.css";

function Navbar() {
  const { isEnglish, toggleLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  const location = useLocation();

  const navText = {
    home: isEnglish ? "Home" : "መነሻ",
    about: isEnglish ? "About Us" : "ስለ እኛ",
    mission: isEnglish ? "Mission" : "ተልዕኮ",
    approach: isEnglish ? "Our Approach" : "የእኛ ዘዴ",
    fillForm: isEnglish ? "Fill Out Form" : "ቅጽ ይሙሉ",
  };

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // Navigate to home first if not already there
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Short delay to ensure the home page loads
    } else {
      // Scroll directly if already on the home page
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      {/* Make PNRA clickable and scroll to the Home section */}
      <h1 className="navbar-title" onClick={() => scrollToSection("home")}>
        PNRA
      </h1>
      <ul className="navbar-links">
        <li onClick={() => scrollToSection("home")}>{navText.home}</li>
        <li>
          <a href="/about-us">{navText.about}</a>
        </li>
        <li onClick={() => scrollToSection("mission")}>{navText.mission}</li>
        <li onClick={() => scrollToSection("approach")}>{navText.approach}</li>
        <li>
          <a href="https://forms.gle/AAuDcCMY5bfE3xiE9" target="_blank" rel="noopener noreferrer">
            {navText.fillForm}
          </a>
        </li>
      </ul>
      <div className="language-toggle" onClick={toggleLanguage}>
        <div className={`toggle-slider ${isEnglish ? "english" : "amharic"}`}>
          {isEnglish ? "EN" : "አማ"}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
