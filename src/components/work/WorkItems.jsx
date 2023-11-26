import React from "react";

const WorkItems = ({ item, theme }) => {
  return (
    <div
      className={theme ? "work__card work-card-dark" : "work__card"}
      key={item.id}
    >
      <div className="work__img-container">
        <img src={item.image} className="work__img" />
      </div>

      <div className="work__text">
        <h3 className={theme ? "work__title work__title-dark" : "work__title"}>
          {item.title}
        </h3>

        <span className="work__description">{item.description}</span>

        <div className="work__check">
          <a
            href={item.code}
            className={theme ? "work__button work-button-dark" : "work__button"}
          >
            Code <i className="uil uil-github-alt"></i>
          </a>
          <a
            href={item.demo}
            className={theme ? "work__button work-button-dark" : "work__button"}
          >
            Demo <i className="uil uil-browser"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
