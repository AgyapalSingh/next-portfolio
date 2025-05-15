"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectImages = [
  { src: "/projects/CalledtoSurf.png", alt: "Called to Surf Project" },
  { src: "/projects/vixenAndFox.png", alt: "Vixen and Fox Project" },
  { src: "/projects/UniqayaLifeStyles.png", alt: "Uniqaya LifeStyles Project" },
  { src: "/projects/ClaretWorld.png", alt: "Claret World – Coming Soon" },
];

const Projects = () => {
  const imagesRef = useRef([]);

  const setImageRef = useCallback((el, index) => {
    if (el) imagesRef.current[index] = el;
  }, []);

  useEffect(() => {
    const animations = imagesRef.current.map((img) =>
      gsap.from(img, {
        y: 150,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    );

    return () => {
      animations.forEach((animation) => animation.scrollTrigger?.kill());
    };
  }, []);

  return (
    <div className="ag-projects-container">
      <div className="ag-projects-title">
        <div>
          <h2>Projects</h2>
          <p>Showcasing my Selected Works</p>
        </div>
      </div>

      <div className="ag-projects-content">
        {projectImages.map((project, index) => (
          <div className="ag-projects" key={index}>
            <img
              src={project.src}
              alt={project.alt}
              ref={(el) => setImageRef(el, index)}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
