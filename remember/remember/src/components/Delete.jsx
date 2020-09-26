import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

class Delete extends Component {
  render() {
    return (
      <button type="button" href="#" onClick={this.props.onNoteDelete}>
        <FaTrash />
      </button>
    );
  }
}

export default Delete;
