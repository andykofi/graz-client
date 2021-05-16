import React, { Component } from "react";
import { getAccount, createAccount} from "../../actions/accountActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateAccount extends Component {
    constructor() {
        super();

        this.state = {
            id: "",
            accountIdentifier: "",
            deposit: "",
            balance: "",
            award: "",
            description: "",
            start_date: "",
            award_date:"",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
        const {
            id,
            accountIdentifier,
            deposit,
            balance,
            award,
            description,
            start_date,
            award_date
        } = nextProps.account;

        this.setState({
            id,
            accountIdentifier,
            deposit,
            balance,
            award,
            description,
            start_date,
            award_date
        });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getAccount(id, this.props.history);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const updateAccount = {
            id: this.state.id,
            accountIdentifier: this.state.accountIdentifier,
            deposit: this.state.deposit,
            balance: this.state.balance,
            award: this.state.award,
            description: this.state.description,
            start_date: this.state.start_date,
            award_date: this.state.award_date
        };

        this.props.createAccount(updateAccount, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Account form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.accountIdentifier
                                        })}
                                        placeholder="Unique Project ID"
                                        name="projectIdentifier"
                                        value={this.state.accountIdentifier}
                                        onChange={this.onChange}
                                    />
                                    {errors.accountIdentifier && (
                                        <div className="invalid-feedback">
                                            {errors.accountIdentifier}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.deposit
                                        })}
                                        placeholder="Deposit"
                                        name="deposit"
                                        value={this.state.deposit}
                                        onChange={this.onChange}
                                    />
                                    {errors.deposit && (
                                        <div className="invalid-feedback">
                                            {errors.deposit}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.balance
                                        })}
                                        placeholder="Balance"
                                        name="balance"
                                        value={this.state.balance}
                                        onChange={this.onChange}
                                    />
                                    {errors.balance&& (
                                        <div className="invalid-feedback">
                                            {errors.balance}
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
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="start_date"
                                        value={this.state.start_date}
                                        onChange={this.onChange}
                                    />
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
        );
    }
}

UpdateAccount.propTypes = {
    getAccount: PropTypes.func.isRequired,
    createAccount: PropTypes.func.isRequired,
    account: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    account: state.account.account,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getAccount, createAccount }
)(UpdateAccount);