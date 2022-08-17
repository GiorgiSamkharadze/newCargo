import React from "react";
import {Link} from "react-router-dom";

const Navbar = (props) => {
    return (
        <header
            id="headerOnepagNav"
            className="header header-box-shadow left-aligned-navbar z-index-999"
        >
            <div className="header-section">
                <div id="logoAndNavOnepagNav" className="container">
                    <nav className="navbar navbar-expand-sm w-md-100">
                        <Link
                            className="navbar-brand d-flex"
                            to="/home"
                            aria-label="Front"
                        >
                            <img src="/logo.png" alt="Logo" style={{minWidth: '170px', padding: '5px'}} />
                        </Link>
                        <button
                            type="button"
                            className="navbar-toggler btn btn-icon btn-sm rounded-circle"
                            aria-label="Toggle navigation"
                            aria-expanded="false"
                            aria-controls="navBarOnepagNav"
                            data-toggle="collapse"
                            data-target="#navBarOnepagNav"
                        >
                            <span className="navbar-toggler-default">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 18 18"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"
                                    />
                                </svg>
                            </span>
                            <span className="navbar-toggler-toggled">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 18 18"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"
                                    />
                                </svg>
                            </span>
                        </button>
                        <div id="navBarOnepagNav" className="collapse navbar-collapse">
                            {props.children}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
