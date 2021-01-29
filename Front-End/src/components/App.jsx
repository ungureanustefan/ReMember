import React, { Component } from "react";
import Remember from "./Remember";
import TextAdd from "./TextAdd";
import Notes from "./Notes";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideBar from "./SideBar"
import { getNotes } from "../services/NotesService";
import { addTextNote } from "../services/NotesService";
import { deleteNote } from "../services/NotesService";
import { archiveNote } from "../services/NotesService";
import { addImgNote } from "../services/NotesService";
import { labelAdd } from "../services/NotesService"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [], showArchived: false};
  }

  componentDidMount() {
    getNotes().then((notes) => this.setState({ notes: notes }));
  }

  toggleArchived = (e) => {
    this.setState({
      showArchived: !this.state.showArchived,
    });
  };

  componentDidUpdate() {
    console.log(this.state.showArchived);
  }


  onNoteAdd = (noteText) => {
    addTextNote(noteText).then((note) => {
      const notesNew = [note, ...this.state.notes];
      this.setState({ notes: notesNew });
    });
  };
  onImgAdd = (image) => {
    console.log(image);
    addImgNote(image).then((note) => {
      const notesNew = [note, ...this.state.notes];
      this.setState({ notes: notesNew });
    });
  };

  onNoteDelete = (noteID) => {
    const notesNew = this.state.notes.filter((note) => note._id !== noteID);
    this.setState({ notes: notesNew });
    deleteNote(noteID);
  };

  onNoteArchive = (noteID) => {
    const notesNew = this.state.notes;
    notesNew.filter((note) => note._id === noteID)[0].archive = true;
    this.setState({ notes: notesNew });
    archiveNote(noteID);
  };

  onLabelUpdate = (noteID, label) => {
    const notesNew = this.state.notes;
    notesNew.filter((note) => note._id === noteID)[0].label = label
    this.setState({ notes: notesNew});
    labelAdd(noteID, label);
  }

  render() {
    return (
      <div>
        <Navbar onToggleArchived={this.toggleArchived} />
        <Remember />
        <TextAdd onNoteAdd={this.onNoteAdd} onImgAdd={this.onImgAdd} />
        <Notes
          notesProp={this.state.notes}
          onNoteDelete={this.onNoteDelete}
          onNoteArchive={this.onNoteArchive}
          showArchived={this.state.showArchived}
          onLabelUpdate={this.onLabelUpdate}
        />
        <ul id="img"></ul>
        <Footer />
      </div>
    );
  }
}

export default App;
