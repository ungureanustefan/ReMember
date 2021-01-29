import React, { Component } from "react";
import { CgTrashEmpty } from "react-icons/cg";


class Delete extends Component {
  render() {
    return (
      <button className="note-buttons" type="button" href="#" onClick={this.props.onNoteDelete}>
        <CgTrashEmpty />
      </button>
    );
  }
}

export default Delete;
