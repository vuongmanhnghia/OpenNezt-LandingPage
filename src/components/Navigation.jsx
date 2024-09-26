import React from "react";
import "./Navigation.scss";
import OpenNeztLogoWhite from "../assets/OpenNeztLogoWhite.png";

const Navigation = (props) => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
				<div className="navbar-content container container-fluid">
					<div
						className="navbar-brand"
						style={{ background: `url(${OpenNeztLogoWhite})` }}></div>
					<button
						className="navbar-button navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<i class="fa-solid fa-bars"></i>
					</button>
					<div
						className="collapse navbar-collapse nav-menu"
						id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li
								className="nav-item"
								onClick={() => props.scrollToBanner()}>
								Home
							</li>
							<li
								className="nav-item"
								onClick={() => props.scrollToTeam()}>
								About Us
							</li>
							<li className="nav-item">Pricing</li>
							<li
								className="nav-item"
								onClick={() => props.scrollToQandA()}>
								Support
							</li>
							<li className="nav-item">Login</li>
							<div className="get-started">GET STARTED</div>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
