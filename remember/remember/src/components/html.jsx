import React, { Component } from "react";

class Html extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="flex-container">
          <p style={{ fontSize: "20px" }} className="homepage">
            Home Page
          </p>
          <p style={{ fontSize: "20px" }} className="logging">
            You are not logged in
          </p>
        </div>
        <div className="remember">
          <div className="test">
            <h1 className="re" style={{ paddingLeft: "50px" }}>
              Re:
            </h1>
          </div>
          <div>
            <h1 className="member">Member</h1>
          </div>
        </div>
        <div className="textarea">
          <div className="notes">
            <textarea
              className="text"
              placeholder="Enter text here"
              text-align="center"
            ></textarea>
          </div>

          <div className="button">
            <button className="add">Add</button>
          </div>
        </div>
        {/*Example of notes*/}
        <ul className="list"></ul>
        <div className="page-container">
          <div className="content-wrap">
            <footer className="author">
              <h5 className="developer" style={{ fontSize: "15px" }}>
                Developed by Stefan Ungureanu
              </h5>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Html;
