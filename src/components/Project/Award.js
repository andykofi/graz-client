import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Award extends Component {
    constructor() {
        super();

        this.state = {
            username:"",
            award: "",
            description: "",
            award_date:"",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //life cycle hooks
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {

    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h6 className="display-4 text-center">Award Form</h6>
                                <hr />
                                <form onSubmit={this.onSubmit}>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className={classnames("form-control form-control-lg", {
                                                "is-invalid": errors.username
                                            })}
                                            placeholder="UserName / Email"
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.onChange}
                                        />
                                        {errors.username&& (
                                            <div className="invalid-feedback">
                                                {errors.username}
                                            </div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className={classnames("form-control form-control-lg", {
                                                "is-invalid": errors.award
                                            })}
                                            placeholder="Award"
                                            name="award"
                                            value={this.state.award}
                                            onChange={this.onChange}
                                        />
                                        {errors.award&& (
                                            <div className="invalid-feedback">
                                                {errors.award}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                            <textarea
                                className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.description
                                })}
                                placeholder="Award Description"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange}
                            />
                                        {errors.description && (
                                            <div className="invalid-feedback">
                                                {errors.description}
                                            </div>
                                        )}
                                    </div>
                                    <h6>Award Date</h6>
                                    <div className="form-group">
                                        <input
                                            type="date"
                                            className="form-control form-control-lg"
                                            name="end_date"
                                            value={this.state.award_date}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <input
                                        type="submit"
                                        className="btn btn-primary btn-block mt-4"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Award.propTypes = {
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {}
)(Award);