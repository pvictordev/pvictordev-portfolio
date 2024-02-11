import { useState } from "react";
import "./header.css";
import PropTypes from "prop-types";

const Header = ({ theme, themeToggle }) => {
  Header.propTypes = {
    theme: PropTypes.bool.isRequired,
    themeToggle: PropTypes.func.isRequired,
  };

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 200) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

  // toggle menu
  const [Toggle, showMenu] = useState(false);
  // active and remove menu
  const [activeNav, setActiveNav] = useState("");

  return (
    <header className={`header ${theme ? "dark" : "light"}`} id="header">
      <nav className="nav container">
        <i
          className={`bx bx-adjust theme-toggle__icon ${theme ? "icon-dark" : ""
            }`}
          onClick={themeToggle}
        ></i>
        <a
          href="#home"
          className={`nav__logo ${theme ? "logo-dark" : ""}`}
        >
          pvictordev
        </a>

        <div
          className={
            theme
              ? Toggle
                ? "nav__menu-dark show-menu"
                : "nav__menu"
              : Toggle
                ? "nav__menu show-menu"
                : "nav__menu"
          }
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  theme
                    ? activeNav === "#home"
                      ? "nav__link-dark active-link-dark"
                      : "nav__link-dark"
                    : activeNav === "#home"
                      ? "nav__link active-link"
                      : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  theme
                    ? activeNav === "#about"
                      ? "nav__link-dark active-link-dark"
                      : "nav__link-dark"
                    : activeNav === "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            {/* <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li> */}

            {/* <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  theme
                    ? activeNav === "#services"
                      ? "nav__link-dark active-link-dark"
                      : "nav__link-dark"
                    : activeNav === "#services"
                      ? "nav__link active-link"
                      : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>Services
              </a>
            </li> */}

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  theme
                    ? activeNav === "#portfolio"
                      ? "nav__link-dark active-link-dark"
                      : "nav__link-dark"
                    : activeNav === "#portfolio"
                      ? "nav__link active-link"
                      : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  theme
                    ? activeNav === "#contact"
                      ? "nav__link-dark active-link-dark"
                      : "nav__link-dark"
                    : activeNav === "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className={
              theme
                ? "uil uil-times nav__close-dark"
                : "uil uil-times nav__close"
            }
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div
          className={theme ? "nav__toggle-dark" : "nav__toggle"}
          onClick={() => showMenu(!Toggle)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
