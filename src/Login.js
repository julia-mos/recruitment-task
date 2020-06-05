import React, { Component } from 'react';
import {Base64} from "js-base64"

class Login extends Component {
  constructor(){
    super();
    this.state={
      username:"",
      password:"",
      wantToLogin:true,
      message:"Don't have an account? Register now",
      title: "Log in"
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
  handleChangingAction = () =>{
    this.state.wantToLogin ?
    this.setState({wantToLogin : false, message: "Have an account? Log in now", title:"Register"})
    :
    this.setState({wantToLogin : true, message: "Don't have an account? Register now",title:"Log in"})
  }
  render() {
    return (
      <div>
      {this.state.title} <br/>
      <input type="text" value={this.state.username} placeholder="username" onChange={this.handleUsernameChange}/>
      <input type="password" value={Base64.decode(this.state.password)} placeholder="password" onChange={this.handlePasswordChange}/>
      <button type="submit" onClick={this.handleSubmit}>Login</button>
      <button onClick={this.handleChangingAction}>{this.state.message}</button>
      </div>
    );
  }
}

export default Login;
