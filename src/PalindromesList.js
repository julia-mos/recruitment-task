import React, { Component } from 'react';
import "./style.css"
import yes from "./imgs/ok.png"
import no from "./imgs/nie.png"

class PalindromesList extends Component {
  render() {
    let list=this.props.list.map((obj,index) =>
    <li className="listItem" key={index}><span>{obj.text}</span> : {
      obj.isPalindrome?
      <img src={yes} alt="It is palindrome"/>
      :
      <img src={no} alt="It isn't palindrome"/>
      }</li>
    )
    return (
    <ul className="list">{list}</ul>
    );
  }
}

export default PalindromesList;
