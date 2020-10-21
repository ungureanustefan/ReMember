import React, { Component } from "react";
import Delete from "./Delete";
import Archive from "./Archive";
import LabelButton from "./LabelButton";

class Note extends Component {
  render() {
    return (
      <li>
        <a href="#">
          {this.props.note.name ? (
            <h2>{this.props.note.name}</h2>
          ) : (
            <img src={this.props.note.image} className="image" />
          )}
        </a>
        <Delete
          onNoteDelete={() => this.props.onNoteDelete(this.props.note._id)}
        />
        <Archive
          onNoteArchive={() => this.props.onNoteArchive(this.props.note._id)}
        />
        <LabelButton />
      </li>
    );
  }
}

export default Note;
