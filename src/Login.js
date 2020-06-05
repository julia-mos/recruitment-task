import React, { Component } from 'react';
import {Base64} from "js-base64"

class Login extends Component {
  constructor(){
    super();
    this.state={
      username:"",
      password:""
    }
  }
  handlePasswordChange = (e)=>{
    this.setState({password: Base64.encode(e.target.value)})
  }
  handleUsernameChange = () =>{

  }
  handleSubmit = (e) =>{
    e.preventDefault();
  }
  render() {
    return (
      <div>
      Log in <br/>
      <input type="text" value={this.state.username} placeholder="username" onChange={this.handleUsernameChange}/>
      <input type="password" value={Base64.decode(this.state.password)} placeholder="password" onChange={this.handlePasswordChange}/>
      <button type="submit" onClick={this.handleSubmit}>Login</button>
      <button onClick={this.props.changeAction}>Don't have an account? Register now</button>
      </div>
    );
  }
}

export default Login;
