import React, { Component } from 'react';

import Login from "./login";
import Signup from "./signup";

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authMethod: "login"
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ authMethod: "signup" })
    }

    render() {
        return (
            <div className='auth-wrapper'>
                {this.state.authMethod === "login" ? <Login /> : <Signup />}
                <p onClick={this.handleClick}>Don't have an account? Click here to sign up!</p>
            </div>
        )
    }
}