import React from "react";
import "./Matching.scss";

function Matching() {
	return (
		<>
			<div className="matching-container">
				<div className="matching-content">
					<div className="matching-header">
						Co-founder matching: Connect
						<br />
						from Anywhere in the World.
					</div>
					<div className="matching-text-content">
						Access our platform from anywhere, and connect with potential
						co-founders across <br /> various industries, including tech,
						marketing, finance, and more. All you need is one <br />
						registration, and wherever you are, find the right partner to
						launch or grow your startup.
					</div>
					<div className="matching-box-content row">
						<div className="matching-box col-6">
							<div
								className="matching-icon"
								style={{
									background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M2 12c0 1.052.18 2.062.512 3m10.502-6h8.488M11 15H2.512m18.99-6a9 9 0 0 0-8.488-6c1.6 0 2.909 3.762 2.995 8.5M21.502 9c.278.789.45 1.628.498 2.5M2.512 15A9 9 0 0 0 11 21c-1.544 0-2.816-3.5-2.982-8M2 5.297C2 4.2 2 3.65 2.187 3.224c.2-.452.542-.815.968-1.025C3.557 2 4.075 2 5.11 2H6c1.886 0 2.828 0 3.414.62C10 3.243 10 4.24 10 6.24v2.259c0 .871 0 1.307-.264 1.457s-.606-.092-1.29-.576l-.105-.073c-.5-.354-.75-.53-1.034-.621c-.283-.091-.584-.091-1.185-.091h-1.01c-1.037 0-1.555 0-1.957-.199a2.06 2.06 0 0 1-.968-1.025C2 6.945 2 6.396 2 5.297m20 12c0-1.098 0-1.647-.187-2.073a2.06 2.06 0 0 0-.968-1.025C20.443 14 19.925 14 18.89 14H18c-1.886 0-2.828 0-3.414.62C14 15.243 14 16.24 14 18.24v2.259c0 .871 0 1.307.264 1.457s.606-.092 1.29-.576l.105-.073c.5-.354.75-.53 1.034-.621c.283-.091.584-.091 1.185-.091h1.01c1.037 0 1.555 0 1.957-.199c.426-.21.769-.573.968-1.025c.187-.426.187-.975.187-2.074' color='%23000'/%3E%3C/svg%3E")`,
								}}></div>
							<div className="matching-title">Connect Globally</div>
						</div>
						<div className="matching-box col-6">
							<div
								className="matching-icon"
								style={{
									background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cpath fill='%23000' d='M212 96a27.8 27.8 0 0 0-10.51 2L171 59.94A28 28 0 1 0 120 44a29 29 0 0 0 .15 2.94L73.68 66.3a28 28 0 1 0-28.6 44.83l1.85 46.38a28 28 0 1 0 32.74 41.42L128 212.47a28 28 0 1 0 49.13-18.79l27.21-42.75A28 28 0 1 0 212 96m-56 88h-.89l-16.18-48.53l46.65-2.22a27.9 27.9 0 0 0 5.28 9L163.65 185a28 28 0 0 0-7.65-1m-93.08-27.13l-1.85-46.38a28 28 0 0 0 10.12-6.13L113.72 129l-41.46 32.22a28 28 0 0 0-9.34-4.35M149.57 72a27.8 27.8 0 0 0 8.94-2L189 108.06a27.9 27.9 0 0 0-4.18 9.22l-46.57 2.22ZM82.09 173.85L124 141.26l15.94 47.83a28.2 28.2 0 0 0-7.6 8L84 183.53a28 28 0 0 0-1.91-9.68M148 32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-21.68 29.7a28.4 28.4 0 0 0 7.68 6.54l-11.3 47.45l-43.47-25.17A28 28 0 0 0 80 84a29 29 0 0 0-.15-2.94ZM40 84a12 12 0 1 1 12 12a12 12 0 0 1-12-12m16 112a12 12 0 1 1 12-12a12 12 0 0 1-12 12m100 28a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56-88a12 12 0 1 1 12-12a12 12 0 0 1-12 12'/%3E%3C/svg%3E")`,
								}}></div>
							<div className="matching-title">Diverse Industries</div>
						</div>
						<div className="matching-box col-6">
							<div
								className="matching-icon"
								style={{
									background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' color='%23000'%3E%3Cpath d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10'/%3E%3Cpath d='M20 5.699c-.935.067-2.132.43-2.962 1.504c-1.5 1.94-2.999 2.103-3.999 1.456c-1.5-.97-.239-2.543-1.999-3.397C9.893 4.705 9.733 3.19 10.372 2M2 11c.763.662 1.83 1.268 3.089 1.268c2.6 0 3.12.497 3.12 2.484s0 1.987.52 3.477c.338.97.456 1.938-.218 2.771m11.388-1.071L22 22m-.892-4.954a4.05 4.05 0 0 1-4.054 4.046A4.05 4.05 0 0 1 13 17.046A4.05 4.05 0 0 1 17.054 13a4.05 4.05 0 0 1 4.054 4.046'/%3E%3C/g%3E%3C/svg%3E")`,
								}}></div>
							<div className="matching-title">Skill Matching</div>
						</div>
						<div className="matching-box col-6">
							<div
								className="matching-icon"
								style={{
									background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5m-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6z'/%3E%3C/svg%3E")`,
								}}></div>
							<div className="matching-title">Cultural Alignment</div>
						</div>
					</div>
					<div className="matching-button">Join For Free</div>
				</div>
			</div>
		</>
	);
}

export default Matching;
