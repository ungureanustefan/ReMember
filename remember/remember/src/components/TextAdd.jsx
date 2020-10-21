import React, { Component } from "react";
import Textarea from "./Textarea";
import Add from "./Add";
import Images from "./Images";
class TextAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { currentText: "" };
  }

  onTextChange = (e) => {
    const text = e.target.value;
    this.setState({ currentText: text });
  };

  onTextAdd = () => {
    this.props.onNoteAdd(this.state.currentText);
    this.setState({ currentText: "" });
  };

  render() {
    return (
      <div className="textarea">
        <Textarea
          onTextChange={this.onTextChange}
          noteText={this.state.currentText}
        />
        <Add onTextAdd={this.onTextAdd} />
        <Images onImgAdd={this.props.onImgAdd} />
      </div>
    );
  }
}

export default TextAdd;
