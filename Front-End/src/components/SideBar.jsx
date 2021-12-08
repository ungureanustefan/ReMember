import React, { Component } from 'react';
import Archived from "./Archived";
import Labels from "./Labels";
import { MdMenu } from "react-icons/md";
import Note from "./Note";


class SideBar extends Component {

      constructor(props) {
        super(props);
        this.state = {
          sidebarOpen : false
        };
      }
      onSidebarOpen = () => {
        this.setState({sidebarOpen: true});
      }

      onXButton = () => {
          this.setState({sidebarOpen: false})
      }

      renderSidebar = () => {
          return <div className="sidepanel">
 <div style={{transform: "translate(-45px, -5px)"}}>
 <a href="#" onClick={this.onXButton} style={{color:"black", textDecoration:"none", fontSize:"16px"}}>╳</a>
 <h1 style={{color: "black", float:"right", transform: "translate(-80px, -20px)"}}>Options</h1>
 </div>
 <h3 className="filters">Filters</h3>

  <Archived onToggleArchived={this.props.onToggleArchived} />
  <Labels />
</div>
      }

      menuBar = () => {
        return <div style={{marginLeft: "40px", marginTop:"17px"}}>
              <button onClick={this.onSidebarOpen} style={{backgroundColor:"white", border:"0"}}>
                  <MdMenu style={{ height: "25px", width: "25px"}} />
              </button>
                  </div>

      }

      render() {
        return this.state.sidebarOpen ?
          this.renderSidebar() :
          this.menuBar()
      }
}
 
export default SideBar;