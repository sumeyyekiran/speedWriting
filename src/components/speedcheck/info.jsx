import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../index.css";

const Info = (props) => {
    return (
        <div className="card text-center border-info">
          <div className="card-header">
            <h3>Yazma Hızı Testi</h3>
          </div>
          <div className="card-body">
            <p>
              Alttaki metni kutucuğa girmeye başladığınızda süreniz
              başlayacaktır.
            </p>
            <p>Testi bitirmek için <span className="badge badge-secondary">'CTRL + Enter'</span> kombinasyonunu kullanınız.</p>
            <p>
              Ayrıca karakter sınırını aştığınızda test otomatik olarak
              sonlanacaktır.
            </p>
          </div>
          <div className="card-footer">{props.challange}</div>
        </div>
    );
}

export default Info;