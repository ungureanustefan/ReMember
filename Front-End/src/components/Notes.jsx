import React, { Component } from "react";
import Note from "./Note";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const arr = this.props.notesProp;
    const noteArr = arr
      .filter((note) => {
        return this.props.showArchived ? note.archive : !note.archive;
      })
      .map((note) => (
        <Note
          key={note._id}
          note={note}
          onNoteDelete={this.props.onNoteDelete}
          onNoteArchive={this.props.onNoteArchive}
          onLabelUpdate={this.props.onLabelUpdate}

        />
      ));
    return <ul className="list">{noteArr}</ul>;
  }
}

export default Notes;
