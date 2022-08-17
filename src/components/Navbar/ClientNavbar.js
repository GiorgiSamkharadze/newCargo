import React, {useContext, useEffect, useState} from "react";
import Navbar from "./Navbar";
import {AuthContext} from "context";
import {Link, useHistory} from "react-router-dom";
import StickyBox from "react-sticky-box";

const ClientNavbar = () => {
    const {
        auth: {isLoggedIn, accountType},
    } = useContext(AuthContext);
    const [isLoggedInClient, setIsClient] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setIsClient(isLoggedIn && accountType === "CLIENT");
    }, [isLoggedIn, accountType]);

    return (
        <>
            <StickyBox className="z-index-999">
                <Navbar>
                    <ul className="js-scroll-nav navbar-nav ml-md-8">
                        <li className="navbar-nav-item">
                            <Link className="nav-link" to="/home">
                                Home
                            </Link>
                        </li>
                        <li className="navbar-nav-item">
                            <Link className="nav-link" to="/home">
                                About
                            </Link>
                        </li>
                        <li className="navbar-nav-item">
                            <Link className="nav-link" to="/home">
                                Contact
                            </Link>
                        </li>
                        <li className="d-sm-none border border-bottom"/>

                        <li className="navbar-nav-last-item text-right">
                            <ul className="js-scroll-nav navbar-nav ml-sm-auto">
                                {!isLoggedInClient && (
                                    <li className="navbar-nav-item">
                                        <div className="navbar-nav-wrap-content text-left text-md-center">
                                            <Link
                                                className="nav-link d-inline-block"
                                                to={`${history.location.pathname}/login`}
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                className="btn btn-sm btn-primary btn-pill d-none d-sm-inline-block transition-3d-hover"
                                                to={`${history.location.pathname}/register`}
                                            >
                                                Register
                                            </Link>
                                        </div>
                                    </li>
                                )}
                                {!isLoggedInClient && (
                                    <li className="navbar-nav-item d-sm-none">
                                        <div className="navbar-nav-wrap-content text-left">
                                            <Link
                                                className="nav-link d-inline-block"
                                                to={`${history.location.pathname}/register`}
                                            >
                                                Register
                                            </Link>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </Navbar>
            </StickyBox>
        </>
    );
};

export default ClientNavbar;
