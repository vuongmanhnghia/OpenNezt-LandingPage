import React from "react";
import "./Banner.scss";
import OpenNezt_Background from "../assets/OpenNezt_Background.png";

function Banner() {
	return (
		<>
			<div
				className="flex items-center justify-center bg-center bg-cover banner-container"
				style={{ background: `url(${OpenNezt_Background})` }}>
				<div className="banner-content sm:px-8 md:px-12 lg:px-16">
					<div className="text-center banner-text-header sm:text-left">
						<span>Connect</span>
						<div
							className="text-content-child"
							style={{ display: "flex", flexWrap: "wrap" }}>
							<span style={{ display: "flex", flexWrap: "no-wrap" }}>
								with the{" "}
							</span>
							<span style={{ display: "flex", flexWrap: "no-wrap" }}>
								{" "}
								Perfect Partners.
							</span>
						</div>
					</div>
					<div className="banner-text-content">
						Tailored Matching. Verified Profiles. Endless Opportunities
					</div>
					<div className="banner-button">GET STARTED</div>
				</div>
				<svg
					className="page-1"
					xmlns="http://www.w3.org/2000/svg"
					width="86"
					height="84"
					viewBox="0 0 86 84"
					fill="none">
					<path
						d="M83.4732 41.9958C83.4732 64.3126 65.1533 82.4363 42.5143 82.4363C19.8753 82.4363 1.5554 64.3126 1.5554 41.9958C1.5554 19.6791 19.8753 1.5554 42.5143 1.5554C65.1533 1.5554 83.4732 19.6791 83.4732 41.9958Z"
						fill="#0F1B33"
						stroke="#245D90"
						strokeWidth="3.1108"
					/>
					<text
						x="48%"
						y="55%"
						textAnchor="middle"
						dominantBaseline="middle">
						1
					</text>
				</svg>
			</div>
		</>
	);
}

export default Banner;
