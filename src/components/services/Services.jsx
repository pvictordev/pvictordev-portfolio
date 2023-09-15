import React, { useState } from 'react'
import "./services.css"
const Services = () => {
    const [toggleState, setToggleState] = useState(0); 

    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
    <section className="services section" id='services'>
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">
            What i offer
        </span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="bx bx-code-block services__icon"></i>
                    <h3 className="services__title">Web<br/>Developer</h3>
                    <span className="services__button"
                    onClick={() => toggleTab(1)}>
                        View More
                        <i onClick={() => toggleTab(0)} className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className = {
                        toggleState === 1 ? "services__modal active-modal" : "services__modal"
                    }>
                        <div className="services__modal-content">
                            <i onClick = {() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                            <h3 className="services__modal-title">Web Developer</h3>
                            <p className='services__modal-description'>
                                Service with almost 1 year of experience.
                                Providing quality work to clients and companies
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web Design Implementation
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Creating UX element interactions
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Responsive Web Development
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Database Management
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       API Development
                                    </p>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Front-End<br/> Developer</h3>
                    <span onClick={() => toggleTab(2)} className="services__button">
                        View More
                        <i onClick={() => toggleTab(0)} className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className = {
                        toggleState === 2 ? "services__modal active-modal" : "services__modal"
                    }>
                        <div className="services__modal-content">
                            <i  onClick = {() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                            <h3 className="services__modal-title">Front-End Developer</h3>
                            <p className='services__modal-description'>
                                Service with more than 1 year of experience.
                                Providing quality work to clients and companies
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Web Design Implementation
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Responsive Web Development
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        UI Development
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Cross-Browser Compatibility
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Integration with Back-End
                                    </p>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="bx bx-code-alt services__icon"></i>
                    <h3 className="services__title">Back-End<br/> Developer</h3>
                    <span onClick={() => toggleTab(3)} className="services__button">
                        View More
                        <i onClick={() => toggleTab(0)} className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={
                        toggleState === 3 ? "services__modal active-modal" : "services__modal"
                    }>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                            <h3 className="services__modal-title">Back-End Developer</h3>
                            <p className='services__modal-description'>
                                Service with almost 1 year of experience.
                                Providing quality work to clients and companies
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Database Management
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        API Development
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Integration
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       Version Control
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                       Testing and Debugging
                                    </p>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services

var i = {}
i.am = ['victor']

i.contact = {
    email:'bic'
}
