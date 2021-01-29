import React, { Component } from "react";
import { GoPlus } from "react-icons/go";

class LabelFunction extends Component {
 constructor(props) {
   super(props)
   this.state = {value: props.label, isInEditMode: false};
   console.log(this.state)
   console.log(props)
 }


 labelButton = () => {
   return <button className="note-buttons" onClick={this.labelButtonClicked}><GoPlus /></button>
 }

 labelButtonClicked = () => {
   this.setState({
     value: "",
     isInEditMode: true
   })
 }


changeEditMode = () => {
  this.setState({
    isInEditMode: !this.state.isInEditMode
  })
}

resetButton = () => {
  this.setState({
    value: "",
    isInEditMode: false
    
  })
  this.props.onLabelUpdate("")
}

updateComponentValue = () => {
  const newLabel = this.refs.theTextInput.value
  this.setState({
    isInEditMode: false,
    value: newLabel
  })
  this.props.onLabelUpdate(newLabel)
}

renderEditView = () => {
  return <div style={{position: "absolute"}}>
  <input type="text"
  size="23"
  maxLength="14"
  placeholder="Type in a label"
  defaultValue={this.state.value}
  ref="theTextInput" />
  <button onClick={this.updateComponentValue}>✓</button>
  <button onClick={this.resetButton}>✘</button>

</div>
}

renderDefaultView = () => {
  return <div className="defaultView" onClick={this.changeEditMode}> 
  {this.state.value}
  </div>
}


 
 render() {
   return this.state.isInEditMode ?
   this.renderEditView() :
   this.state.value === "" ?
   this.labelButton() :
   this.renderDefaultView()
   
 }
}





export default LabelFunction;
