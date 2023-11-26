import React from "react";

const ScrollDown = ({ theme }) => {
  const wheelColor = theme ? "var(--theme-color-lighter)" : "var(--title-color)";
  const mouseColor = theme ? "var(--theme-color-lighter)" : "var(--title-color)";
  return (
    <div>
      <div className={theme ? "home__scroll scroll-dark" : "home__scroll"}>
        <a href="#about" className="home__scroll-button button--flex">
          <svg
            width="32px"
            height="32px"
            className="home__scroll-mouse"
            viewBox="0 0 247 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "1.5",
            }}
          >
            <path
              className="wheel"
              d="M123.359,79.775l0,72.843"
              style={{
                fill: "none",
                stroke: wheelColor,
                strokeWidth: "20px",
              }}
            ></path>
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style={{
                fill: "none",
                stroke: mouseColor,
                strokeWidth: "20px",
              }}
            ></path>
          </svg>
          <span
            className={
              theme ? "home__scroll-name scroll-name-dark" : "home__scroll-name"
            }
          >
            Scroll Down
          </span>
          <i
            className={
              theme
                ? "uil uil-arrow-down home__scroll-arrow scroll-arrow-dark"
                : "uil uil-arrow-down home__scroll-arrow"
            }
          ></i>
        </a>
      </div>
    </div>
  );
};

export default ScrollDown;
