"use client";
import { useEffect, useRef } from "react";
import { FaWordpress, FaReact, FaShopify } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { DiGoogleAnalytics } from "react-icons/di";
import { SiMongodb, SiExpress } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const icons = gsap.utils.toArray(".service-icon");

    ScrollTrigger.matchMedia({
      "(min-width: 769px)": function () {
        gsap.fromTo(
          icons,
          { color: "var(--hover-color)" },
          {
            color: "var(--text-color)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
              end: "top 10%",
              scrub: true,
            },
          }
        );
      },

      "(max-width: 768px)": function () {
        gsap.fromTo(
          icons,
          { color: "var(--hover-color)" },
          {
            color: "var(--text-color)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      },
    });
  }, []);

  return (
    <div className="ag-service-container" ref={containerRef}>
      <div className="ag-service">
        <FaReact className="service-icon" />
      </div>
      <div className="ag-service">
        <FaWordpress className="service-icon" />
      </div>
      <div className="ag-service">
        <FaShopify className="service-icon" />
      </div>
      <div className="ag-service">
        <RiNextjsFill className="service-icon" />
      </div>
      <div className="ag-service">
        <RiNextjsFill className="service-icon" />
      </div>
      <div className="ag-service">
        <DiGoogleAnalytics className="service-icon" />
      </div>
      <div className="ag-service">
        <SiMongodb className="service-icon" />
      </div>
      <div className="ag-service">
        <SiExpress className="service-icon" />
      </div>

      <div className="ag-service">
        <VscGithubInverted className="service-icon" />
      </div>

      <div className="ag-service">
        <FaGitAlt className="service-icon" />
      </div>

      <div className="ag-service">
        <FaHtml5 className="service-icon" />
      </div>

      <div className="ag-service">
        <FaCss3 className="service-icon" />
      </div>
    </div>
  );
};

export default Service;
