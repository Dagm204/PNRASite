// src/components/About.js
import React, { useContext, useState, useEffect } from "react";
import LanguageContext from "../LanguageContext.js";
import useInView from "../useInView.js";
import "./About.css";

function About() {
  const { isEnglish } = useContext(LanguageContext);
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <section
      id="about"
      ref={ref}
      className={`about ${hasAnimated ? "animate" : ""}`}
    >
      <h2>{isEnglish ? "About Us" : "ስለ እኛ"}</h2>
      <p>
        {isEnglish
          ? "Professional Nursing Recruiting Agency (PNRA) is a U.S-based nonprofit organization dedicated to bridging healthcare gaps by recruiting and supporting qualified international nurses for placement in American healthcare facilities."
          : "የሙያ ነርስ አድራጎት ድርጅት (PNRA) በአሜሪካ ውስጥ ከተሟላ የአለም አቀፍ ነርስ ለማቅረብ እና ለድጋፍ የተቋቋመ ድርጅት ነው።"}
      </p>
    </section>
  );
}

export default About;
