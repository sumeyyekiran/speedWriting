import React, { Component } from "react";

class SpeedCheck extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="card text-center border-info">
          <div className="card-header">
            <h3>Yazma Hızı Testi</h3>
          </div>
          <div class="card-body">
            <p>
              Alttaki metni kutucuğa girmeye başladığınızda süreniz
              başlayacaktır.
            </p>
            <p>Testi bitirmek için 'CTRL + Enter' kombinasyonunu kullanınız.</p>
            <p>
              Ayrıca karakter sınırını aştığınızda test otomatik olarak
              sonlanacaktır.
            </p>
          </div>
          <div className="card-footer">Hello React</div>
        </div>
        <hr />
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Metni giriniz."
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="reset"
          >
            Sıfırla
          </button>
        </div>
        <hr />
        <div className="card-deck" style={{ display: "flex", width: "100%" }}>
          <div
            className="card"
            style={{
              flex: 1,
              margin: "5px",
              backgroundColor: "#f8f9fa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="card-body">Süre:</div>
          </div>
          <div
            className="card"
            style={{
              flex: 1,
              margin: "5px",
              backgroundColor: "#f8f9fa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="card-body">Doğruluk:</div>
          </div>
          <div
            className="card"
            style={{
              flex: 1,
              margin: "5px",
              backgroundColor: "#f8f9fa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="card-body">DBK:</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SpeedCheck;
