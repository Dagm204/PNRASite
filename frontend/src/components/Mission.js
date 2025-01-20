// src/components/Mission.js
import React, { useContext, useState, useEffect } from "react";
import LanguageContext from "../LanguageContext.js";
import useInView from "../useInView.js";
import "./Mission.css";

function Mission() {
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
      id="mission"
      ref={ref}
      className={`mission ${hasAnimated ? "animate" : ""}`}
    >
      <h2>{isEnglish ? "Our Mission" : "ተልዕኮ"}</h2>
      <p>
        {isEnglish
          ? "To meet critical healthcare needs across the U.S. by serving as a trusted liaison connecting international RNs with healthcare providers."
          : "በአሜሪካ አገር ውስጥ ከሚገኙ ጤና ተቋማት ጋር የተገባ ግንኙነት በመስጠት ሁሉንም ጥቅም የሚያመጣ እና በተሟላ ተሟላ ነርስ እንዲሆኑ የሚያስችል ተልዕኮ ነው።"}
      </p>
    </section>
  );
}

export default Mission;
