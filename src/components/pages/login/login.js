import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameInput: "",
            passwordInput: ""
        }
    }

    render() {
        return (
            <div className='login-wrapper'>
                <input type="text" placeholder="Username" value={this.state.usernameInput} />
                <input type="password" placeholder="Password" value={this.state.passwordInput} />
                <button>Login</button>
            </div>
        )
    }
}