import React, { Component } from "react";
import { BiArchiveIn } from "react-icons/bi";
class Archive extends Component {
  render() {
    return (
      <button className="note-buttons" type="button" href="#">
        <BiArchiveIn onClick={this.props.onNoteArchive} />
      </button>
    );
  }
}

export default Archive;
