import React, { useState } from "react";
import "./Subscribe.scss";
// import axios from "axios";
import subscribe_email from "./Subcribe_email";

function Subscribe() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        try {
            const responseMessage = await subscribe_email(email);
            setMessage(responseMessage);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <>
            <div
                className="subscribe-container"
                style={{ background: `rgb(14,17,38)` }}>
                <div className="subscribe-content container">
                    <div className="subscribe-header">
                        Subscribe to receive exclusive startup tips, strategic
                        business insights, and more.{" "}
                    </div>
                    <div className="subscribe-submit">
                        <input
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={handleSubmit}>
                            SUBMIT
                        </button>
                    </div>
                    {message && <div className="subscribe-message">{message}</div>}
                </div>
            </div>
        </>
    );
}

export default Subscribe;