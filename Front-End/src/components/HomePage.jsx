import React, { Component } from "react";
import SideBar from "./SideBar"
class HOMEPAGE extends Component { 
  render() {
    return (
      <div>
      <div className="flex-container">
      <div><SideBar onToggleArchived={this.props.onToggleArchived} /></div>

        <p style={{ fontSize: "20px" }} className="homepage">
          <a href="/"  style={{textDecoration: "none"}}>Home</a>
        </p>
      </div>

      </div>
    );
  }
}

export default HOMEPAGE;
