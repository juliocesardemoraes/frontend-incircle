import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import navHComponent from "./navbarhori";
import navVendaComponent from "./navbarVendedor";
import meusAnuncios from "./meusAnuncios";
import minhasVendas from "./minhasVendas";
import { userLoggedIn } from "../store/store";
import { useAtom } from "jotai";

export default function InicioVendedor() {
  return (
    <div className="g-sidenav-show  bg-gray-100">
      <div
        id="gradiente"
        className="min-height-300 bg-primary position-absolute w-100"
      ></div>
      {navVendaComponent()}
      <main className="main-content position-relative border-radius-lg ">
        {navHComponent()}
        <div className="container-fluid py-4">
          <div className="row index-ultimos-anuncios">
            <div className="col-12">
              <div className="card mb-4 row">
                <div className="card-header pb-0 p-3">
                  <div className="row">
                    <div className="col-6 d-flex align-items-center">
                      <h6 className="mb-0">Meus anúncios</h6>
                    </div>
                    <div className="col-6 text-end">
                      <Link
                        to="/novoAnuncio"
                        className="btn bg-gradient-dark mb-0 btn-color"
                      >
                        <i className="fas fa-plus"></i>&nbsp;&nbsp;Novo Anúncio
                      </Link>
                    </div>
                  </div>
                  <div className="card-body px-0 pt-0 pb-2">
                    <div className="table-responsive p-0">{meusAnuncios()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
