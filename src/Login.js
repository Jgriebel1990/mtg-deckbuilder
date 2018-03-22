import React, { Component } from 'react';

class Login extends Component{
    render(){
        return(
            <div>
                <h1>Login</h1>
                <p>Enter email and password to login</p>
                <form> 
                    <input type="email"/>
                    <input type="password"/>
                    <button type="submit">Logic</button>
                </form>
            </div>
        );
    }
}

export default Login;