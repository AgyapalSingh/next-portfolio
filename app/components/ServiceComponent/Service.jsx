"use client";
import { useEffect, useRef } from "react";
import { FaWordpress, FaReact, FaShopify, FaNodeJs } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiGoogleAnalytics } from "react-icons/di";
import { SiMongodb, SiExpress } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { SiHostinger } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiGodaddy } from "react-icons/si";
import { FaAws } from "react-icons/fa";
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
              start: "top 65%",
              end: "top -20%",
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
              start: "top 60%",
              end: "top -25%",
              scrub: true,
            },
          }
        );
      },
    });
  }, []);

  return (
    <div className="ag-service-container" ref={containerRef}>
      <div className="ag-services-title">
        <h1>What I think we knows !</h1>
      </div>

      <div className="ag-all-services">
        <div className="ag-service">
          <AiOutlineHtml5 className="service-icon" />
          <span>HTML</span>
        </div>

        <div className="ag-service">
          <FaCss3 className="service-icon" />
          <span>CSS</span>
        </div>

        <div className="ag-service">
          <FaNodeJs className="service-icon" />
          <span>Node.js</span>
        </div>

        <div className="ag-service">
          <SiExpress className="service-icon" />
          <span>Express.js</span>
        </div>

        <div className="ag-service">
          <SiMongodb className="service-icon" />
          <span>MongoDB</span>
        </div>
        <div className="ag-service">
          <RiNextjsFill className="service-icon" />
          <span>Next.js</span>
        </div>

        <div className="ag-service">
          <FaReact className="service-icon" />
          <span>React</span>
        </div>
        <div className="ag-service">
          <FaWordpress className="service-icon" />
          <span>WordPress</span>
        </div>
        <div className="ag-service">
          <FaShopify className="service-icon" />
          <span>Shopify</span>
        </div>

        <div className="ag-service">
          <DiGoogleAnalytics className="service-icon" />
          <span>Google Analytics</span>
        </div>

        <div className="ag-service">
          <FaGitAlt className="service-icon" />
          <span>Git</span>
        </div>

        <div className="ag-service">
          <VscGithubInverted className="service-icon" />
          <span>GitHub</span>
        </div>

        <div className="ag-service">
          <SiHostinger className="service-icon" />
          <span>Hostinger</span>
        </div>

        <div className="ag-service">
          <IoLogoVercel className="service-icon" />
          <span>Vercel</span>
        </div>
        <div className="ag-service">
          <SiGodaddy className="service-icon" />
          <span>GoDaddy</span>
        </div>
        <div className="ag-service">
          <FaAws className="service-icon" />
          <span>Amazon Web Services</span>
        </div>
      </div>
    </div>
  );
};

export default Service;
