import React, { Component } from 'react';

class PalindromesList extends Component {
  render() {
    let list=this.props.list.map((obj,index) =>
    <li key={index}>{obj.text} : {obj.isPalindrome.toString()}</li>
    )
    return (
    <ul>{list}</ul>
    );
  }
}

export default PalindromesList;
