import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import OpenNeztLogoWhite from "../assets/OpenNeztLogoWhite.png";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<div
					className="footer__logo"
					style={{ background: `url(${OpenNeztLogoWhite})` }}></div>

				<div className="footer__links w-100">
					<div className="footer__section ">
						<h3>Product</h3>
						<a href="#">Premium</a>
					</div>

					<div className="footer__section ">
						<h3>Resources</h3>
						<a href="#">Privacy Policy</a>
					</div>

					<div className="footer__section ">
						<h3>Company</h3>
						<a href="#">Contact us</a>
					</div>

					<div className="footer__newsletter">
						<h3>Join our Newsletter!</h3>
						<div className="newsletter__form">
							<input type="email" placeholder="Enter your email" />
							<button type="submit">SUBMIT</button>
						</div>
					</div>
				</div>

				<div className="footer__social mt-4">
					<a href="#">
						<FaInstagram />
					</a>
					<a href="#">
						<FaYoutube />
					</a>
					<a href="#">
						<FaLinkedin />
					</a>
					<a href="#">
						<FaFacebook />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
