import React, { useContext } from "react";
import ScoreCard from "./ScoreCard";
import { ScoreTypes } from "../data/Types";
import { ChallengeContext } from "../../contexts/ChallengeContext";
import { v1 as uuidv1 } from "uuid"; 

const Score = ({ values }) => {
  const { addResult, selected } = useContext(ChallengeContext);
  const clickHandler = () => {
    addResult({
      id: uuidv1(),
      challengeId: selected,
      scores: values,
    });
  };
  return (
    <React.Fragment>
       <div className="score-card-container">
        {Object.entries(values).map(([key, value]) => {
          return <ScoreCard type={ScoreTypes[key]} key={key} value={value} />;
        })}
      </div>
      <button className="btn btn-outline-info btn-block m-2" onClick={clickHandler}>
        Sonucu Kaydet
      </button>
    </React.Fragment>
  );
};

export default Score;
