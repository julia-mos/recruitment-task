import React, { Component } from 'react';
import PalindromesList from "./PalindromesList"
import Check from "./checkString"

class Palindromes extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state={inputValue:""}
  }
  handleInputChange = (e) =>{
    this.setState({inputValue:e.target.value})
  }
  handleSubmitClick = (e)=>{
    e.preventDeafult()
  }
  render() {
    return (
      <div>
        <label>Type a string to check</label>
        <input type="text" value={this.state.value} onChange={this.handleInputChange}/>
        <button type="submit" onClick={this.handleSubmitClick}>Check it out!</button>
        <PalindromesList list={this.props.palindromes} />
      </div>
    );
  }
}

export default Palindromes;
