import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactsIndexPage from "./ContactsIndexPage";
import ContactShowPage from "./ContactShowPage";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={ContactsIndexPage} />
          <Route exact path="/contacts/:id" component={ContactShowPage} />
        </div>
      </Router>
    );
  }
}

export default App;



