'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ag-contact-form form", {
        opacity: 0,
        y: 50,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ag-contact-form",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".ag-contact-form input, .ag-contact-form textarea, .ag-contact-form button", {
        opacity: 0,
        y: 30,
        stagger: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ag-contact-form",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="ag-contact-container" ref={containerRef}>
      <div className="ag-contact-title">
        <div>
          <h2>Contact</h2>
          <p>Get in touch with me</p>
        </div>
      </div>

      <div className="ag-contact-content">
        <div className="ag-contact-form">
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Tell me your requirement"
              required
            />
            <div>
              <p>*Text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, minus!</p>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
