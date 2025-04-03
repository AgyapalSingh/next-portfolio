"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const words = textRef.current.innerHTML.split(" ");
      textRef.current.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      const wordElements = gsap.utils.toArray(".word");

      gsap.fromTo(
        wordElements,
        { color: "var(--hover-color)" },
        {
          color: "var(--text-color)",
          stagger: 0.1, 
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="ag-about-container">
      <div className="ag-about-text">
        <h1 className="ag-about-text-1">Code.</h1>
        <h1 className="ag-about-text-2">Create.</h1>
        <h1 className="ag-about-text-3">Elevate.</h1>
      </div>

      <div className="ag-about-info">
        <div className="ag-about-info-img">
          <img src="Hero-Banner-Code.jpeg" alt="" />
        </div>

        <div className="ag-about-info-text">
          <p ref={textRef}>
            Websites are more than just functional spaces—they're immersive
            experiences where visuals, typography and motion come together to
            tell a story, evoke emotions and create memorable interactions.
            <br />
            <br />
            Every element, from the smallest detail to the overall design,
            plays a role in shaping how users feel and engage, transforming a
            simple visit into an inspiring journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
