import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
// console.log('API URL:', process.env.REACT_APP_API_URL); // Kiểm tra giá trị của biến môi trường

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
