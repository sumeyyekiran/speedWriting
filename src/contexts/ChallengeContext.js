import React, { createContext, useState, useReducer, useEffect } from "react";
import { challengeReducer } from "../reducers/ChallengeReducer";

export const ChallengeContext = createContext();
const initState = {
  challenges: [
    {
      id: 1,
      text: "Hepimiz biraz deliyiz.",
      difficulty: "easy",
    },

    {
      id: 2,
      text: "Hayat, yaptıklarınla değil, yaptıklarınla başkalarına dokunarak anlam kazanır.",
      difficulty: "medium",
    },
    {
      id: 3,
      text: "Düşmanlarına karşı savaşmak zorundasın ama asıl savaş, kendinle. İçindeki karanlıkla yüzleşip, onu alt edebilmek için güçlü olmalısın.",
      difficulty: "hard",
    },
  ],
  selected: 1,
  index: 5,
};
const initResult = [];

const ChallengeContextProvider = (props) => {
  const [state, dispatch] = useReducer(challengeReducer, initState, () => {
    const data = localStorage.getItem("challenges");
    return data ? JSON.parse(data) : initState;
  });
  //const [state, setChallenges] = useState(initState);
  const data = localStorage.getItem("results");

  let cleanedData = "";
  if (data) {
    cleanedData = data.replace(/\\+/g, "");
    cleanedData = cleanedData.replace(/^"+|"+$/g, "");
  } else {
    cleanedData = JSON.stringify(initResult);
  }

  const parsedResults = cleanedData ? JSON.parse(cleanedData) : initResult;
  const [results, setResults] = useState(parsedResults);

  // const addChallenge = (challenge) => {
  //     let id = state.index;
  //     const newChallenge = { ...challenge, id }
  //     setChallenges({
  //         ...state,
  //         challenges: [...state.challenges, newChallenge],
  //         index: id + 1
  //     })
  // }
  // const setSelected = (id) => {
  //     setChallenges({
  //         ...state,
  //         selected: id
  //     })
  // }

  useEffect(() => {
    localStorage.setItem("challenges", JSON.stringify(state));
  }, [state]);
  useEffect(() => {
    localStorage.setItem("results", JSON.stringify(results));
  }, [results]);

  const addResult = (result) => {
    setResults([...results, result]);
  };

  return (
    <ChallengeContext.Provider
      value={{ ...state, results: [...results], dispatch, addResult }}
    >
      {props.children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeContextProvider;
