import React, { Component } from "react";
import Remember from "./Remember";
import TextAdd from "./TextAdd";
import Notes from "./Notes";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { getNotes } from "../services/NotesService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { names: [] };
    getNotes().then((notes) => this.setState((state) => ({ names: notes })));
  }

  render() {
    return (
      <div>
        <Navbar />
        <Remember />
        <TextAdd />
        <Notes />
        <Footer />
      </div>
    );
  }
}

export default App;
