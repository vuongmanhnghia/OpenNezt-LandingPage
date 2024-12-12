import React, { useState } from "react";
import { notification } from 'antd';
import "./Subscribe.scss";
import subscribe_email from "./Subcribe_email";

function Subscribe() {
    const [email, setEmail] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async () => {
        if (!validateEmail(email)) {
            notification.error({
                message: 'Error',
                description: 'Invalid email format',
            });
            return;
        }

        try {
            const responseMessage = await subscribe_email(email);
            notification.success({
                message: 'Success',
                description: responseMessage,
            });
        } catch (error) {
            notification.error({
                message: 'Error',
                description: error.message,
            });
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
                </div>
            </div>
        </>
    );
}

export default Subscribe;