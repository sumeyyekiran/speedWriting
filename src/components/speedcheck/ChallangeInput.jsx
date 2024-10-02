import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

const initialState = {
  entry: "",
  isDisabled: false,
};

class ChallangeInput extends Component {
  challange = this.props.challange;
  state = initialState;
  keyMap = [];
  changeHandler = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  resetState = () => {
    this.setState(initialState);
  };

  keyDownHandler = (e) => {
    this.keyMap[e.keyCode] = e.type === "keydown";
    if(this.keyMap[17] && this.keyMap[13]){
      this.setState({
        ...this.state,
        isDisabled: true
      })
    }
  };

  keyUpHandler = (e) => {
    this.keyMap = [];
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyDownHandler);
    document.addEventListener("keyup", this.keyUpHandler);
  }

  render() {
    const { entry, isDisabled } = this.state;

    return (
      <div className="input-group mb-3">
        <input
          type="text"
          name="entry"
          onChange={this.changeHandler}
          value={entry}
          className="form-control"
          disabled={isDisabled}
          placeholder="Metni giriniz."
        />
        <button
          className="btn btn-outline-secondary"
          onClick={this.resetState}
          type="button"
          id="reset"
        >
          Sıfırla
        </button>
      </div>
    );
  }
}

export default ChallangeInput;
