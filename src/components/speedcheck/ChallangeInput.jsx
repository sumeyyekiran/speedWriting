import React, { Component } from "react";

const initialState = {
  entry: '',
  isDisabled: false,
  start: null,
  end: null
}

class ChallangeInput extends Component {
  challange = this.props.challange;
  state = initialState;
  keyMap = [];
  changeHandler = (e) => {
    let {start} = this.state;
    if(start === null){
      start = new Date().getTime();
    }
    if(e.target.value === ''){
      this.resetState();
    }else if(this.challange.length + 1 <= e.target.value.length){
//işleme devam et
    }else{
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
        start,
      });
    }
  };

  resetState = () => {
    this.setState(initialState);
  };

  keyDownHandler = (e) => {
    this.keyMap[e.keyCode] = e.type === "keydown";
    if (this.keyMap[17] && this.keyMap[13]) {
      this.setState({
        ...this.state,
        isDisabled: true,
        end: new Date().getTime()
      }, () => {
        // `setState` sonrası `checkEntry` fonksiyonunu çağırıyoruz
        this.checkEntry();
      });
    }
  }

  checkEntry = () => {
    const {entry, end, start} = this.state;
    let sum = 0;
    const arr_challange = this.challange.split(' ');
    const arr_entry = entry.split(' ');
    arr_challange.forEach((c,i) => {
      for (let j = 0; j < c.length; j++) {
        if(arr_entry[i] && c[j] === arr_entry[i][j]){
           sum = sum + 1;
        }
      }
    });
    sum = sum + arr_entry.length - 1;
    let accuracy = (sum * 100 / this.challange.length) ;
    let duration = (end - start) / 1000;
    let wordsPerMinute = (entry.length * 60) / (6 * duration);
    const result = {
      duration, accuracy, wordsPerMinute
    }

    this.props.setResult(result);
  }

  keyUpHandler = () => {
    this.keyMap = [];
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyDownHandler);
    document.addEventListener("keyup", this.keyUpHandler);
}
componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownHandler);
    document.removeEventListener("keyup", this.keyUpHandler);
}

  render() {
    const { entry, isDisabled } = this.state;
    return (
        <React.Fragment>
          <div className="input-group mb-3">
            <input type="text" name="entry" value={entry} disabled={isDisabled} onChange={this.changeHandler} className="form-control" placeholder="Metni giriniz" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={this.resetState} type="button" id="reset">sıfırla</button>
            </div>
        </div>
        <small className="text-muted">{`${this.challange.length - entry.length} / ${this.challange.length}`}</small>
        </React.Fragment>
    );
}
}

export default ChallangeInput;
