import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import Matching from "./Matching";
import QandA from "./QandA";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<>
			<Header />
			<Banner />
			<Matching />
			<QandA />
		</>
	);
}

export default App;
