// import React from "react";
import "./Nav.scss";
import OpenNeztLogoWhite from "../../assets/OpenNeztLogoWhite.png";

const Nav = (props) => {
	const handleClickNavbar = () => {
		const navActive = document.querySelector(".nav-menu");
		navActive.classList.toggle("active");
	};

	return (
		<>
			<nav className="nav-container">
				<div className="navbar-content">
					<div
						className="navbar-brand"
						style={{ background: `url(${OpenNeztLogoWhite})` }}></div>
					<button for onClick={() => handleClickNavbar()}>
						<i className="fa-solid fa-bars"></i>
					</button>
					<ul className="nav-menu">
						<li
							className="nav-item"
							onClick={() => props.scrollToBanner()}>
							Home
						</li>
						<li className="nav-item" onClick={() => props.scrollOnBoarding()}>
							About Us
						</li>
						<li className="nav-item" onClick={() => props.scrollOurServices()}>
							Our Services
						</li>
						<li className="nav-item" onClick={() => props.scrollToTeam()}>
							Team
						</li>
						<li className="nav-item" onClick={() => props.scrollMentors()}>
							Mentors
						</li>
						<li
							className="nav-item"
							onClick={() => props.scrollToQandA()}>
							FAQ
						</li>
						<li className="nav-item">
                    <a href="https://beta.opennezt.com/" target="_blank" rel="noopener noreferrer">Login</a>
                </li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Nav;
