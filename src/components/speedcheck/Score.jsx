import React from "react";
import ScoreCard from "./ScoreCard";
import { ScoreTypes } from "../data/Types";

const Score = ({ values }) => {
  return (
    <div className="container">
      <div className="row">
        {Object.entries(values).map(([key, value]) => {
          return (
            <div className="col-md-4" key={key}>
              <ScoreCard type={ScoreTypes[key]} key={key} value={value} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Score;
