import React from "react";
import "./Skills.css";
import html from "../../img/html.png";
import css from "../../img/css.png";
import javascript from "../../img/javascript.png";
import react from "../../img/react.png";
import firebase from "../../img/firebase.png";
import redux from "../../img/redux.png";
import java from "../../img/java.png";
import bootstrap from "../../img/bootstrap.png";


const Skills = () => {
    // context


    // transition
    return (
        <div className="skills">
            <div className="awesome">SKILLS</div>
            <div className="skulls" >

                {/* left side */}
                <div className="w-left">
                    <div className="awesome">
                        {/* dark Mode */}

                        <div
                            className="w-mainCircle"
                        >
                            <div className="w-secCircle">
                                <img src={html} alt="" />
                            </div>
                            <div className="w-secCircle">
                                <img src={css} alt="" />
                            </div>
                            <div className="w-secCircle">
                                <img src={firebase} alt="" />
                            </div>
                            <div className="w-secCircle">
                                <img src={javascript} alt="" />
                            </div>
                            <div className="w-secCircle">
                                <img src={react} alt="" />
                            </div>


                        </div>
                    </div>
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>

                    {/* right side */}
                </div>
                <div className="w-right">
                    <div
                        className="w-mainCircle"
                    >

                        <div className="w-secCircle">
                            <img src={bootstrap} alt="" />
                        </div>

                        <div className="w-secCircle">
                            <img src={redux} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={java} alt="" />
                        </div>

                    </div>

                    {/* background Circles */}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
                </div>
            </div>
        </div >
    );
};

export default Skills;