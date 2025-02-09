import React, { useEffect, useState } from "react";
import img1 from "../img/img1.jpg"; // Your hero image

function Hero() {
  const [animate, setAnimate] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position
  const isMobile = window.innerWidth <= 768; // Mobile breakpoint

  useEffect(() => {
    setAnimate(true);

    // Handle scroll effect
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setScrollPosition(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        justifyContent: isMobile ? "center" : "flex-start",
        overflow: "hidden",
        flexDirection: isMobile ? "column-reverse" : "row",
        padding: isMobile ? "2rem 0" : "1rem 2rem",
      }}
    >
      <svg
        width={isMobile ? "80%" : "1300"} // Adjust width for mobile and desktop
        height={isMobile ? "auto" : "1600"} // Maintain aspect ratio
        viewBox="0 0 1300 1600"
        style={{
          transform: animate ? "translateX(0)" : "translateX(-100%)",
          opacity: animate ? 1 : 0,
          transition: "transform 1s ease-out, opacity 1s ease-out",
          maxWidth: "100%",
          margin: "0",
          alignSelf: isMobile ? "flex-start" : "auto", // Align to the left for mobile
          position: "relative",
          left: isMobile ? "0" : "-2rem", // Compensate for desktop padding
        }}
      >
        <defs>
          <clipPath id="quarterCircleClip">
            <path d="M 0,1600 L 1300,1600 A 1300,1600 0 0 0 0,0 Z" />
          </clipPath>
        </defs>
        <image
          href={img1}
          clipPath="url(#quarterCircleClip)"
          x="0"
          y={-scrollPosition * 0.8} // Stronger parallax effect
          width="1500"
          height="2000"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>

      <div
        style={{
          marginLeft: isMobile ? "0" : "2rem",
          marginBottom: isMobile ? "1rem" : "0",
          color: "#fff",
          textAlign: isMobile ? "center" : "left",
          transform: animate
            ? isMobile
              ? "translateY(0)"
              : "translateX(0)"
            : isMobile
            ? "translateY(100%)"
            : "translateX(100%)",
          opacity: animate ? 1 : 0,
          transition: "transform 1s ease-out, opacity 1s ease-out",
        }}
      >
        <h1 style={{ fontSize: isMobile ? "2rem" : "3rem", margin: 0 }}>
          Professional Nursing Recruiting Agency (PNRA)
        </h1>
        <p style={{ fontSize: isMobile ? "1.2rem" : "1.5rem", margin: "0.5rem 0 0" }}>
          Bridging the gap in healthcare needs
        </p>
      </div>
    </section>
  );
}

export default Hero;
