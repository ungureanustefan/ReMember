import React, { Component } from 'react';
import Archived from "./Archived";
import Labels from "./Labels";
import { MdMenu } from "react-icons/md";


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
  <a href="#" onClick={this.onXButton} style={{marginRight:"90px", color:"black", border:"0", textDecoration:"none"}}>╳</a>
 <h1 style={{color: "black"}}>Options</h1>

  <Archived onToggleArchived={this.props.onToggleArchived} />
  <Labels />
</div>
      }

      menuBar = () => {
        return <div style={{marginLeft: "80px", marginTop:"17px"}}>
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