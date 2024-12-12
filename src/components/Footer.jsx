import React, { useState } from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import OpenNeztLogoWhite from "../assets/OpenNeztLogoWhite.png";
import { notification } from 'antd';
import "./Footer.scss";
import subscribe_email from "./Subcribe_email";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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
        <footer className="footer">
            <div className="footer__container container">
                <div
                    className="footer__logo"
                    style={{ background: `url(${OpenNeztLogoWhite})` }}></div>

                <div className="footer__links w-100">
                    <div className="footer__section ">
                        <h3>Product</h3>
                        <a href="#">Premium</a>
                    </div>

                    <div className="footer__section ">
                        <h3>Resources</h3>
                        <a href="#">Privacy Policy</a>
                    </div>

                    <div className="footer__section ">
                        <h3>Company</h3>
                        <a href="#">Contact us</a>
                    </div>

                    <div className="footer__newsletter">
                        <h3>Join our Newsletter!</h3>
                        <div className="newsletter__form">
                            <input
                                className="input"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" onClick={handleSubmit}>SUBMIT</button>
                        </div>
                        {message && <div className="subscribe-message">{message}</div>}
                    </div>
                </div>

                <div className="footer__social mt-4">
                    <a href="#">
                        <FaInstagram />
                    </a>
                    <a href="#">
                        <FaYoutube />
                    </a>
                    <a href="https://www.linkedin.com/company/opennezt/">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.facebook.com/opennezt">
                        <FaFacebook />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;