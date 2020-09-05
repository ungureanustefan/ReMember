import React, { Component } from "react";
import Note from "./Note";
import App from "./App";
import TextAdd from "./TextAdd";
import { getNotes } from "../services/NotesService";

class Notes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const arr = this.props.notesProp;
    const noteArr = arr.map((i) => <Note name={i} />);
    return <ul className="list">{noteArr}</ul>;
  }
}

export default Notes;
