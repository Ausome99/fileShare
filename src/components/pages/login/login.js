import React from 'react';

export default function login(props) {
    const errorMessage = {
        "none": "",
        "blank field": "Please fill in all fields.",
        "fetch error": "An error occured. Please try again later.",
        "not verified": "Incorrect username or password"
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <input 
                type="text" 
                name="usernameInput" 
                placeholder="Username" 
                value={props.usernameInput}
                onChange={props.handleChange}
            />
            <input 
                type="password"
                name="passwordInput" 
                placeholder="Password" 
                value={props.passwordInput}
                onChange={props.handleChange}
            />
            <button>Login</button>
            <p className="error">{errorMessage[props.errorMessage]}</p>
            <p onClick={props.handleClick}>Don't have an account? Click here to sign up!</p>
        </form>
    )
}