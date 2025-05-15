"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLink } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const projectImages = [
  {
    src: "/projects/UniqayaLifeStyles.png",
    alt: "Uniqaya LifeStyles Project",
    link: "https://uniqaya.com/",
    btnText: "Live Preview",
  },
  {
    src: "/projects/CalledtoSurf.png",
    alt: "Called to Surf Project",
    link: "https://calledtosurf.com/",
    btnText: "Live Preview",
  },
  {
    src: "/projects/vixenAndFox.png",
    alt: "Vixen and Fox Project",
    link: "https://vixenandfox.com.au/",
    btnText: "Live Preview",
  },
  {
    src: "/projects/ClaretWorld.png",
    alt: "Claret World – Coming Soon",
    link: "#",
    btnText: "Coming Soon",
  },
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

            <a className="ag-projects-link-btn"  href={project.link} target="_blank" rel="noopener noreferrer">
              {project.btnText} <FaLink />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
