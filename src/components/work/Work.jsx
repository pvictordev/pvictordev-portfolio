import "./work.css";
import Works from "./Works";
import PropTypes from "prop-types";

const Work = ({ theme }) => {
  Work.propTypes = {
    theme: PropTypes.bool.isRequired,
  };
  return (
    <div>
      <section className="work section" id="portfolio">
        <h2 className={theme ? "section__title title-dark" : "section__title"}>
          Portfolio
        </h2>
        <span className="section__subtitle">My personal projects</span>

        <Works theme={theme} />
      </section>
    </div>
  );
};

export default Work;
