import "./footer.css";
import PropTypes from "prop-types";

const Footer = ({ theme }) => {
  Footer.propTypes = {
    theme: PropTypes.bool.isRequired,
  };
  return (
    <footer className={theme ? "footer footer-dark" : "footer"} id="footer">
      <div className="footer__container">
        <h1
          className={
            theme ? "footer__title footer-title-dark" : "footer__title"
          }
        >
          pvictordev
        </h1>

        <ul className={theme ? "footer__list dark-list" : "footer__list"}>
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/pvictordev"
            className="footer__social-link"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/victor-purice-204229276/"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a href="https://twitter.com/pvictordev" className="footer__social-link">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className={theme ? "footer__copy copy-dark" : "footer__copy"}>
          {" "}
          &#169; pvictordev 2023. All rights are reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
