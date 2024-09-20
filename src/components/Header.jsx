import React from "react";
import "./Header.scss";

function Header() {
	return (
		<>
			<div className="header-container">
				<div className="header-content">
					<div className="header-logo"></div>
					<div className="header-list-tag">
						<ul className="list-tag">
							<li className="tag">Home</li>
							<li className="tag">About Us</li>
							<li className="tag">Pricing</li>
							<li className="tag">Support</li>
							<li className="tag">Login</li>
						</ul>
						<div className="tag-login">GET STARTED</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
