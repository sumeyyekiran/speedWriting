import React from "react";

const Score = (props) =>
{
  const {duration, accuracy, wordsPerMinute} = props.score;
    return (
        <div className="card-deck" style={{ display: "flex", width: "100%" }}>
        <div
          className="card speedCheckCardStyle"
        >
          <div className="card-body">Süre: {duration}</div>
        </div>
        <div
          className="card speedCheckCardStyle"
        >
          <div className="card-body">Doğruluk: {accuracy}</div>
        </div>
        <div className="card speedCheckCardStyle">
          <div className="card-body">DBK: {wordsPerMinute}</div>
        </div>
      </div>
    );
}

export default Score;
