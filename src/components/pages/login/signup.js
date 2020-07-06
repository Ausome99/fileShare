import React, { Component } from 'react';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameInput: "",
            passwordInput: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        fetch("http://127.0.0.1:5000/user/create", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                username: this.state.usernameInput,
                password: this.state.passwordInput
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className='signup-wrapper'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="usernameInput" 
                        placeholder="Username" 
                        value={this.state.usernameInput}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password"
                        name="passwordInput" 
                        placeholder="Password" 
                        value={this.state.passwordInput}
                        onChange={this.handleChange}
                    />
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}