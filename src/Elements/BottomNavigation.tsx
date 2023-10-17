import React from "react";
const bottomNavigation = () => {
    return (
        <>
            <section className="footer-section">
                <section className={"bottom-nav-title"}> <h3>About The OpenSourceProject</h3></section>
                <ul>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Leadership</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Events</a></li>
                </ul>
            </section>
            <section className="footer-section">
                <section className={"bottom-nav-title"}> <h3>Support</h3></section>
                <ul>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Community Forum</a></li>
                    <li><a href="#">Contact Support</a></li>
                </ul>
            </section>

            <section className="footer-section">
                <section className={"bottom-nav-title"}> <h3>Legal</h3></section>
                <ul>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </section>
        </>
    )
};

export default bottomNavigation;