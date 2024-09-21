import React from "react";
import "./Subscribe.scss";

function Subscribe() {
	return (
		<>
			<div className="subscribe-container">
				<div className="subscribe-content">
					<div className="subscribe-header">
						Subscribe to receive exclusive startup tips,
						<br /> strategic business insights, and more.{" "}
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
