import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import bookgara from "../../img/bookgara.png";
import foodbuster from "../../img/foodbuster.png";
import airport from "../../img/airport.png";
import funolympic from "../../img/funolympic.png";
import word from "../../img/word.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className="portfolio" id="portfolio">
			{/* heading */}
			<span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
			<span>Portfolio</span>

			{/* slider */}
			<Swiper
				spaceBetween={30}
				slidesPerView={3}
				grabCursor={true}
				className="portfolio-slider"
			>
				<SwiperSlide>
					<img src={bookgara} alt="" height={"100%"} width={"100%"}/>
					<a href="https://bookgara.com/"><h1>Bookgara</h1></a>
				</SwiperSlide>
				<SwiperSlide>
					<img src={foodbuster} alt="" height={"100%"} width={"100%"}/>
					<a href="https://foodbusters.com.np/"><h1>Foodbuster</h1></a>
				</SwiperSlide>
				<SwiperSlide>
					<img src={airport} alt="" height={"100%"} width={"100%"}/>
					<a href="https://airporttaxima.com/"><h1>Logan Airport Taxi MA</h1></a>
				</SwiperSlide>
				<SwiperSlide>
					<img src={funolympic} alt="" height={"100%"} width={"100%"}/>
					<a href="https://633fa4277a7ba26705347a65--papaya-sunflower-4788a6.netlify.app/"><h1>Fun Olympic Games</h1></a>
				</SwiperSlide>
				<SwiperSlide>
					<img src={word} alt="" height={"100%"} width={"100%"}/>
					<a href="https://62dfd41646d36c0f2be2a790--endearing-panda-982126.netlify.app/"><h1>Scrambled Word Games</h1></a>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Portfolio;
