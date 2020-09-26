import React, { Component } from "react";
import { RiArchiveDrawerFill } from "react-icons/ri";
class Archive extends Component {
  render() {
    return (
      <button type="button" href="#">
        <RiArchiveDrawerFill onClick={this.props.onNoteArchive} />
      </button>
    );
  }
}

export default Archive;
