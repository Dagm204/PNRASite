// src/components/Home.js
import React, { useContext } from "react";
import LanguageContext from "../LanguageContext.js";
import "../App.css";

function Home() {
  const { isEnglish } = useContext(LanguageContext);

  return (
    <section id="home" className="home">
      <h2>
        {isEnglish
          ? "Professional Nursing Recruiting Agency (PNRA)"
          : "የሙያ ነርስ እና ተቋማት የመስመር ግንኙነት (PNRA)"}
      </h2>
      <p>
        {isEnglish
          ? "Bridging the gap in healthcare needs."
          : "በጤና ፍላጎቶች መካከል ግንኙነት መፍጠር።"}
      </p>
    </section>
  );
}

export default Home;
