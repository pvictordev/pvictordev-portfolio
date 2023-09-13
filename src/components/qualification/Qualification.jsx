import React, {useState} from 'react';
import "./qualification.css"; 

const Qualification = () => {
    const [toggleState, setToggleState] = useState(0); 

    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
    <div>
      <section className='qualification section'>
      <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">
            My journey
        </span> 

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={
                        toggleState === 1 ? "qualification__button button--flex": "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={
                        toggleState === 2 ? "qualification__button button--flex": "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div 
                className={
                    toggleState === 1 
                    ? "qualification__content qualification__content-active"
                    : "qualification__content"}
                >

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"> EXP-1 </h3>
                            <span className="qualification__subtitle">ULBS</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">EXP-2</h3>
                            <span className="qualification__subtitle">ULBS</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">EXP-3 </h3>
                            <span className="qualification__subtitle">ULBS</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">EXP-4</h3>
                            <span className="qualification__subtitle">ULBS</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>
                    </div>
                </div>

                <div className={
                    toggleState === 2 
                    ? "qualification__content qualification__content-active"
                    : "qualification__content"}
                    >

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">exp-1</h3>
                            <span className="qualification__subtitle">France</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">exp-2</h3>
                            <span className="qualification__subtitle"> Montreal</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">exp-3</h3>
                            <span className="qualification__subtitle">Italy</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Qualification
