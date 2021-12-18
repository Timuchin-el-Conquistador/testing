import React, { Component } from "react";


import { withRouter } from "react-router-dom";




import SidebarContent from "./testSidebarContent";




import classes from "../../assets/css/layout/sidebar.module.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {" "}
          {/*className=''*/}
          {/* <div data-simplebar className="h-100">*/}
          {this.props.type !== "condensed" ? (
            /* <SimpleBar style={{ maxHeight: "100%" }}>*/
            <SidebarContent type={this.props.type}/>
          ) : (
            /*</SimpleBar>*/
            <SidebarContent type={this.props.type}/>
          )}
        </div>
   
          {" "}
    
        {/* </div>*/}
      </React.Fragment>
    );
  }
}


export default withRouter(Sidebar)
