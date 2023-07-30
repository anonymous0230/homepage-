import React from "react";
import { Outlet } from "react-router-dom";
import {Title1} from "../components/Titles";

const topNavigation = () => {
    return (
        <>
            <div className="header-section-total">
                <div className="header-section-left">
                    <div className="left">
                        <figure className="logoSmall">
                            <img src="/favicon.gif"/>
                        </figure>
                    </div>
                    <div className="right">
                    <Title1 title={"The OpenSource Project"} />
                    </div>
                </div>
                <div className="header-section-right">
                    <nav className="navigation">
                        <ul className={"topnav"}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/settings">Settings</a></li>
                        </ul>
                        <Outlet />
                    </nav>
                </div>
            </div>
        </>
    )
};

export default topNavigation;