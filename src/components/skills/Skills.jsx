import React from 'react'
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <div>
      <section className="skills section" id="skills">
        <h2 className="section__title">Tech-Stack</h2>
        <span className="section__subtitle">
          Technologies that I use the most
        </span>
        <div className="skills__container container grid">
          <Frontend />
          <Backend />
        </div>
      </section>
    </div>
  );
}

export default Skills
