import React, { Component } from "react";
class Textarea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="textarea">
        <div className="notes">
          <textarea
            className="text"
            placeholder="Enter text here"
            text-align="center"
          ></textarea>
        </div>
      </div>
    );
  }
}

export default Textarea;
