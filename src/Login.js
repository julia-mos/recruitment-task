import React, { Component } from 'react';
import { Base64 } from "js-base64"

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      wantToLogin: true,
      message: "Don't have an account? Register now",
      title: "Login",
      warning:""
    }
  }
  handlePasswordChange = (e) => {
    this.setState({ password: Base64.encode(e.target.value), warning:"" })
  }
  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value,warning:"" })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.username!=="" && this.state.password !=="")
    {
      if(this.props.handleAction(this.state.wantToLogin,this.state.username,this.state.password))
        console.log("git")
    }
    else
    this.setState({warning: "username and password cannot be empty"})
  }
  handleChangingAction = () => {
    this.state.wantToLogin ?
      this.setState({
        username: "",
        password: "",
        wantToLogin: false,
        message: "Have an account? Log in now",
        title: "Register",
        warning:""
      })
      :
      this.setState({
        username: "",
        password: "", wantToLogin: true,
        message: "Don't have an account? Register now",
        title: "Login",
        warning:""
      })
  }
  render() {
    return (
      <div>
        {this.state.title} <br />
        <input type="text" value={this.state.username} placeholder="username" onChange={this.handleUsernameChange} />
        <input type="password" value={Base64.decode(this.state.password)} placeholder="password" onChange={this.handlePasswordChange} />
        <button type="submit" onClick={this.handleSubmit}>{this.state.title}</button>
        <button onClick={this.handleChangingAction}>{this.state.message}</button>
        <p color="red">{this.state.warning}</p>
      </div>
    );
  }
}

export default Login;
