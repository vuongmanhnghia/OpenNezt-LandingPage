import React, { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import "./QandA.scss";

function QandA() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleAnswer = (index) => {
		if (openIndex === index) {
			setOpenIndex(null);
		} else {
			setOpenIndex(index);
		}
	};

	return (
		<div className="qanda">
			<h1 className="hero_title">Frequently Asked Questions</h1>

			<div className="color">
				<div className="question-header">
					<h1 className="big_title">
						What is OpenNezt’s Co-Founder Matching feature?
					</h1>
					<button
						onClick={() => toggleAnswer(0)}
						style={{ background: "none", border: "none" }}>
						{openIndex === 0 ? (
							<IoIosArrowDropup
								style={{ fontSize: "25px", color: "teal" }}
							/>
						) : (
							<IoIosArrowDropdown
								style={{ fontSize: "25px", color: "teal" }}
							/>
						)}
					</button>
				</div>
				{openIndex === 0 && (
					<div className="answer">
						<p>
							OpenNezt’s Co-Founder Matching connects startup founders
							with like-minded entrepreneurs who have complementary
							skills and shared visions. Our advanced algorithm helps you
							find the right partner to grow your business from anywhere
							in the world.
						</p>
					</div>
				)}
			</div>

			<div className="color">
				<div className="question-header">
					<h1 className="big_title">
						How does the Co-Founder Matching algorithm work?
					</h1>
					<button
						onClick={() => toggleAnswer(1)}
						style={{ background: "none", border: "none" }}>
						{openIndex === 1 ? (
							<IoIosArrowDropup
								style={{ fontSize: "25px", color: "teal" }}
							/>
						) : (
							<IoIosArrowDropdown
								style={{ fontSize: "25px", color: "teal" }}
							/>
						)}
					</button>
				</div>
				{openIndex === 1 && (
					<div className="answer">
						<p>
							Our algorithm uses filters based on skills, industry
							experience, and availability, along with your preferences
							for co-founders, to provide the best match. Our AI-driven
							system ensures that you are connected with someone who
							aligns with your startup needs and long-term vision.
						</p>
					</div>
				)}
			</div>

			<div className="color">
				<div className="question-header">
					<h1 className="big_title">
						Can I search for co-founders from different countries?
					</h1>
					<button
						onClick={() => toggleAnswer(2)}
						style={{ background: "none", border: "none" }}>
						{openIndex === 2 ? (
							<IoIosArrowDropup
								style={{ fontSize: "25px", color: "teal" }}
							/>
						) : (
							<IoIosArrowDropdown
								style={{ fontSize: "25px", color: "teal" }}
							/>
						)}
					</button>
				</div>
				{openIndex === 2 && (
					<div className="answer">
						<p>
							Yes! OpenNezt allows you to connect with co-founders
							globally. Our platform supports multilingual filters and
							breaks down geographic barriers, enabling you to find your
							ideal partner, no matter where they are located.
						</p>
					</div>
				)}
			</div>

			<div className="color">
				<div className="question-header">
					<h1 className="big_title">
						How detailed are the profiles of potential co-founders?
					</h1>
					<button
						onClick={() => toggleAnswer(3)}
						style={{ background: "none", border: "none" }}>
						{openIndex === 3 ? (
							<IoIosArrowDropup
								style={{ fontSize: "25px", color: "teal" }}
							/>
						) : (
							<IoIosArrowDropdown
								style={{ fontSize: "25px", color: "teal" }}
							/>
						)}
					</button>
				</div>
				{openIndex === 3 && (
					<div className="answer">
						<p>
							Each profile includes detailed information about a
							co-founder’s skills, experience, and even reviews from
							other users. This transparency helps you make informed
							decisions when choosing a co-founder.
						</p>
					</div>
				)}
			</div>

			<div className="color">
				<div className="question-header">
					<h1 className="big_title">
						How do I start matching with co-founders?
					</h1>
					<button
						onClick={() => toggleAnswer(4)}
						style={{ background: "none", border: "none" }}>
						{openIndex === 4 ? (
							<IoIosArrowDropup
								style={{ fontSize: "25px", color: "teal" }}
							/>
						) : (
							<IoIosArrowDropdown
								style={{ fontSize: "25px", color: "teal" }}
							/>
						)}
					</button>
				</div>
				{openIndex === 4 && (
					<div className="answer">
						<p>
							Simply sign up, create your profile, and customize your
							search filters. The platform will then suggest potential
							co-founders based on your criteria. You can start
							conversations and collaborate with the matches directly on
							OpenNezt.
						</p>
					</div>
				)}
			</div>

			<div className="color">
				<div className="question-header">
					<h1 className="big_title">
						What if I don’t find a match right away?
					</h1>
					<button
						onClick={() => toggleAnswer(5)}
						style={{ background: "none", border: "none" }}>
						{openIndex === 5 ? (
							<IoIosArrowDropup
								style={{ fontSize: "25px", color: "teal" }}
							/>
						) : (
							<IoIosArrowDropdown
								style={{ fontSize: "25px", color: "teal" }}
							/>
						)}
					</button>
				</div>
				{openIndex === 5 && (
					<div className="answer">
						<p>
							Don’t worry! Our platform continuously updates, and new
							co-founders join every day. You can adjust your filters or
							wait for new matches to be recommended based on your
							preferences.
						</p>
					</div>
				)}
			</div>

			<div className="color">
				<div className="question-header">
					<h1 className="big_title">
						Is there a fee to use the Co-Founder Matching feature?
					</h1>
					<button
						onClick={() => toggleAnswer(6)}
						style={{ background: "none", border: "none" }}>
						{openIndex === 6 ? (
							<IoIosArrowDropup
								style={{ fontSize: "25px", color: "teal" }}
							/>
						) : (
							<IoIosArrowDropdown
								style={{ fontSize: "25px", color: "teal" }}
							/>
						)}
					</button>
				</div>
				{openIndex === 6 && (
					<div className="answer">
						<p>
							OpenNezt offers both free and premium plans. The free plan
							allows basic access to co-founder matching, while the
							premium plan unlocks additional features such as advanced
							filters and priority matching.
						</p>
					</div>
				)}
			</div>

			<div className="color">
				<div className="question-header">
					<h1 className="big_title">
						Can I use OpenNezt to find mentors or advisors as well?
					</h1>
					<button
						onClick={() => toggleAnswer(7)}
						style={{ background: "none", border: "none" }}>
						{openIndex === 7 ? (
							<IoIosArrowDropup
								style={{ fontSize: "25px", color: "teal" }}
							/>
						) : (
							<IoIosArrowDropdown
								style={{ fontSize: "25px", color: "teal" }}
							/>
						)}
					</button>
				</div>
				{openIndex === 7 && (
					<div className="answer">
						<p>
							Yes! In addition to co-founders, OpenNezt also provides
							features to connect you with mentors, advisors, and
							industry experts to help guide your startup journey.
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default QandA;
