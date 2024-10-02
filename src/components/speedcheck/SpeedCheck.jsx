import React, { Component } from "react";
import "../../index.css";
import Info from "./info";
import ChallangeInput from "./ChallangeInput";
import Score from "./Score";


class SpeedCheck extends Component {
  state = {};
  challange = "Hello React";
  render() {
    return (
      <React.Fragment>
        <Info challange={this.challange}/>
        <hr />
        <ChallangeInput challange={this.challange}/>
        <hr />
       <Score />
      </React.Fragment>
    );
  }
}

export default SpeedCheck;
