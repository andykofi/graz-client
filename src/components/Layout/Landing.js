import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }
    render() {
        return (
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="display-5 mb-4">
                                    Graz Ghanaian Diaspora Record Keeper
                                </h3>
                                <p className="lead">
                                    Create And Manage Account
                                </p>
                                <hr />
                                <Link className="btn btn-lg btn-primary mr-2" to="/register">
                                    Sign Up
                                </Link>
                                <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Landing.propTypes = {
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps)(Landing);