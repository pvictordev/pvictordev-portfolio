import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import PropTypes from "prop-types";

const Home = ({ theme }) => {
  Home.propTypes = {
    theme: PropTypes.bool.isRequired,
  };
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social theme={theme} />
          <div className={theme ? "home__img img-dark" : "home__img"}></div>
          <Data theme={theme} />
        </div>
        <ScrollDown theme={theme} />
      </div>
    </section>
  );
};

export default Home;
