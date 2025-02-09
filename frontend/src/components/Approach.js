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
      title: isEnglish ? "Strategic Partnership" : "ስልታዊ አጋርነት",
      description: isEnglish
        ? "Collaborate with healthcare institutions worldwide."
        : "በዓለም ዙሪያ ካሉ የጤና እንክብካቤ ተቋማት ጋር ይተባበሩ።",
      image: oa1,
    },
    {
      number: "2.",
      title: isEnglish ? "Step-by-Step Support" : "የደረጃ በደረጃ ድጋፍ",
      description: isEnglish
        ? "Guide candidates through U.S. licensure."
        : "በአሜሪካ ፍቃድ እጩዎችን መምራት።",
      image: oa2,
    },
    {
      number: "3.",
      title: isEnglish ? "Trusted Support" : "የታመነ ድጋፍ",
      description: isEnglish
        ? "Provide a clear path in processes."
        : "በሂደቶች ውስጥ ግልጽ የሆነ መንገድ ማቅረብ።",
      image: oa3,
    },
    {
      number: "4.",
      title: isEnglish ? "Targeted Marketing" : "የታለመ ግብይት",
      description: isEnglish
        ? "Connect with potential candidates via digital channels."
        : "ሊሆኑ ከሚችሉ እጩዎች ጋር በዲጂታል ቻናሎች ይገናኙ።",
      image: oa4,
    },
    {
      number: "5.",
      title: isEnglish ? "Expert Guidance" : "የባለሙያዎች መመሪያ",
      description: isEnglish
        ? "Assistance from document review to placement."
        : "ከሰነድ ግምገማ እስከ ምደባ ድረስ እገዛ።",
      image: oa5,
    },
    {
      number: "6.",
      title: isEnglish ? "Smooth Transition" : "ቀላል ሽግግር",
      description: isEnglish
        ? "Help cultural integration and training."
        : "የባህል ውህደት እና ስልጠናን መርዳት።",
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
