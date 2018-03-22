import React, { Component } from 'react';

class Signup extends Component{
    render(){
        return(
        <div>
            <h1>Sign Up</h1>
            <p>Enter an email and password to create an account</p>
            <form>
                <input type="email"
                    placeholder='Email'
                    required/>
                <input type="password"
                    placeholder='Password'
                    required/>
                <button type="submit">Sign Up</button>
            </form>
         </div>
        );
    }
}

export default Signup;