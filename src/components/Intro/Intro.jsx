import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Me from "../../img/me.png";
import glassesimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
	// Transition
	const transition = { duration: 2, type: "spring" };

	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className="Intro" id="Intro">
			<div className="i-left">
				<div className="i-name">
					<span style={{ color: darkMode ? "white" : "" }}>Hey! I Am Graduated Student</span>
					<span>Sanjeev Gwachha</span>
					<span>
						Frontend Developer with 1 Year of experience in web designing
						and development, producting the Quality work
					</span>
				</div>
				<Link to="contact" smooth={true} spy={true}>
					<button className="button i-button">Hire me</button>
				</Link>
				{/* social icons */}
				<div className="i-icons">
					<a href="https://github.com/SGwachha">
						{" "}
						<img src={Github} alt="" />
					</a>
					<a href="https://www.linkedin.com/in/sanjeev-gwachha-b44501228/">
						<img src={LinkedIn} alt="" />
					</a>
					<a href="https://www.instagram.com/gwachhasanjeev/">
						<img src={Instagram} alt="" />
					</a>
				</div>
			</div>
			{/* right image side */}
			<div className="i-right">
				<img src={Vector1} alt="" />
				<img src={Vector2} alt="" />
				<img
					className="phoptp"
					src={Me}
					alt=""
					height={"340rem"}
					width={"300rem"}
				/>
				{/* animation */}
				<motion.img
					initial={{ left: "-38%" }}
					whileInView={{ left: "-24%" }}
					transition={transition}
					src={glassesimoji}
					alt=""
				/>

				<motion.div
					initial={{ top: "-4%", left: "74%" }}
					whileInView={{ left: "68%" }}
					transition={transition}
					className="floating-div"
				>
					<FloatinDiv img={crown} text1="Web" text2="Developer" />
				</motion.div>

				{/* animation */}
				<motion.div
					initial={{ left: "9rem", top: "18rem" }}
					whileInView={{ left: "0rem" }}
					transition={transition}
					className="floating-div"
				>
				</motion.div>

				<div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
				<div
					className="blur"
					style={{
						background: "#C1F5FF",
						top: "17rem",
						width: "21rem",
						height: "11rem",
						left: "-9rem",
					}}
				></div>
			</div>
		</div>
	);
};

export default Intro;
