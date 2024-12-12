import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";

const blockDevTools = () => {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I') || (event.ctrlKey && event.shiftKey && event.key === 'J') || (event.ctrlKey && event.key === 'U')) {
            event.preventDefault();
        }
    });

    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });
};

const Main = () => {
    useEffect(() => {
        blockDevTools();
    }, []);

    return (
        <StrictMode>
            <App />
        </StrictMode>
    );
};

createRoot(document.getElementById("root")).render(<Main />);