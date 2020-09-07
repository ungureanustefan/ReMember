import React, { Component } from "react";
class Logging extends Component {
  render() {
    return (
      <div className="flex-container">
        <p style={{ fontSize: "20px" }} className="logging">
          You are not logged in
        </p>
      </div>
    );
  }
}

export default Logging;
