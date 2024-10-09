import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ChallengeContext } from "../../contexts/ChallengeContext";

const ChallengeList = () => {
  const theme = useContext(ThemeContext).getTheme();
  const { challenges } = useContext(ChallengeContext);
  const challengeRows = challenges.map((c) => {
    return (
      <tr key={c.id}>
        <td>{c.id}</td>
        <td>{c.text}</td>
        <td>{c.difficulty}</td>
      </tr>
    );
  });
  return (
    <div className={`card text-center ${theme.card} border`}>
      <div className="card-header">
        <h4>Metinler</h4>
      </div>
      <div className="card-body p-1">
        <table className={`table ${theme.table} table-hover table-stripped m0`}>
          <thead>
            <tr>
              <th>id</th>
              <th>Metin</th>
              <th>Zorluk</th>
            </tr>
          </thead>
          <tbody>{challengeRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ChallengeList;
