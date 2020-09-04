import React, { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <footer className="author">
            <h5 className="developer" style={{ fontSize: "15px" }}>
              Developed by Stefan Ungureanu
            </h5>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
