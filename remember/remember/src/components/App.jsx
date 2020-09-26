import React, { Component } from "react";
import Remember from "./Remember";
import TextAdd from "./TextAdd";
import Notes from "./Notes";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { getNotes } from "../services/NotesService";
import { addNote } from "../services/NotesService";
import { deleteNote } from "../services/NotesService";
import { archiveNote } from "../services/NotesService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }

  componentDidMount() {
    getNotes().then((notes) => this.setState({ notes: notes }));
  }

  onNoteAdd = (noteText) => {
    console.log(noteText);
    const notesNew = [{ name: noteText }, ...this.state.notes];
    console.log(this.state.notes);

    this.setState({ notes: notesNew });
    console.log(notesNew);
    addNote(noteText);
  };

  onNoteDelete = (noteID) => {
    const notesNew = this.state.notes.filter((note) => note._id !== noteID);
    this.setState({ notes: notesNew });
    deleteNote(noteID);
  };

  onNoteArchive = (noteID) => {
    const notesNew = this.state.notes.filter((note) => note._id !== noteID);
    this.setState({ notes: notesNew });
    archiveNote(noteID);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Remember />
        <TextAdd onNoteAdd={this.onNoteAdd} />
        <Notes
          notesProp={this.state.notes}
          onNoteDelete={this.onNoteDelete}
          onNoteArchive={this.onNoteArchive}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
