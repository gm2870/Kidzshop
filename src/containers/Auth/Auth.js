import React, { Component } from "react";
import SignIn from "./SignIn/SignIn";
import Register from "./Register/Register";

class Auth extends Component {
    render() {
        return this.props.match.url === "/users/login" ? (
            <SignIn />
        ) : (
            <Register />
        );
    }
}

export default Auth;
