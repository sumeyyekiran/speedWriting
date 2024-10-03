import React, { Component } from "react";
import "../../index.css";
import Info from "./info";
import ChallangeInput from "./ChallangeInput";
import Score from "./Score";
const initState = {
  result: null
}

class SpeedCheck extends Component {
  state = initState;

  setResult = (result) => {
    this.setState({result})
  }

  challange = "Hello React";
  render() {
    const {result} = this.state;
    return (
      <React.Fragment>
        <Info challange={this.challange}/>
        <hr />
        <ChallangeInput challange={this.challange} setResult={this.setResult}/>
        <hr />
       {result !== null ? <Score score={this.state.result} /> : ""}
      </React.Fragment>
    );
  }
}

export default SpeedCheck;
