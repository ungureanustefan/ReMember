import React, { Component } from "react";
import HomePage from "./HomePage";
import Archived from "./Archived";
import Logging from "./Logging";
import Labels from "./Labels";

class Navbar extends Component {
  render() {
    return (
      <nav className="flex-container">
        <HomePage />
        <Archived onToggleArchived={this.props.onToggleArchived} />
        <Labels />
        <Logging />
      </nav>
    );
  }
}

export default Navbar;
