
import PropTypes from "prop-types";

const Info = ({ theme }) => {
  Info.propTypes = {
    theme: PropTypes.bool.isRequired,
  };

  return (
    <div>
      <div className="about__info grid">
        <div className={theme ? "about__box box-dark" : "about__box"}>
          <i
            className={
              theme
                ? "bx bx-award about__icon about-icon-dark"
                : "bx bx-award about__icon"
            }
          ></i>
          <h3
            className={theme ? "about__title about-title-dark" : "about__title"}
          >
            Experience
          </h3>
          <span className="about__subtitle">1+ Year</span>
        </div>

        <div className={theme ? "about__box box-dark" : "about__box"}>
          <i
            className={
              theme
                ? "bx bx-award about__icon about-icon-dark"
                : "bx bx-award about__icon"
            }
          ></i>
          <h3
            className={theme ? "about__title about-title-dark" : "about__title"}
          >
            Completed
          </h3>
          <span className="about__subtitle">20+ Projects</span>
        </div>

        <div className={theme ? "about__box box-dark" : "about__box"}>
          <i
            className={
              theme
                ? "bx bx-award about__icon about-icon-dark"
                : "bx bx-award about__icon"
            }
          ></i>
          <h3
            className={theme ? "about__title about-title-dark" : "about__title"}
          >
            Clients
          </h3>
          <span className="about__subtitle">5+ satisfied</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
