import React from "react";
import "./Subscribe.scss";
import Jungle_Subscribe_Newsletter from "../assets/Jungle_Subscribe_Newsletter.png";

function Subscribe() {
	return (
		<>
			<div
				className="subscribe-container"
				style={{ background: `url(${Jungle_Subscribe_Newsletter})` }}>
				<div className="subscribe-content container">
					<div className="subscribe-header">
						Subscribe to receive exclusive startup tips, strategic
						business insights, and more.{" "}
					</div>
					<div className="subscribe-submit">
						<input
							className="form-control"
							placeholder="Enter your email"></input>
						<button className="btn btn-primary">SUBMIT</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Subscribe;
