import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Android from "./Android";



const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Techincal Level</span>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
                <Android/>
            
            </div>
        </section>
    );
};

export default Skills 