import React from "react";

const Info = ({ theme }) => {
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
          <span className="about__subtitle">1 Year Freelance</span>
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
          <span className="about__subtitle">10+ Projects</span>
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
            Support
          </h3>
          <span className="about__subtitle">Online 24/7</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
