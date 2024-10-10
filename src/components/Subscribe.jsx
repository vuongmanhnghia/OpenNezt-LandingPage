import React from "react";
import "./Subscribe.scss";

function Subscribe() {
	return (
		<>
			<div
				className="subscribe-container"
				style={{ background: `#151932` }}>
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
