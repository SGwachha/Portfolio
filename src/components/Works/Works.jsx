import React, { useContext } from "react";
import "./Works.css";
import Eydean from "../../img/logo.png";
import coredreams from "../../img/coredreams.png";
import uptechsys from "../../img/uptechsys.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	// transition
	return (
		<div className="works" id="works">
			{/* left side */}
			<div className="w-left">
				<div className="awesome">
					{/* dark Mode */}
					<span style={{ color: darkMode ? "white" : "" }}>
						Works for All these
					</span>
					<span>Companies</span>
					<spane>
						3 months Internship at Eydean Inc. as a Frontend Developer
						<br />
						<br />
						3 months Junior Frontend Developer at CoreDreams Inovations
						<br />
						<br />
						Junior Frontend Developer at UpTechSys
					</spane>
					<Link to="contact" smooth={true} spy={true}>
						<button className="button s-button">Hire Me</button>
					</Link>
					<div
						className="blur s-blur1"
						style={{ background: "#ABF1FF94" }}
					></div>
				</div>

				{/* right side */}
			</div>
			<div className="w-right">
				<motion.div
					initial={{ rotate: 45 }}
					whileInView={{ rotate: 0 }}
					viewport={{ margin: "-40px" }}
					transition={{ duration: 3.5, type: "spring" }}
					className="w-mainCircle"
				>
					<div className="w-secCircle">
						<img src={Eydean} alt="" />
					</div>
					<div className="w-secCircle">
						<img src={coredreams} alt="" width={"250px"} background="none"/>
					</div>
					<div className="w-secCircle">
					</div>{" "}
					<div className="w-secCircle">
						<img src={coredreams} alt="" width={"250px"} />
					</div>
					<div className="w-secCircle">
						<img src={Eydean} alt="" />
					</div>
				</motion.div>
				{/* background Circles */}
				<div className="w-backCircle blueCircle"></div>
				<div className="w-backCircle yellowCircle"></div>
			</div>
		</div>
	);
};

export default Works;
