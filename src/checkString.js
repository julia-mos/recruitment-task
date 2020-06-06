function Check(string) {
    let regex = /[\W_]/g;
    let initialString = string.toLowerCase().replace(regex, "");
    let reverseString = initialString.split("").reverse().join(""); 
    return reverseString === initialString;
  }

  export default Check;