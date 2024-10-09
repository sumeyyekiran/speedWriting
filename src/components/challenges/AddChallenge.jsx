import React, { useState, useContext, useEffect } from "react";
import { ChallengeContext } from "../../contexts/ChallengeContext";
import { ThemeContext } from "../../contexts/ThemeContext";
const initState = {
  text: "",
  difficulty: "",
};
const AddChallenge = () => {
  const [challenge, setChallenge] = useState(initState);

 // const [deneme, setName] = useState({name:''});

  const { addChallenge } = useContext(ChallengeContext);
  const theme = useContext(ThemeContext).getTheme();

  const changeHandler = (e) => {
    setChallenge({
      ...challenge,
      [e.target.name]: e.target.value,
    });
  };  
  const submitHandler = (e) => {
    e.preventDefault();
    addChallenge(challenge);
    setChallenge(initState);
  };

  //useEffect(()=>{},[deneme])

  return (
    <div className={`card text-center ${theme.card} border`}>
      <div className="card-header">
        <h4>Metin Ekle</h4>
      </div>
      <div className="card-body">
        <form onSubmit={submitHandler}>
          <div className="form-group mb-3">
            <label htmlFor="text" className="mb-3">
              Metin
            </label>
            <input
              type="text"
              onChange={changeHandler}
              name="text"
              className="form-control"
              autoComplete="false"
              placeholder="Metni Giriniz"
              value={challenge.text}
            ></input>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="difficulty" className="mb-3">
              Zorluk:{" "}
            </label>
            <select
              required
              value={challenge.difficulty}
              onChange={changeHandler}
              className="form-control"
              name="difficulty"
              id="difficulty"
            >
              <option value="">Seçiniz</option>
              <option value="easy">Kolay</option>
              <option value="medium">Normal</option>
              <option value="hard">Zor</option>
            </select>
          </div>
          <button type="submit" className="btn btn-outline-success btn-block">
            Kaydet
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddChallenge;
