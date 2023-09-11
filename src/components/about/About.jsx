import React from 'react'
import "./about.css"; 
import AboutImg from "../../assets/about.png"
import CV from "../../assets/pvictordev-CV.pdf"

const About = () => {
  return (
    <div>
      <section className='about section' id="about">
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid"></div>
      </section>
    </div>
  )
}

export default About
