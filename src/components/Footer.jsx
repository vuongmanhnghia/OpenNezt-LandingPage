import React from "react";
import "./Footer.scss";
import OpenNeztLogoWhite from '../assets/OpenNeztLogoWhite.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo">
                    <img src={OpenNeztLogoWhite} alt="OpenNezt Logo" />
                </div>

                <div className="footer__links">
                    <div className="footer__section">
                        <h3>Product</h3>
                        <a href="#">Premium</a>
                    </div>
                    <div className="footer__section">
                        <h3>Resources</h3>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="footer__section">
                        <h3>Company</h3>
                        <a href="#">Contact us</a>
                    </div>

                
                    <div className="footer__newsletter">
                        <h3>Join our Newsletter!</h3>
                        <div className="newsletter__form">
                            <input type="email" placeholder="Enter your email" />
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </div>

               
                <div className="footer__social">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
