import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import CopyRight from "./HeaderComponents/CopyRight";

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

        <div className="ag-footer-right">
          <div className="ag-footer-addres-info">
            <div>
              <a
                href="https://www.google.com/maps?q=Mohali,+Punjab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLocationDot />
                <span>Mohali, Punjab</span>
              </a>
            </div>

            <div>
              <a href="mailto:agyapalsinghaujla@gmail.com">
                <MdEmail />
                <span>Mail</span>
              </a>
            </div>

            <div>
              <a href="tel:+919877500750">
                <MdPhone />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
