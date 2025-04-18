"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const IntroLoader = ({ onFinish }) => {
  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
        if (onFinish) onFinish();
      },
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    )
      .to(
        leftDoorRef.current,
        { x: "-100%", duration: 1.5, ease: "power3.inOut" },
        "+=0.5"
      )
      .to(
        rightDoorRef.current,
        { x: "100%", duration: 1.5, ease: "power3.inOut" },
        "<"
      )
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none",
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className="ag-intro-loader-container"
    >
      <div ref={leftDoorRef} className="ag-intro-left-door" />
      <div ref={rightDoorRef} className="ag-intro-right-door" />
      <div ref={logoRef} className="ag-intro-logo">
        <h1 className="text-white text-3xl font-bold">LOGO</h1>
      </div>
    </div>
  );
};

export default IntroLoader;
