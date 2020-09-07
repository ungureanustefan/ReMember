import React, { Component } from "react";
import HomePage from "./HomePage";
import Logging from "./Logging";

class Navbar extends Component {
  render() {
    return (
      <nav className="flex-container">
        <HomePage />
        <Logging />
      </nav>
    );
  }
}

export default Navbar;
