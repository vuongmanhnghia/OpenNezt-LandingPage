import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import OpenNeztLogoWhite from "../assets/OpenNeztLogoWhite.png";

const Header = (props) => {
	return (
		<>
			<nav className="header-container navbar navbar-expand-lg py-4 py-lg-0 shadow">
				<div className="header-content container px-4">
					<div
						className="header-logo"
						style={{
							background: `url(${OpenNeztLogoWhite})`,
						}}></div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#top-navbar"
						aria-controls="top-navbar">
						<FontAwesomeIcon icon={faBars} />
					</button>
					<div
						className="offcanvas offcanvas-end"
						tabindex="-1"
						id="top-navbar"
						aria-labelledby="top-navbarLabel">
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#top-navbar"
							aria-controls="top-navbar">
							alo
							<div className="d-flex justify-content-between p-3">
								<div
									className="header-logo"
									style={{
										background: `url(${OpenNeztLogoWhite})`,
									}}></div>
								<i className="fa-solid fa-chevron-right">Alo</i>
							</div>
						</button>
						<ul class="navbar-nav ms-lg-auto p-4 p-lg-0">
							<li class="nav-item px-3 px-lg-0 py-1 py-lg-4">
								<a class="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
						</ul>
						{/* <div className="header-list-tag">
							<ul className="list-tag">
								<li
									className="tag"
									onClick={() => props.scrollToBanner()}>
									Home
								</li>
								<li
									className="tag"
									onClick={() => props.scrollToTeam()}>
									About Us
								</li>
								<li className="tag">Pricing</li>
								<li
									className="tag"
									onClick={() => props.scrollToQandA()}>
									Support
								</li>
								<li className="tag">Login</li>
							</ul>
							<div className="tag-login">GET STARTED</div>
						</div> */}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
