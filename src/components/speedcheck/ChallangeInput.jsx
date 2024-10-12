import React, { useState, useContext, useEffect } from "react";
import { ChallengeContext } from "../../contexts/ChallengeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const initialState = {
  entry: "",
  isDisabled: false,
  start: null,
  end: null,
};
const ChallengeInput = (props) => {
  const { challenges, selected } = useContext(ChallengeContext);
  const challenge = challenges.find((c) => c.id === selected).text;

  const [state, setState] = useState(initialState);
  let keyMap = [];
  const changeHandler = (e) => {
    let { start } = state;
    if (start === null) {
      start = new Date().getTime();
    }
    if (e.target.value === "") {
      resetState();
    } else if (challenge.length + 1 <= e.target.value.length) {
      stopAndCheck();
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        start,
      });
    }
  };

  const resetState = () => {
    setState(initialState);
    props.setResult(null);
  };
  const checkEntry = (entry, end, start) => {
    let sum = 0;
    const arr_challenge = challenge.split(" ");
    const arr_entry = entry.split(" ");
    arr_challenge.forEach((c, i) => {
      for (let j = 0; j < c.length; j++) {
        if (arr_entry[i] && c[j] === arr_entry[i][j]) {
          sum = sum + 1;
        }
      }
    });
    sum = sum + arr_entry.length - 1;
    let accuracy = (sum * 100) / challenge.length;
    let duration = (end - start) / 1000;
    let wordsPerMinute = (entry.length * 60) / (6 * duration);

    return {
      duration,
      accuracy,
      wordsPerMinute,
    };
  };

  const stopAndCheck = () => {
    if (state.entry !== "") {
      let end = new Date().getTime();
      const { entry, start } = state;
      const result = checkEntry(entry, end, start);
      props.setResult(result);
      setState({
        ...state,
        isDisabled: true,
        end,
      });
    } else {
      alert("Nope, önce bir şeyler yaz istersen. ;)");
    }
  };

  const keyDownHandler = (e) => {
    keyMap[e.keyCode] = e.type === "keydown";
    if (keyMap[17] && keyMap[13]) {
      stopAndCheck();
    }
  };

  const keyUphandler = () => {
    keyMap = [];
  };
  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUphandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUphandler);
    };
  });
  // componentDidMount() {
  //     document.addEventListener("keydown", keyDownHandler);
  //     document.addEventListener("keyup", keyUphandler);
  // }
  // componentWillUnmount() {
  //     document.removeEventListener("keydown", keyDownHandler);
  //     document.removeEventListener("keyup", keyUphandler);
  // }
  const pasteHandler = (e) => {
    e.preventDefault();
    alert("Biz burada böyle şeyler yapmayız!!!");
  };
  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <input
          type="text"
          name="entry"
          autoComplete="off"
          onPaste={pasteHandler}
          value={state.entry}
          disabled={state.isDisabled}
          onChange={changeHandler}
          className="form-control"
          placeholder="Yazmaya başladığınızda süreniz başlayacak."
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-info rounded-right"
            onClick={resetState}
            type="button"
            id="reset"
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <br />
      </div>
      <small className="text-muted">{`${challenge.length - state.entry.length} / ${challenge.length}`}</small>
    </React.Fragment>
  );
};

export default ChallengeInput;
