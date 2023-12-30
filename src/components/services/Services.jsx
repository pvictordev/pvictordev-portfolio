import { useState } from "react";
import "./services.css";
import PropTypes from "prop-types";
const Services = ({ theme }) => {
  Services.propTypes = {
    theme: PropTypes.bool.isRequired,
  };
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className={theme ? "section__title title-dark" : "section__title"}>
        Services
      </h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div
          className={
            theme
              ? "services__content content-services-dark"
              : "services__content"
          }
        >
          <div>
            <i
              className={
                theme
                  ? "bx bx-code-block services__icon  servies-icon-dark"
                  : "bx bx-code-block services__icon "
              }
            ></i>

            <h3
              className={
                theme
                  ? "services__title services-title-dark"
                  : "services__title"
              }
            >
              Web
              <br />
              Developer
            </h3>

            <span
              className={
                theme
                  ? "services__button services-button-dark"
                  : "services__button"
              }
              onClick={() => toggleTab(1)}
            >
              View More
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-arrow-right services__button-icon"
              ></i>
            </span>

            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div
                className={
                  theme
                    ? "services__modal-content services__modal-content-dark "
                    : "services__modal-content"
                }
              >
                <i
                  onClick={() => toggleTab(0)}
                  className={
                    theme
                      ? "uil uil-times services__modal-close modal-close-dark"
                      : "uil uil-times services__modal-close"
                  }
                ></i>

                <h3
                  className={
                    theme
                      ? "services__modal-title service-modal-title-dark"
                      : "services__modal-title"
                  }
                >
                  Web Developer
                </h3>
                <p className="services__modal-description">
                  Service with almost 1 year of experience. Providing quality
                  work to clients and companies
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web Design Implementation
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Creating UX element interactions
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Responsive Web Development
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Database Management</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">API Development</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            theme
              ? "services__content content-services-dark"
              : "services__content"
          }
        >
          <div>
            <i
              className={
                theme
                  ? "uil uil-arrow services__icon  servies-icon-dark"
                  : "uil uil-arrow services__icon "
              }
            ></i>

            <h3
              className={
                theme
                  ? "services__title services-title-dark"
                  : "services__title"
              }
            >
              Front-End
              <br />
              Developer
            </h3>

            <span
              className={
                theme
                  ? "services__button services-button-dark"
                  : "services__button"
              }
              onClick={() => toggleTab(2)}
            >
              View More
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-arrow-right services__button-icon"
              ></i>
            </span>

            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div
                className={
                  theme
                    ? "services__modal-content services__modal-content-dark "
                    : "services__modal-content"
                }
              >
                <i
                  onClick={() => toggleTab(0)}
                  className={
                    theme
                      ? "uil uil-times services__modal-close modal-close-dark"
                      : "uil uil-times services__modal-close"
                  }
                ></i>

                <h3
                  className={
                    theme
                      ? "services__modal-title service-modal-title-dark"
                      : "services__modal-title"
                  }
                >
                  Front-End Developer
                </h3>
                <p className="services__modal-description">
                  Service with more than 1 year of experience. Providing quality
                  work to clients and companies
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web Design Implementation
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Responsive Web Development
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">UI Development</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      {" "}
                      Cross-Browser Compatibility
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Integration with Back-End
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            theme
              ? "services__content content-services-dark"
              : "services__content"
          }
        >
          <div>
            <i
              className={
                theme
                  ? "bx bx-code-alt services__icon  servies-icon-dark"
                  : "bx bx-code-alt services__icon "
              }
            ></i>

            <h3
              className={
                theme
                  ? "services__title services-title-dark"
                  : "services__title"
              }
            >
              Back-End
              <br />
              Developer
            </h3>

            <span
              className={
                theme
                  ? "services__button services-button-dark"
                  : "services__button"
              }
              onClick={() => toggleTab(3)}
            >
              View More
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-arrow-right services__button-icon"
              ></i>
            </span>

            {/* <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">Back-End Developer</h3>
                <p className="services__modal-description">
                  Service with almost 1 year of experience. Providing quality
                  work to clients and companies
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Database Management</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">API Development</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Integration</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Version Control</p>
                  </li>

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Testing and Debugging
                    </p>
                  </li>
                </ul>
              </div>
            </div> */}

            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div
                className={
                  theme
                    ? "services__modal-content services__modal-content-dark "
                    : "services__modal-content"
                }
              >
                <i
                  onClick={() => toggleTab(0)}
                  className={
                    theme
                      ? "uil uil-times services__modal-close modal-close-dark"
                      : "uil uil-times services__modal-close"
                  }
                ></i>

                <h3
                  className={
                    theme
                      ? "services__modal-title service-modal-title-dark"
                      : "services__modal-title"
                  }
                >
                  Back-End Developer
                </h3>
                <p className="services__modal-description">
                  Service with almost 1 year of experience. Providing quality
                  work to clients and companies
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Database Management</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">API Development</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">Cloud Integration</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info"> Version Control</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Testing and Debugging
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

var i = {};
i.am = ["victor"];

i.contact = {
  email: "bic",
};
