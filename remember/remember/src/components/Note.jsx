import React, { Component } from "react";
import Delete from "./Delete";

class Note extends Component {
  render() {
    return (
      <li>
        <a href="#">
          <h2>{this.props.note.name}</h2>
        </a>
        <Delete
          onNoteDelete={() => this.props.onNoteDelete(this.props.note._id)}
        />
      </li>
    );
  }
}

export default Note;
