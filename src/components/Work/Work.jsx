import React, { useContext } from "react";
import "./Work.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Work = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="portfolio">
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <a href="https://github.com/nandikakoranga/gpt3-landing-page"  >

                        <img src={Sidebar} alt="landing page" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/nandikakoranga/ecommerce"  >
                        <img src={Ecommerce} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/nandikakoranga/talk-a-tive"  >
                        <img src={MusicApp} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Work;
