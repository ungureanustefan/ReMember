import React, { Component } from "react";
import HomePage from "./HomePage";
import Archived from "./Archived";
import Logging from "./Logging";

class Navbar extends Component {
  render() {
    return (
      <nav className="flex-container">
        <HomePage />
        <Archived />
        <Logging />
      </nav>
    );
  }
}

export default Navbar;
