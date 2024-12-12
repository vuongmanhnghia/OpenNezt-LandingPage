import { useRef } from "react";
import "./App.css";
import Banner from "./Nghia/Banner";
import Matching from "./Nghia/Matching";
import QAndA from "./QandA";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import LearnMore from "./LearnMore";
import Team from "./Team";
import OnBoarding from "./Nghia/On-boarding";
import Evaluation from "./Nghia/Evaluation";
import Nav from "./Nghia/Nav";
import Mentors from "./Mentors";
import TrustLearning from "./TrustLearning";

function App() {
	const QandARef = useRef(null);
	const BannerRef = useRef(null);
	const TeamRef = useRef(null);
	const OnBoardingRef = useRef(null);
	const ourServicesRef = useRef(null);
	const MentorsRef = useRef(null);
	const scrollToBanner = () => {
		BannerRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	const scrollToTeam = () => {
		TeamRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	const scrollToQandA = () => {
		QandARef.current?.scrollIntoView({ behavior: "smooth" });
	};
	const scrollOnBoarding = () => 
	{
		OnBoardingRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	const scrollOurServices = () => {
		ourServicesRef.current?.scrollIntoView({ behavior: "smooth" });
	}
	const scrollMentors = () => {
		MentorsRef.current?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<>
			<Nav
				scrollToBanner={scrollToBanner}
				scrollToQandA={scrollToQandA}
				scrollToTeam={scrollToTeam}
				scrollOnBoarding={scrollOnBoarding}
				scrollOurServices={scrollOurServices}
				scrollMentors={scrollMentors}
			/>
			<div ref={BannerRef}>
				<Banner />
			</div>
			<div ref={OnBoardingRef}>
			<OnBoarding />
			</div>
			
			<Matching />
			
			<Evaluation />
			<div ref={ourServicesRef}>
			<TrustLearning />
			<LearnMore />
			</div>
			<Subscribe />

			<div ref={TeamRef}>
				<Team />
			</div>
			<div ref={MentorsRef}>
			<Mentors />
			</div>
			<div ref={QandARef}>
				<QAndA />
			</div>
			<Footer />
		</>
	);
}

export default App;
