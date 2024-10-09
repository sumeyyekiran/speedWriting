import React, { Component, createContext, useState } from "react";

export const ChallengeContext = createContext();
const initState = {
  challenges: [
    {
      id: 1,
      text: "İnsanlar, hatıraları ve duygularıyla bir yerlere aittir.",
      difficulty: "easy",
    },
    {
      id: 2,
      text: "Bizi güçlü yapan yediklerimiz değil, yenemeyeceklerimizdir.",
      difficulty: "medium",
    },
    {
      id: 3,
      text: "Kader, insanın eylemlerine karıştığı sürece var olur. Bir kader var mı, yok mu, insan ancak onunla karşılaştığında öğrenir.",
      difficulty: "hard",
    },
    {
      id: 4,
      text: "Sonsuzluğun kıyısında bir gecede, zamanla ölüm arasında sıkışıp kalmış bir hayal misali, yaşamın en büyük trajedisine kapıldım.",
      difficulty: "hard",
    },
  ],
  selected: 1,
  index: 5,
};
const initResult = {
  results: [
    {
      id: 1,
      challengeId: 2,
      scores: { duration: 2.5, accuracy: 83, wordPerMinute: 55 },
    },
  ],
};
const ChallengeContextProvider = (props) => {
  const [state, setChallenges] = useState(initState);
  const [results, setResults] = useState(initResult);

  const addChallenge = (challenge) => {
    let id = state.index;
    const newChallenge = { ...challenge, id };
    setChallenges({
      ...state,
      challenges: [...state.challenges, newChallenge],
      index: id + 1,
    });
  };
  const setSelected = (id) => {
    setChallenges({
      ...state,
      selected: id,
    });
  };

  return (
    <ChallengeContext.Provider
      value={{
        ...state,
        ...results,
        addChallenge: addChallenge,
        setSelected: setSelected,
      }}
    >
      {props.children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeContextProvider;
