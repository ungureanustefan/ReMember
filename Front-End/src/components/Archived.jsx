import React, { Component } from "react";
class Archived extends Component {
  render() {
    return (
      <div className="flex-container">
        <p style={{ fontSize: "20px" }} className="homepage">
          <a href="#" onClick={this.props.onToggleArchived} style={{textDecoration: "none"}}>
            Archived
          </a>
        </p>
      </div>
    );
  }
}

export default Archived;
