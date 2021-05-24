import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const FooterPage = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Useful Links</h4>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="donation">
                                    Donate
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Our Goals</h4>
                        <ui className="list-unstyled">
                            <li>We aim to help each other</li>
                            <li>Support the bereaved</li>
                            <li>Birthday Celebrations</li>
                            <li>Building bridges across all diaspora </li>
                            <li>Help people to resettle back home</li>
                            <li>Extend our hands to develop Ghana</li>
                            <li>Build mutual friendship and respect to all</li>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>Useful Information</h4>
                        <ui className="list-unstyled">
                            <li>New Projects</li>
                            <li>Donation</li>
                            <li>Next Meeting</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} THE GRAZ UK GHANAIAN DIASPORA | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FooterPage;