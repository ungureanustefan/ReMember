import React, { Component } from "react";
class Labels extends Component {
  render() {
    return (
      <div className="flex-container">
        <h3 className="homepage">
          <p href="#" className="labels">Labels</p>


          <label className="container-label" style={{fontSize:"17px"}}>Label 1
          <input type="radio" style={{textDecoration: "none"}} />
          <span className="checkmark-label"></span>
          </label>

          
        </h3>
      </div>
    );
  }
}
 
export default Labels;
