import React, { Component } from "react";
import HomePage from "./HomePage";
import Logging from "./Logging";

class Navbar extends Component {



  render() {
    return (
      <div>
      <nav className="flex-container">
        <HomePage onToggleArchived={this.props.onToggleArchived} />
        <Logging />
      </nav>
      </div>
    );
  }
}

export default Navbar;
