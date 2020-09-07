import React, { Component } from "react";
class Note extends Component {
  render() {
    return (
      <li>
        <a>
          <h2>{this.props.name}</h2>
        </a>
      </li>
    );
  }
}

export default Note;
