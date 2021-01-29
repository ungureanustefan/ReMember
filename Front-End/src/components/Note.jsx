import React, { Component } from "react";
import Delete from "./Delete";
import Archive from "./Archive";
import LabelFunction from "./LabelFunction";

class Note extends Component {
  render() {
    return (
      <li id="hovernote">
        <a>
          {this.props.note.name ? (
            <h2>{this.props.note.name}</h2>
          ) : (
            <img src={this.props.note.image} className="image" />
          )}
        </a>
        <div id="hover">
        <div className="span"></div>
        <div className="btn-align">
        <Delete
          onNoteDelete={() => this.props.onNoteDelete(this.props.note._id)}
        />
        <Archive
          onNoteArchive={() => this.props.onNoteArchive(this.props.note._id)}
        />
        <LabelFunction label={this.props.note.label} 
        onLabelUpdate={(label) => this.props.onLabelUpdate(this.props.note._id, label)} />
        </div>
        </div>
        
      </li>
    );
  }
}

export default Note;
