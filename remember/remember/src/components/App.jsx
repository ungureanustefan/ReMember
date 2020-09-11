import React, { Component } from "react";
import Remember from "./Remember";
import TextAdd from "./TextAdd";
import Notes from "./Notes";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { getNotes } from "../services/NotesService";
import { addNote } from "../services/NotesService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { names: [] };
    getNotes().then((notes) => this.setState({ names: notes }));
  }

  onNoteAdd = (noteText) => {
    const notesNew = [noteText, ...this.state.names];
    this.setState({ names: notesNew });
    addNote(noteText);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Remember />
        <TextAdd onNoteAdd={this.onNoteAdd} />
        <Notes notesProp={this.state.names} />
        <Footer />
      </div>
    );
  }
}

export default App;
