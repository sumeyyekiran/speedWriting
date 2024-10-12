import React from "react";
import AddChallenge from "./AddChallenge";
import ChallengeList from "./ChallengeList";

const Challengers = () => {
  return (
    <React.Fragment>
      <AddChallenge />
      <hr />
      <ChallengeList />
    </React.Fragment>
  );
};

export default Challengers;
