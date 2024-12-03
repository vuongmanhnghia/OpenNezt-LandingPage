// import React from "react";
import "./Evaluation.scss";

function Evaluation() {
	return (
		<>
			<div className="evaluation-container">
				<div className="evaluation-background"></div>
				<div className="evaluation-text-name">Evaluation & Exploration</div>
				<div className="evaluation-text-header">
					Connect with Your Match
				</div>
				<svg
					className="evaluation-line
						xmlns="
					width="212" //www.w3.org/2000/svg"
					height="2"
					viewBox="0 0 212 2"
					fill="none">
					<path d="M0 1H212" stroke="#183367" strokeWidth="0.5" />
				</svg>
				<div className="evaluation-text-content">
					After identifying potential co-founders, start a conversation
					directly through the platform.
				</div>
				<div className="evaluation-content">
					<div className="evaluation-box">
						<div className="evaluation-box-header">
							Message & Communication
						</div>
						<div className="evaluation-box-content">
							Connect with potential co-founders through in-platform
							messaging for quick discussions on goals and alignment.
						</div>

						<div className="subtract">
							<div className="subtract-rectangle"></div>
							<div className="subtract-rectangle"></div>
							<div className="subtract-rectangle"></div>
						</div>
						<div className="evaluation-box-circle"></div>
						<svg
							className="evaluation-box-icon icon-1"
							xmlns="http://www.w3.org/2000/svg"
							width="27"
							height="27"
							viewBox="0 0 27 27"
							fill="none">
							<path
								d="M0 27V2.7C0 1.9575 0.2646 1.3221 0.7938 0.7938C1.323 0.2655 1.9584 0.0009 2.7 0H24.3C25.0425 0 25.6783 0.2646 26.2075 0.7938C26.7367 1.323 27.0009 1.9584 27 2.7V18.9C27 19.6425 26.7358 20.2783 26.2075 20.8075C25.6792 21.3367 25.0434 21.6009 24.3 21.6H5.4L0 27ZM5.4 16.2H16.2V13.5H5.4V16.2ZM5.4 12.15H21.6V9.45H5.4V12.15ZM5.4 8.1H21.6V5.4H5.4V8.1Z"
								fill="#2A50A8"
							/>
						</svg>
					</div>
					<div className="evaluation-box">
						<div className="evaluation-box-header">
							Schedule a Meeting
						</div>
						<div className="evaluation-box-content">
							Use video meetings on the platform to dive into project
							ideas and get a sense of each others working style.
						</div>

						<div className="subtract">
							<div className="subtract-rectangle"></div>
							<div className="subtract-rectangle"></div>
							<div className="subtract-rectangle"></div>
						</div>
						<div className="evaluation-box-circle"></div>
						<svg
							className="evaluation-box-icon icon-2"
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none">
							<path
								d="M18.62 20.58L20.58 18.62L15.4 13.44V7H12.6V14.56L18.62 20.58ZM14 28C12.0633 28 10.2433 27.6322 8.54 26.8968C6.83666 26.1613 5.355 25.1641 4.095 23.905C2.835 22.6459 1.83773 21.1643 1.1032 19.46C0.368668 17.7557 0.000935105 15.9357 1.77215e-06 14C-0.000931561 12.0643 0.366802 10.2443 1.1032 8.53999C1.8396 6.83573 2.83687 5.35406 4.095 4.095C5.35313 2.83593 6.8348 1.83867 8.54 1.1032C10.2452 0.367733 12.0652 0 14 0C15.9348 0 17.7548 0.367733 19.46 1.1032C21.1652 1.83867 22.6469 2.83593 23.905 4.095C25.1631 5.35406 26.1609 6.83573 26.8982 8.53999C27.6355 10.2443 28.0028 12.0643 28 14C27.9972 15.9357 27.6294 17.7557 26.8968 19.46C26.1641 21.1643 25.1669 22.6459 23.905 23.905C22.6431 25.1641 21.1615 26.1618 19.46 26.8982C17.7585 27.6346 15.9385 28.0018 14 28Z"
								fill="#2A50A8"
							/>
						</svg>
					</div>
					<div className="evaluation-box">
						<div className="evaluation-box-header">
							Share Documents & Ideas
						</div>
						<div className="evaluation-box-content">
							Share documents, presentations, and ideas with ease; create
							collaboration and evoke creativity with potential
							co-founders.
						</div>

						<div className="subtract">
							<div className="subtract-rectangle"></div>
							<div className="subtract-rectangle"></div>
							<div className="subtract-rectangle"></div>
						</div>
						<div className="evaluation-box-circle"></div>
						<svg
							className="evaluation-box-icon icon-3"
							xmlns="http://www.w3.org/2000/svg"
							width="26"
							height="33"
							viewBox="0 0 26 33"
							fill="none">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M4.6129 0C3.38949 0 2.21617 0.486001 1.35109 1.35109C0.486001 2.21618 0 3.38949 0 4.6129V28.0968C0 29.3202 0.486001 30.4935 1.35109 31.3586C2.21617 32.2237 3.38949 32.7097 4.6129 32.7097H21.3871C22.6105 32.7097 23.7838 32.2237 24.6489 31.3586C25.514 30.4935 26 29.3202 26 28.0968V9.59148C26 8.95239 25.792 8.33174 25.4062 7.82181L20.3773 1.16581C20.1037 0.803679 19.7498 0.509934 19.3435 0.307652C18.9372 0.10537 18.4895 6.1215e-05 18.0356 0H4.6129ZM2.51613 4.6129C2.51613 3.45548 3.45548 2.51613 4.6129 2.51613H16.7742V9.89174C16.7742 10.5862 17.3378 11.1498 18.0323 11.1498H23.4839V28.0968C23.4839 29.2542 22.5445 30.1936 21.3871 30.1936H4.6129C3.45548 30.1936 2.51613 29.2542 2.51613 28.0968V4.6129Z"
								fill="#2A50A8"
							/>
						</svg>
					</div>
					<div className="evaluation-box">
						<div className="evaluation-box-header">
							Assess Long-term Fit
						</div>
						<div className="evaluation-box-content">
							Participate in discussions in order to understand each
							others abilities and vision for the future, shaping a
							coherent and compatible partnership.
						</div>

						<div className="subtract">
							<div className="subtract-rectangle"></div>
							<div className="subtract-rectangle"></div>
							<div className="subtract-rectangle"></div>
						</div>
						<div className="evaluation-box-circle"></div>
						<svg
							className="evaluation-box-icon icon-4"
							xmlns="http://www.w3.org/2000/svg"
							width="38"
							height="38"
							viewBox="0 0 38 38"
							fill="none">
							<path
								d="M12.6521 4.51056C12.4072 4.76093 12.269 5.09667 12.2668 5.44695C12.2646 5.79723 12.3986 6.13467 12.6404 6.38807C12.8823 6.64148 13.2131 6.79104 13.5631 6.80521C13.9131 6.81938 14.2549 6.69705 14.5164 6.46402L18.064 3.07587C18.3157 2.83593 18.6503 2.70231 18.998 2.70281C19.3458 2.70331 19.68 2.8379 19.931 3.07857L23.4569 6.46132C23.7179 6.69435 24.0591 6.81704 24.4087 6.80357C24.7584 6.79009 25.0891 6.64151 25.3314 6.38909C25.5736 6.13666 25.7085 5.80009 25.7076 5.45022C25.7068 5.10035 25.5702 4.76446 25.3266 4.51327L21.8034 1.13051C21.05 0.406932 20.0464 0.00216637 19.0018 0.000656149C17.9573 -0.000854067 16.9524 0.401007 16.197 1.12241L12.6521 4.51056ZM6.45673 14.5264C6.58631 14.3996 6.68905 14.248 6.75882 14.0807C6.82858 13.9134 6.86396 13.7337 6.86283 13.5524C6.8617 13.3711 6.82408 13.1919 6.75223 13.0254C6.68038 12.859 6.57576 12.7087 6.44461 12.5835C6.31345 12.4584 6.15844 12.3609 5.98882 12.2969C5.81919 12.2329 5.63841 12.2037 5.45726 12.211C5.27611 12.2183 5.09829 12.2621 4.93439 12.3396C4.7705 12.4171 4.62388 12.5268 4.50327 12.6621L1.12322 16.1935C0.402317 16.9476 0 17.9507 0 18.994C0 20.0373 0.402317 21.0403 1.12322 21.7945L4.50327 25.3339C4.75085 25.593 5.09119 25.7431 5.44943 25.7512C5.80767 25.7593 6.15445 25.6248 6.4135 25.3772C6.67254 25.1296 6.82262 24.7892 6.83073 24.431C6.83884 24.0728 6.7043 23.726 6.45673 23.4669L3.07668 19.9275C2.83717 19.6762 2.70356 19.3424 2.70356 18.9953C2.70356 18.6482 2.83717 18.3144 3.07668 18.0632L6.45673 14.5264ZM14.5191 31.5293C14.2601 31.2818 13.9133 31.1472 13.5551 31.1553C13.1968 31.1634 12.8565 31.3135 12.6089 31.5726C12.3613 31.8316 12.2268 32.1784 12.2349 32.5366C12.243 32.8949 12.3931 33.2352 12.6521 33.4828L16.2024 36.8764C16.9585 37.599 17.9646 38.0014 19.0105 37.9994C20.0563 37.9973 21.0609 37.5911 21.8142 36.8656L25.3293 33.4774C25.4571 33.3543 25.5593 33.2072 25.6302 33.0446C25.7011 32.8819 25.7393 32.7069 25.7425 32.5296C25.7458 32.3522 25.7141 32.1759 25.6492 32.0108C25.5843 31.8456 25.4876 31.6949 25.3645 31.5672C25.2413 31.4394 25.0943 31.3372 24.9316 31.2663C24.769 31.1954 24.594 31.1572 24.4166 31.154C24.2392 31.1507 24.063 31.1824 23.8978 31.2473C23.7327 31.3122 23.582 31.4089 23.4542 31.532L19.9418 34.9202C19.6905 35.1625 19.3552 35.298 19.0061 35.2986C18.6571 35.2991 18.3214 35.1644 18.0694 34.9229L14.5191 31.5293ZM33.4728 12.6567C33.3499 12.5286 33.2029 12.426 33.0403 12.3547C32.8777 12.2834 32.7026 12.2449 32.5251 12.2412C32.3476 12.2376 32.1711 12.269 32.0057 12.3335C31.8404 12.3981 31.6893 12.4946 31.5612 12.6175C31.4331 12.7405 31.3305 12.8875 31.2592 13.0501C31.1879 13.2127 31.1494 13.3877 31.1457 13.5652C31.1421 13.7427 31.1735 13.9192 31.238 14.0846C31.3026 14.25 31.3991 14.401 31.522 14.5291L34.921 18.0686C35.1629 18.3202 35.298 18.6557 35.298 19.0048C35.298 19.3538 35.1629 19.6893 34.921 19.941L31.5247 23.4642C31.4016 23.592 31.3049 23.7427 31.24 23.9078C31.1751 24.073 31.1434 24.2492 31.1467 24.4266C31.15 24.604 31.1881 24.779 31.259 24.9416C31.3299 25.1043 31.4321 25.2513 31.5599 25.3745C31.6876 25.4976 31.8383 25.5943 32.0035 25.6592C32.1686 25.7241 32.3449 25.7558 32.5223 25.7525C32.6996 25.7493 32.8746 25.7111 33.0373 25.6402C33.1999 25.5693 33.347 25.4671 33.4701 25.3393L36.8664 21.8161C37.5932 21.0614 37.9995 20.0545 38 19.0067C38.0005 17.9589 37.5952 16.9516 36.8691 16.1962L33.4728 12.6567ZM10.8824 14.9425C10.8824 13.8676 11.3094 12.8368 12.0694 12.0767C12.8295 11.3167 13.8603 10.8897 14.9352 10.8897H23.0409C24.1157 10.8897 25.1466 11.3167 25.9066 12.0767C26.6667 12.8368 27.0937 13.8676 27.0937 14.9425V23.0482C27.0937 24.123 26.6667 25.1539 25.9066 25.9139C25.1466 26.674 24.1157 27.101 23.0409 27.101H14.9352C13.8603 27.101 12.8295 26.674 12.0694 25.9139C11.3094 25.1539 10.8824 24.123 10.8824 23.0482V14.9425Z"
								fill="#2A50A8"
							/>
						</svg>
					</div>
				</div>
			</div>
		</>
	);
}

export default Evaluation;
