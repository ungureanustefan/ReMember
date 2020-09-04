import React, { Component } from "react";
class Remember extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="remember">
        <div className="test">
          <h1 className="re" style={{ paddingLeft: "50px" }}>
            Re:
          </h1>
        </div>
        <div>
          <h1 className="member">Member</h1>
        </div>
      </div>
    );
  }
}

export default Remember;
