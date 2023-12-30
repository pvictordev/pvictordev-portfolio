import { useState } from "react";
import "./qualification.css";
import PropTypes from "prop-types";

const Qualification = ({ theme }) => {
  Qualification.propTypes = {
    theme: PropTypes.bool.isRequired,
  };

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // const qualificationData = [
  //   {
  //     id: 1,
  //     title: "Learn React",
  //     subtitle: "Scrimba",
  //     calendar: "2022 - 2023",
  //   },
  //   {
  //     id: 2,
  //     title: "JavaScript Essentials 1",
  //     subtitle: "Cisco",
  //     calendar: "2023 - 2023",
  //   },
  //   {
  //     id: 3,
  //     title: "Responsive Web Design",
  //     subtitle: "freeCodeCamp",
  //     calendar: "2022 - 2022",
  //   },
  //   {
  //     id: 4,
  //     title: "Postman API Fundamentals Student Expert",
  //     subtitle: "Postman",
  //     calendar: "2023 - 2023",
  //   },
  //   {
  //     id: 5,
  //     title: "Computer Science",
  //     subtitle: "Lucian Blaga University of Sibiu",
  //     calendar: "2022 - Present",
  //   },
  // ];

  // const qualificationDataMap = qualificationData.map((data) => {
  //   return (
  //     <div key={data.id} className="qualification__data">
  //       <div>
  //         <h3 className="qualification__title">{data.title}</h3>
  //         <span className="qualification__subtitle">{data.subtitle}</span>
  //         <div className="qualification__calendar">
  //           <i className="uil uil-calendar-alt"></i> {data.calendar}
  //         </div>
  //       </div>

  //       <div>
  //         <span className="qualification__rounder"></span>
  //         <span className="qualification__line"></span>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <div>
      <section className="qualification section">
        <h2 className={theme ? "section__title title-dark" : "section__title"}>
          Qualification
        </h2>
        <span className="section__subtitle">My journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? theme
                    ? "qualification__button qualification-button-dark button--flex "
                    : "qualification__button button--flex"
                  : theme
                  ? "qualification__button qualification-button-dark   button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>
            <div
              className={
                toggleState === 2
                  ? theme
                    ? "qualification__button qualification-button-dark button--flex "
                    : "qualification__button button--flex"
                  : theme
                  ? "qualification__button qualification-button-dark   button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
              Experience
            </div>
          </div>

          <div
            className={
              theme
                ? "qualification__sections sections-dark"
                : "qualification__sections"
            }
          >
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title"> Learn React </h3>
                  <span className="qualification__subtitle">Scrimba</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">
                    JavaScript Essentials 1
                  </h3>
                  <span className="qualification__subtitle">Cisco</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2023 - 2023
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Responsive Web Design
                  </h3>
                  <span className="qualification__subtitle">freeCodeCamp</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022 - 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Postman API Fundamentals Student Expert
                  </h3>
                  <span className="qualification__subtitle">Postman</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2023 - 2023
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Computer Science</h3>
                  <span className="qualification__subtitle">
                    Lucian Blaga University of Sibiu
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    WebDev Remote Learning
                  </h3>
                  <span className="qualification__subtitle">Nagarro</span>
                  <div className="qualification__calendar">
                    {/* <i className="uil uil-calendar-alt"></i>  */}
                    Nov 2023 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h3 className="qualification__title">Web Developer</h3>
                  <span className="qualification__subtitle">
                    Personal Projects
                  </span>
                  <div className="qualification__calendar">
                    {/* <i className="uil uil-calendar-alt"></i>  */}
                    Mar 2023 - Present
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Developer</h3>
                  <span className="qualification__subtitle">Freelance</span>
                  <div className="qualification__calendar">
                    {/* <i className="uil uil-calendar-alt"></i> */}
                    Feb 2023 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Qualification;
