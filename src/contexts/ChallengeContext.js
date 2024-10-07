import React, { Component, createContext } from "react";

export const ChallengeContext = createContext();
const initState = {
  challenges: [
    {
      id: 1,
      text: "İnsanlar, hatıraları ve duygularıyla bir yerlere aittir.",
      difficulty: "easy",
    },
    {
      id: 1,
      text: "Bizi güçlü yapan yediklerimiz değil, yenemeyeceklerimizdir.",
      difficulty: "medium",
    },
    {
      id: 1,
      text: "Kader, insanın eylemlerine karıştığı sürece var olur. Bir kader var mı, yok mu, insan ancak onunla karşılaştığında öğrenir.",
      difficulty: "hard",
    },
    {
      id: 1,
      text: "SSonsuzluğun kıyısında bir gecede, zamanla ölüm arasında sıkışıp kalmış bir hayal misali, yaşamın en büyük trajedisine kapıldım.",
      difficulty: "hard",
    },
  ],
  selected: 1,
};
class ChallengeContextProvider extends Component {
  state = initState;
  render() {
    return (
      <ChallengeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ChallengeContext.Provider>
    );
  }
}

export default ChallengeContextProvider;
