import React, { Component } from "react";
class Add extends Component {
  state = {};
  render() {
    return (
      <div className="textarea">
        <div className="button">
          <button className="add" onClick={this.props.onTextAdd}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Add;
