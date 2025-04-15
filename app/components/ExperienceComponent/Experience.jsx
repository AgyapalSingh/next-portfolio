"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".ag-experience-experience-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          x: -100
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2
        }
      );
    });
  }, []);

  return (
    <div className="ag-experience-container" ref={containerRef}>
      <div className="ag-experience-title">
        <div>
          <h2>experience</h2>
          <p>Showcasing my development journey</p>
        </div>
      </div>

      <div className="ag-experience-content">
        <div className="ag-experience-experience-card">
          <div className="ag-experience-experience-details">
            <h1>Unimarck Pharma Ltd.</h1>
            <h2>Junior Web Developer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              vitae labore corrupti, atque aperiam consectetur unde eos tempora
              nam quidem amet asperiores repellat incidunt veniam.
            </p>
          </div>
          <div className="ag-experience-experience-time-period">
            [ July, 2024 - Present ]
          </div>
        </div>

        <div className="ag-experience-experience-card">
          <div className="ag-experience-experience-details">
            <h1>Echo Web Studio</h1>
            <h2>Junior Web Developer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              neque consequuntur sapiente dignissimos, impedit reprehenderit
              maxime molestiae repudiandae distinctio quasi sit. Tempora
              possimus harum laborum?
            </p>
          </div>
          <div className="ag-experience-experience-time-period">
            [ Sep, 2023 - June, 24 ]
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
