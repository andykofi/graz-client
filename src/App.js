import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddAccount from './components/Project/AddAccount';
import {Provider} from "react-redux";
import store from "./store";
import UpdateAccount from "./components/Project/UpdateAccount";
import Landing from "./components/Layout/Landing";
import Register from "./components/UserManager/Register";
import Login from "./components/UserManager/Login";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import {SET_CURRENT_USER} from "./actions/types";
import Members from "./components/Project/Members";
import Award from "./components/Project/Award";
import Payment from "./components/Project/Payment";
import {logout} from "./actions/securityActions";
import SecureRoute from "./securityUtils/SecureRoute";
import FooterPage from "./components/Layout/FooterPage";
import Donation from './components/Project/Donation';

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
    setJWTToken(jwtToken);

    const decoded_jwtToken = jwt_decode(jwtToken);
    store.dispatch({
        type: SET_CURRENT_USER,
        payload: decoded_jwtToken
    });

    const currentTime = Date.now() / 1000;
    if (decoded_jwtToken.exp < currentTime) {
        store.dispatch(logout());
        window.location.href = "/";
    }
}

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header/>
                    {
                        //Public Routes<
                    }
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/donation" component={Donation}/>
                    {
                        //Private Routes
                    }
                    <Switch>
                    <SecureRoute exact path="/dashboard" component={Dashboard}/>
                    <SecureRoute exact path="/addAccount" component={AddAccount}/>
                    <SecureRoute exact path="/updateAccount/:id" component={UpdateAccount}/>
                    <SecureRoute exact path="/members" component={Members}/>
                    <SecureRoute exact path="/award" component={Award}/>
                    <SecureRoute exact path="/payment" component={Payment}/>
                    </Switch>
                </div>
                <FooterPage/>
            </Router>
        </Provider>
    );
}

export default App;
