import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  
  handleUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    });
  }
  
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
          <input type="text"
                 placeholder='Email'
                 required/>
          <input type="password"
                 placeholder='Password'
                 required/>
          <input type="text"
                 placeholder='Username'
                 required/>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default App;
