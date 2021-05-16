import React, { Component } from 'react';
import ProjectItem from "./Project/ProjectItem";
import CreatePayment from './Project/CreatePayment';
import { connect } from "react-redux";
import { getAccounts } from "../actions/accountActions";
import PropTypes from "prop-types";
import ViewMembers from "./Project/ViewMembers";
import Award from "./Project/Award";
import CreateAward from "./Project/CreateAward";


class Dashboard extends Component {
    componentDidMount() {
        this.props.getAccounts();
    }

    render() {

        const { accounts } = this.props.account;
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Membership Account </h1>
                            <br />
                            <CreatePayment /> <ViewMembers /> <CreateAward/>
                            <br />
                            <hr />
                            {accounts.map(account => (
                                <ProjectItem key={account.id} account={account} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    account: PropTypes.object.isRequired,
    getAccounts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    account: state.account
});

export default connect(
    mapStateToProps,
    { getAccounts }
)(Dashboard);
