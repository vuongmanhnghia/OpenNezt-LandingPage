import { useState } from "react";
import "./QandA.scss";

const QAndA = () => {
    const [openAnswers, setOpenAnswers] = useState(Array(8).fill(false)); // Mảng lưu trạng thái hiển thị của các câu trả lời

    const toggleAnswer = (index) => {
        const updatedAnswers = [...openAnswers];
        updatedAnswers[index] = !updatedAnswers[index]; // Toggle trạng thái của câu hỏi được chọn
        setOpenAnswers(updatedAnswers);
    };

    return (
        <div className="qanda container">
            <div className="hero_title">Frequently Asked Questions</div>
            {questions.map((question, index) => (
                <div key={index} className="color">
                    <div className="question-header">
                        <div className="big_title">{question.title}</div>
                        <button
                            className="toggle-btn"
                            style={{ background: "none", border: "none" }}
                            onClick={() => toggleAnswer(index)}>
                            <span className="icon">
                                {openAnswers[index] ? (
                                    <i
                                        className="fa-solid fa-chevron-up button-up"
                                        style={{ color: `#40BCD0`, transition: 'transform 0.3s ease' }}></i>
                                ) : (
                                    <i
                                        className="fa-solid fa-chevron-down button-down"
                                        style={{ color: `#40BCD0`, transition: 'transform 0.3s ease' }}></i>
                                )}
                            </span>
                        </button>
                    </div>
                    <div className={`answer-container ${openAnswers[index] ? 'open' : ''}`}>
                        <div className="answer-line"></div>
                        <div className="answer">
                            <p>{question.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const questions = [
	{
		title: "What is OpenNezt’s Co-Founder Matching feature?",
		answer:
			"OpenNezt’s Co-Founder Matching connects startup founders with like-minded entrepreneurs who have complementary skills and shared visions. Our advanced algorithm helps you find the right partner to grow your business from anywhere in the world.",
	},
	{
		title: "How does the Co-Founder Matching algorithm work?",
		answer:
			"Our algorithm uses filters based on skills, industry experience, and availability, along with your preferences for co-founders, to provide the best match. Our AI-driven system ensures that you are connected with someone who aligns with your startup needs and long-term vision.",
	},
	{
		title: "Can I search for co-founders from different countries?",
		answer:
			"Yes! OpenNezt allows you to connect with co-founders globally. Our platform supports multilingual filters and breaks down geographic barriers, enabling you to find your ideal partner, no matter where they are located.",
	},
	{
		title: "How detailed are the profiles of potential co-founders?",
		answer:
			"Each profile includes detailed information about a co-founder’s skills, experience, and even reviews from other users. This transparency helps you make informed decisions when choosing a co-founder.",
	},
	{
		title: "How do I start matching with co-founders?",
		answer:
			"Simply sign up, create your profile, and customize your search filters. The platform will then suggest potential co-founders based on your criteria. You can start conversations and collaborate with the matches directly on OpenNezt.",
	},
	{
		title: "What if I don’t find a match right away?",
		answer:
			"Don’t worry! Our platform continuously updates, and new co-founders join every day. You can adjust your filters or wait for new matches to be recommended based on your preferences.",
	},
	{
		title: "Is there a fee to use the Co-Founder Matching feature?",
		answer:
			"OpenNezt offers both free and premium plans. The free plan allows basic access to co-founder matching, while the premium plan unlocks additional features such as advanced filters and priority matching.",
	},
	{
		title: "Can I use OpenNezt to find mentors or advisors as well?",
		answer:
			"Yes! In addition to co-founders, OpenNezt also provides features to connect you with mentors, advisors, and industry experts to help guide your startup journey.",
	},
];

export default QAndA;
