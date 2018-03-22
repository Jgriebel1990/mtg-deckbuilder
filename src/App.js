import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';


class App extends Component {
  constructor(){
    super()
    this.state = {
      signup: '',
      login: ''
    }
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleSignupSubmit(e){
    this.setState({submit: e.target.value})
  };

  handleLoginSubmit(e){
    this.setState({login: e.target.value})
  };

  getSigup(e){
    signupForm(this.state.signup)
      .then(response)
  }
  render() {
    return (
      <div>
        <h1>Magic the Gathering Deck Builder</h1>
        <button type="submit" onSubmit={this.handleSignupSubmit}>Signup</button>
        <button type="submit" onSubmit={this.handleLoginSubmit}>Login</button>
      </div>
    );
  }
}

export default App;
