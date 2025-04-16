"use client";
import { useState, useEffect } from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about","skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 130,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
      <div className="ag-navbar-div">
        <h1 className="ag-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>W</h1>
        <ul className="ag-nav-links">
          {["about", "skills", "experience", "projects"].map((item) => (
            <li key={item}>
              <button
                className={activeSection === item ? "active" : ""}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)} 
              </button>
            </li>
          ))}
        </ul>
        <div className="ag-nav-contact">
          <button onClick={() => scrollToSection("contact")}>Hire Me</button>
        </div>

        <div className="ag-nav-hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <IoMdClose className=" nav-icon nav-icon-close" />
          ) : (
            <HiOutlineBars3CenterLeft className="nav-icon" />
          )}
        </div>
      </div>

      <div
        className={`ag-mobile-navbar  ${
          isMobileMenuOpen ? "mobileDrawerOpen" : ""
        }`}
      >
        <ul className="ag-mobile-nav-links">
          {["about", "skills", "experience", "projects"].map((item) => (
            <li key={item} onClick={toggleMobileMenu}>
              <button
                className={activeSection === item ? "active" : ""}
                onClick={() => scrollToSection(item)} 
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}    <LuExternalLink className="nav-link-icon" />
              </button>
            </li>
          ))}
        </ul>

        <div className="ag-mobile-nav-contact" onClick={toggleMobileMenu}>
          <button onClick={() => scrollToSection("contact")}>Hire Me</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
