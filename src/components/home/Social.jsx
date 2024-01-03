import PropTypes from "prop-types";

const Social = ({ theme }) => {
  Social.propTypes = {
    theme: PropTypes.bool.isRequired,
  };
  return (
    <div className="home__social">
      <a
        href="https://github.com/pvictordev"
        className={theme ? "home__social-icon-dark" : "home__social-icon"}
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/victor-purice-204229276/"
        className={theme ? "home__social-icon-dark" : "home__social-icon"}
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://twitter.com/pvictordev"
        className={theme ? "home__social-icon-dark" : "home__social-icon"}
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-twitter-alt"></i>
      </a>
    </div>
  );
};

export default Social;
