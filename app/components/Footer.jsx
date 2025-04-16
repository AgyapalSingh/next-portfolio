import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="ag-footer-container">
        <div className="ag-footer-left">
          <h1>
            From design to <span>deployment</span> —
            <br />I make your vision web-ready.
          </h1>
          <p>
            "Let’s bring your ideas to life with sleek, custom-crafted web
            experiences that truly reflect your vision."
          </p>
          <div className="ag-footer-social-link">
            <div>
              <FaLinkedin />
            </div>

            <div>
              <FaGithub />
            </div>

            <div>
              <AiFillInstagram />
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
