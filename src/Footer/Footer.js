import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
//import 'font-awesome/css/font-awesome.min.css';
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h3> &#169; Alex McCaffrey</h3>
      <section className="social-icons">
        <a
        className="social-btn"
        href="mailto:alexmccaffrey07@gmail.com"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
      </a>
        <a
          className="social-btn"
          href="https://github.com/amccaff20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>

        <a
          className="social-btn"
          href="https://www.linkedin.com/in/alex-mccaffrey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
