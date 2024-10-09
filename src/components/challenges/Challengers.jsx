import React from "react";
import AddChallenge from "./AddChallenge";
import ChallengeList from "./ChallengeList";

const Challengers = () => {
    return (
        <React.Fragment>
            <AddChallenge></AddChallenge>
            <hr/>
            <ChallengeList></ChallengeList>
        </React.Fragment>
    );
}

export default Challengers;