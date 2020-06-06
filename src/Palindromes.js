import React, { Component } from 'react';
import PalindromesList from "./PalindromesList"
import "./style.css"


class Palindromes extends Component {
  constructor(props){
    super(props);
    this.state={inputValue:""}
  }
  handleInputChange = (e) =>{
    this.setState({inputValue:e.target.value})
  }
  handleSubmitClick = (e)=>{
    e.preventDefault()    
    this.props.addNewString(this.state.inputValue)
    this.setState({inputValue: ""})
  }
  render() {
    return (
      <div className="wrapper">
      <div className="formContainer">
        <h1>Type a string</h1>
        <input className="formInput" placeholder="check" type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
        <button className="formBtn" type="submit" onClick={this.handleSubmitClick}>Check it out!</button>
        <PalindromesList list={this.props.palindromes} />
      </div>
      </div>
    );
  }
}

export default Palindromes;
