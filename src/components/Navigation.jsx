import React from "react";
import "./Navigation.scss";
import OpenNeztLogoWhite from "../assets/OpenNeztLogoWhite.png";

const Navigation = (props) => {
	return (
		<>
			<nav className="nav-container navbar navbar-expand-lg py-4 py-lg-0 shadow">
				<div className="nav-content container px-4">
					<div
						className="header-logo"
						style={{
							background: `url(${OpenNeztLogoWhite})`,
						}}></div>
					<div className="navbar">
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#top-navbar"
							aria-controls="top-navbar"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<i className="fa-solid fa-bars"></i>
						</button>
						<div className="collapse navbar-collapse" id="top-navbar">
							<ul className="navbar-nav">
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
								{/* <li className="nav-item">
									<a className="nav-link disabled" aria-disabled="true">
										Disabled
									</a>
								</li> */}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
