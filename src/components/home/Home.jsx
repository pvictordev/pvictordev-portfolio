import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = ({ theme }) => {
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
