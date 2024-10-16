import React, { Component } from "react";
import "../../index.css";
import Info from "./info";
import ChallengeInput from "./ChallangeInput";
import Score from "./Score";
import SelectChallenge from "./SelectChallenge";

const initState = {
  result: null,
};
class SpeedCheck extends Component {
  state = initState;

  setResult = (result) => {
    this.setState({
      result,
    });
  };

  render() {
    const { result } = this.state;
    return (
      <React.Fragment>
        <SelectChallenge />
        <hr />
        <Info />
        <hr />
        <ChallengeInput setResult={this.setResult} />
        <hr />
        {result !== null ? <Score values={this.state.result} /> : ""}
      </React.Fragment>
    );
  }
}

export default SpeedCheck;
