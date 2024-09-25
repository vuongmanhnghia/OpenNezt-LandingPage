import { useRef } from "react";
import "./App.css";
import Banner from "./Banner";
import Matching from "./Matching";
import QAndA from "./QAndA";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import LearnMore from "./LearnMore";
import Team from "./Team";
import Navigation from "./Navigation";
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
			<Navigation
				scrollToBanner={scrollToBanner}
				scrollToQandA={scrollToQandA}
				scrollToTeam={scrollToTeam}
			/>
			<div ref={BannerRef}>
				<Banner />
			</div>
			<Matching />
			<Subscribe />
			<LearnMore />
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
