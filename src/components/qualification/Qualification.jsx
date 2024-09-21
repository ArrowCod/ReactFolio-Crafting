import React, { useState } from 'react';
import "./qualification.css"

export const Qualification = () => {
        const [toggleState, setToggleState] =useState(1);
    
        const toggleTab = (index) => {
            setToggleState(index);
        };


  return (
    <section className='qualification section'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personal Journey</span>

       <div className='qualification__container container'>
        <div className='qualification__tabs'>
            <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Education
            </div>

            <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience
            </div>
        </div>

        <div className="qualification__section">
            <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : "qualification__content"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Design</h3>
                        <span className="qualification__subtitle">spain - Institute</span>
                        <div className="qualification__calender">
                            <i className='uil uil-calendar-alt'></i>2016 - 2020
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
                        <h3 className="qualification__title">Java Developer</h3>
                        <span className="qualification__subtitle">spain - Institute</span>
                        <div className="qualification__calender">
                            <i className='uil uil-calendar-alt'></i>2021 - 2025
                        </div>
                    </div>
                </div>


                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Development</h3>
                        <span className="qualification__subtitle">spain - Institute</span>
                        <div className="qualification__calender">
                            <i className='uil uil-calendar-alt'></i>2015 - 2019
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
                        <h3 className="qualification__title">Flutter Expert</h3>
                        <span className="qualification__subtitle">spain - Institute</span>
                        <div className="qualification__calender">
                            <i className='uil uil-calendar-alt'></i>2021 - 2023
                        </div>
                    </div>
                </div>
            </div>


            <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : "qualification__content"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Product Design</h3>
                        <span className="qualification__subtitle">Microsoft - spain</span>
                        <div className="qualification__calender">
                            <i className='uil uil-calender-alt'></i>2016 - 2020
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
                        <h3 className="qualification__title">UX Designer</h3>
                        <span className="qualification__subtitle">Apple Inc - spain</span>
                        <div className="qualification__calender">
                            <i className='uil uil-calender-alt'></i>2021 - 2025
                        </div>
                    </div>
                </div>


                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Web Designer</h3>
                        <span className="qualification__subtitle">Figma - Spain</span>
                        <div className="qualification__calender">
                            <i className='uil uil-calendar-alt'></i>2015 - 2019
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
                        <h3 className="qualification__title">Flutter Expert</h3>
                        <span className="qualification__subtitle">spain - Institute</span>
                        <div className="qualification__calender">
                            <i className='uil uil-calendar-alt'></i>2021 - 2023
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </section>
  )

}
export default Qualification