import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import relogioimg from "../img/relógio.png";

export default function anunciosComp() {
  return (
    <div className="col anuncio_margem">
      <div className="card">
        <div className="d-flex justify-content-end align-items-center">
          <div className="tempo d-flex justify-content-between">
            <img src={relogioimg} alt="" className="relogio" />
            <p>07h:35 min</p>
          </div>
        </div>

        <div className="card-body comprar4 ">
          <div className="d-flex align-items-center cabecalho">
            <img src="assets/img/team-3.jpg" alt="" />
            <h6>Luís Almeida</h6>
          </div>

          <p className="card-text">Energia limpa e sustentável para todos.</p>
          <p className="card-text">
            <strong>Quantidade:</strong> 400KW
          </p>
          <div className="d-flex block1 p-2 align-items-center comprar justify-content-between">
            <div>
              <h5>€ 0,1315</h5>
            </div>
            <div className="botoes_comprar">
              <img src="assets/img/favoritos.png" alt="" />
              <a href="#" className="btn btn-primary">
                COMPRAR
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
