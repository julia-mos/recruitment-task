import React, { Component } from 'react';
import Login from "./Login"
import Palindromes from "./Palindromes"
import { connect } from "react-redux";
import { palindromesAdded } from "./actions/action";
import Check from "./checkString"

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      logged: false,
      loggedUser: null
    }
    //Użytkownicy powinni logować się poprzez połączenie z bazą danych. Tam trzymane hasła są bezpieczne, 
    //ponieważ nie ma ich po stronie frontednu oraz są szyfrowane. Trzymanie danych do logowania po
    //stronie frontendu nie jest bezpiecznym, ani trwałym rozwiązaniem - dane znikają po ponownym uruchomieniu projektu
    //a także trzymanie ich lokalnie (w state komponentu lub store reduxa) umożliwia do nich dostęp poprzez narzędzia developerskie reacta.
  }

  handleAction = (login, username, password) => {
    let users = this.state.users
    let userObject = this.state.users.find(x => x.username === username);
    if (login) {
      if (userObject === undefined || userObject.password !== password)
        return false;
      else if (userObject.password === password)
        return true;
    }
    else {
      if (userObject === undefined) {
        users.push({ "username": username, "password": password })
        this.setState({ users: users })
        return true;
      }
      else return false;
    }
  }
  handleLogging = (username) => {
    this.setState({ logged: true, loggedUser: username })
  }

  handleAddingString = (str) => {
    this.props.dispatchAddToList(str, Check(str));
  }

  render() {
    return (
      <div>
        {
          !this.state.logged ?
            <Login handleLogging={this.handleLogging} handleAction={this.handleAction} />
            :
            <Palindromes addNewString={this.handleAddingString} palindromes={this.props.palindromes} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    palindromes: state.palindromes
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    dispatchAddToList: () => dispatch(palindromesAdded())
  }
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
