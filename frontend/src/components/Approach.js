// src/components/Approach.js
import React, { useContext, useState, useEffect } from "react";
import LanguageContext from "../LanguageContext.js";
import useInView from "../useInView.js";
import "./Approach.css";

// Import mini category images:
import oa1 from "../img/oa1.jpg";
import oa2 from "../img/oa2.jpg";
import oa3 from "../img/oa3.jpg";
import oa4 from "../img/oa4.jpg";
import oa5 from "../img/oa5.jpg";
import oa6 from "../img/oa6.jpg";

function Approach() {
  const { isEnglish } = useContext(LanguageContext);
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  // Define the six mini categories.
  // You can adjust the text as needed.
  const approachItems = [
    {
      number: "1.",
      title: isEnglish ? "Strategic Partnership" : "የስራ ስርአተ እኩልነት",
      description: isEnglish
        ? "Collaborate with healthcare institutions worldwide."
        : "ከዓለም ላይ ያሉ ጤና ተቋማት ጋር ተባባሪ ይሁኑ።",
      image: oa1,
    },
    {
      number: "2.",
      title: isEnglish ? "Step-by-Step Support" : "የደረጃ ደረጃ ድጋፍ",
      description: isEnglish
        ? "Guide candidates through U.S. licensure."
        : "ለአሜሪካ ፈቃድ ደረጃ ተሟላ ድጋፍ።",
      image: oa2,
    },
    {
      number: "3.",
      title: isEnglish ? "Trusted Support" : "የታማኝ ድጋፍ",
      description: isEnglish
        ? "Provide a clear path in processes."
        : "በሂደቶች ውስጥ ግልጽ መንገድ ይሰጡ።",
      image: oa3,
    },
    {
      number: "4.",
      title: isEnglish ? "Targeted Marketing" : "የተመረጡ ማርኬቲንግ",
      description: isEnglish
        ? "Connect with potential candidates via digital channels."
        : "በዲጂታል ማርኬቲንግ ግንኙነት ይገኙ።",
      image: oa4,
    },
    {
      number: "5.",
      title: isEnglish ? "Expert Guidance" : "የሙያ ምክር",
      description: isEnglish
        ? "Assistance from document review to placement."
        : "ከሰነዶች ጀምሮ መቀመጫ ድጋፍ።",
      image: oa5,
    },
    {
      number: "6.",
      title: isEnglish ? "Smooth Transition" : "ቀላል ለውጥ",
      description: isEnglish
        ? "Help cultural integration and training."
        : "ለባህላዊ መገናኘት እና ስልጠና ድጋፍ።",
      image: oa6,
    },
  ];

  return (
    <section id="approach" ref={ref} className={`approach ${hasAnimated ? "animate" : ""}`}>
      <h2>{isEnglish ? "Our Approach" : "የእኛ ዘዴ"}</h2>
      <div className="approach-grid">
        {approachItems.map((item, idx) => (
          <div key={idx} className="approach-tile">
            <div className="tile-header">
              <span className="tile-number">{item.number}</span>
              <span className="tile-title">{item.title}</span>
            </div>
            <div className="tile-hover-content">
              <p className="tile-description">{item.description}</p>
              <img className="tile-image" src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Approach;
