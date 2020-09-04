import React, { Component } from "react";
import Textarea from "./Textarea";
import Add from "./Add";
import Notes from "./Notes";
class TextAdd extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="textarea">
        <Textarea />
        <Add />
      </div>
    );
  }
}

export default TextAdd;
