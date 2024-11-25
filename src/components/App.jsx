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
function App() {
	const QandARef = useRef(null);
	const BannerRef = useRef(null);
	const TeamRef = useRef(null);

	const scrollToBanner = () => {
		BannerRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	const scrollToTeam = () => {
		TeamRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	const scrollToQandA = () => {
		QandARef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<Nav
				scrollToBanner={scrollToBanner}
				scrollToQandA={scrollToQandA}
				scrollToTeam={scrollToTeam}
			/>
			<div ref={BannerRef}>
				<Banner />
			</div>
			<OnBoarding />
			<Matching />
			<Evaluation />
			<LearnMore />
			<Subscribe />

			<div ref={TeamRef}>
				<Team />
			</div>
			<div ref={QandARef}>
				<QAndA />
			</div>
			<Footer />
		</>
	);
}

export default App;
