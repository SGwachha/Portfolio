import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";

const Footer = () => {
	return (
		<div className="footer">
			<img src={Wave} alt="" style={{ width: "100%" }} />
			<div className="f-content">
				<span>gwachhas123@gmail.com</span>
				<div className="f-icons">
					<a href="https://www.facebook.com/sanjeev.gwachha.3">
						{" "}
						<Facebook color="white" size={"3rem"} />
					</a>
					<a href="https://github.com/SGwachha">
						{" "}
						<Github color="white" size={"3rem"} />
					</a>
					<a href="https://www.instagram.com/gwachhasanjeev/">
						<Instagram color="white" size={"3rem"} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
