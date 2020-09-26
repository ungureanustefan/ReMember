import React, { Component } from "react";
import Note from "./Note";

class Notes extends Component {
  render() {
    const arr = this.props.notesProp;
    const noteArr = arr.map((note) => (
      <Note note={note} onNoteDelete={this.props.onNoteDelete} />
    ));
    return <ul className="list">{noteArr}</ul>;
  }
}

export default Notes;
