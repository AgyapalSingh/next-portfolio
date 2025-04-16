'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    imagesRef.current.forEach((img, index) => {
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
      });
    });
  }, []);

  const projectImages = [
    { src: "Uniqaya_WebP.webp", alt: "Uniqaya Project" },
    { src: "Uniqaya_WebP.webp", alt: "Another Project" },
    { src: "Uniqaya_WebP.webp", alt: "Creative Work" },
  ];

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
              ref={(el) => (imagesRef.current[index] = el)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
