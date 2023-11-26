import React from "react";
import "./work.css";
import Works from "./Works";

const Work = ({theme}) => {
  return (
    <div>
      <section className="work section" id="portfolio">
        <h2 className={theme ? "section__title title-dark" : "section__title"}>
          Portfolio
        </h2>
        <span className="section__subtitle">My personal projects</span>

        <Works theme={theme}/>
      </section>
    </div>
  );
};

export default Work;
