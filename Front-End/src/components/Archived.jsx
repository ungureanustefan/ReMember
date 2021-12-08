import React, { Component } from "react";
class Archived extends Component {
  render() {
    return (
      <div className="flex-container">
        <p style={{ fontSize: "20px" }} className="homepage">
        <label className="container">Archived
          <input type="checkbox" onClick={this.props.onToggleArchived} style={{textDecoration: "none"}} />
          <span className="checkmark"></span>
        
          </label>
        </p>
      </div>
    );
  }
}

export default Archived;
