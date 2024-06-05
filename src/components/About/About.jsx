import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Frontend from '../../img/frontend.png';
import Webdev from '../../img/webdev.png';
import Fullstack from '../../img/fullstackdev.png';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const About = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    // transition
    const transition = {
        duration: 1,
        type: "spring",
    };

    return (
        <div className="services" id="services">
            {/* left side */}
            <div className="awesome">
                {/* dark mode */}
                <span style={{ color: darkMode ? "white" : "" }}>About Me!</span>
                <span>my services</span>


                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right */}
            <div className="cards">
                {/* first card */}
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Frontend}
                        heading={'Frontend Developer'}
                        detail={"Passionate about crafting immersive and user-friendly web experiences through code."}
                    />
                </motion.div>
                {/* second card */}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Webdev}
                        heading={'Web Developer'}
                        detail={"Html, Css, JavaScript, React, Nodejs, Express"}
                    />
                </motion.div>
                {/* 3rd */}
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                >
                    <Card
                        emoji={Fullstack}
                        heading={'Fullstack Developer'}
                        detail={"I am a versatile full-stack developer with a passion for building end-to-end web solutions that seamlessly integrate front-end aesthetics with back-end functionality."}
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
                <div
                    className="blur s-blur2"
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>
    );
};

export default About;
