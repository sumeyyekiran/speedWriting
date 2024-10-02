import React from "react";

const Score = () =>
{
    return (
        <div className="card-deck" style={{ display: "flex", width: "100%" }}>
        <div
          className="card speedCheckCardStyle"
        >
          <div className="card-body">Süre:</div>
        </div>
        <div
          className="card speedCheckCardStyle"
        >
          <div className="card-body">Doğruluk:</div>
        </div>
        <div className="card speedCheckCardStyle">
          <div className="card-body">DBK:</div>
        </div>
      </div>
    );
}

export default Score;
