import React, { Component } from 'react';
import Login from "./Login"
import Palindromes from "./Palindromes"

class App extends Component {
  constructor(){
    super();
    this.state={
      users:[],
      logged:false,
      loggedUser:null
    }
    //Użytkownicy powinni logować się poprzez połączenie z bazą danych. Tam trzymane hasła są bezpieczne, 
    //ponieważ nie ma ich po stronie frontednu oraz są szyfrowane. Trzymanie danych do logowania po
    //stronie frontendu nie jest bezpiecznym, ani trwałym rozwiązaniem - dane znikają po ponownym uruchomieniu projektu
    //a także trzymanie ich lokalnie (w state komponentu lub store reduxa) umożliwia do nich dostęp poprzez narzędzia developerskie reacta.
  }
  handleAction = (login,username,password) =>{
    let users=this.state.users
    if(login){
      if(this.state.users.find(x=>x.username===username).password===password)
        return true;
      else
        return false;
    }
    else{
      if(this.state.users.find(x=>x.username===username)===undefined){
      users.push({"username":username, "password":password})
      this.setState({users: users})
      return true;
      }
      else return false;
    }
  }
  handleLogging = (username) =>{
    this.setState({logged:true, loggedUser:username})
  } 
  render() {
    return (
      <div>
        {
        !this.state.logged?
          <Login handleAction={this.handleAction}/>
        :
        <Palindromes />
        }
      </div>
    );
  }
}

export default App;
