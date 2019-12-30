import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/Navbar.jsx";
import Accounts from "./Components/Accounts.jsx";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar></NavBar>
        <Accounts></Accounts>
      </div>
    );
  }
}
export default App;
