import React, { useEffect, useState } from "react";
import img1 from "../img/img1.jpg"; // your hero image

function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundColor: "#000",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        overflow: "hidden"
      }}
    >
      <svg
        width="1200"
        height="1500"
        viewBox="0 0 1200 1500"
        style={{
          transform: animate ? "translateX(0)" : "translateX(-100%)",
          opacity: animate ? 1 : 0,
          transition: "transform 1s ease-out, opacity 1s ease-out"
        }}
      >
        <defs>
          <clipPath id="quarterCircleClip">
            {/* Path for a reduced-width quarter-circle */}
            <path d="M 0,1500 L 1200,1500 A 1200,1500 0 0 0 0,0 Z" />
          </clipPath>
        </defs>

        <image
          href={img1}
          clipPath="url(#quarterCircleClip)"
          x="0"
          y="0"
          width="1200"
          height="1500"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>

      <div
        style={{
          marginLeft: "2rem",
          color: "#fff",
          transform: animate ? "translateX(0)" : "translateX(100%)",
          opacity: animate ? 1 : 0,
          transition: "transform 1s ease-out, opacity 1s ease-out"
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: 0 }}>
          Professional Nursing Recruiting Agency (PNRA)
        </h1>
        <p style={{ fontSize: "1.5rem", margin: "0.5rem 0 0" }}>
          Bridging the gap in healthcare needs
        </p>
      </div>
    </section>
  );
}

export default Hero;
