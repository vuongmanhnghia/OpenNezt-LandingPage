import React from "react";
import "./Banner.scss";
import OpenNezt_Background from "../assets/OpenNezt_Background.png";

function Banner() {
	return (
		<>
			<div
				className="banner-container d-flex align-items-center"
				style={{ background: `url(${OpenNezt_Background})` }}>
				<div className="banner-content container">
					<div className="banner-text-header">
						<span>Connect</span>
						<span>with the Perfect Partners.</span>
					</div>
					<div className="banner-text-content">
						Tailored Matching. Verified Profiles. Endless Opportunities
					</div>
					<div className="banner-button">Join the network</div>
				</div>
			</div>
		</>
	);
}

export default Banner;
