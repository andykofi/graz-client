import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAccount } from "../../actions/accountActions";

class ProjectItem extends Component {

    onDeleteClick = id => {
        this.props.deleteAccount(id);
    };
    render() {
        const { account } = this.props;
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">{account.accountIdentifier}</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{account.accountName}</h3>
                            <p>{account.description}</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <a href="#">
                                    <li className="list-group-item board">
                                        <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                                    </li>
                                </a>
                                <Link to={`/updateAccount/${account.accountIdentifier}`}>
                                    <li className="list-group-item update">
                                        <i className="fa fa-edit pr-1"> Update Account Info</i>
                                    </li>
                                </Link>

                                <li className="list-group-item delete"
                                    onClick={this.onDeleteClick.bind(this, account.accountIdentifier)}
                                >
                                    <i className="fa fa-minus-circle pr-1"> Delete Account</i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProjectItem.propTypes = {
    deleteAccount: PropTypes.func.isRequired
};

export default connect(
    null,
    { deleteAccount }
)(ProjectItem);