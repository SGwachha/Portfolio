import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Glasses from "../../img/glasses.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
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
				<span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
				<span>services</span>
				<spane>
					Frontend Web Developer
					<br />
					With Frameworks Reactjs, Nextjs, Tailwindcss, Material UI, Bootstrap, Chakra UI
				</spane>
				<a href={Resume} download>
					<button className="button s-button">Download CV</button>
				</a>
				<div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
			</div>
			{/* right */}
			<div className="cards">
				{/* first card */}
				<motion.div
					initial={{ left: "35rem" }}
					whileInView={{ left: "5rem" }}
					transition={transition}
				>
					<Card
						emoji={Glasses}
						heading={"Developer"}
						detail={"Html, CSS, JavaScript, TypeScript"}
					/>
				</motion.div>
				{/* second card */}
				<motion.div
					initial={{ left: "-11rem", top: "12rem" }}
					whileInView={{ left: "20rem" }}
					transition={transition}
				>
					<Card
						emoji={Glasses}
						heading={"Developer"}
						detail={"Reactjs, Nextjs, Tailwind CSS, Material UI, Bootstrap, Chakra UI"}
					/>
				</motion.div>
				{/* 3rd */}
				<motion.div
					initial={{ top: "19rem", left: "25rem" }}
					whileInView={{ left: "12rem" }}
					transition={transition}
				>
				</motion.div>
				<div
					className="blur s-blur2"
					style={{ background: "var(--purple)" }}
				></div>
			</div>
		</div>
	);
};

export default Services;
