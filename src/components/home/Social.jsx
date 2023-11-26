import React from "react";

const Social = ({ theme }) => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/pvictordev"
        className={theme ? "home__social-icon-dark" : "home__social-icon"}
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/victor-purice-204229276/"
        className={theme ? "home__social-icon-dark" : "home__social-icon"}
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://twitter.com/pvictordev"
        className={theme ? "home__social-icon-dark" : "home__social-icon"}
        target="_blank"
      >
        <i className="uil uil-twitter-alt"></i>
      </a>
    </div>
  );
};

export default Social;
