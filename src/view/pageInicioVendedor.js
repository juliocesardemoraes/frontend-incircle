import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import navHComponent from "./navbarhori";
import navVendaComponent from "./navbarVendedor";
import meusAnuncios from "./meusAnuncios";
import minhasVendas from "./minhasVendas";

export default function inicioVendedor() {
  return (
    <div className="g-sidenav-show  bg-gray-100">
      <div
        id="gradiente"
        className="min-height-300 bg-primary position-absolute w-100"
      ></div>
      {navVendaComponent()}
      <main class="main-content position-relative border-radius-lg ">
        {navHComponent()}
        <div class="container-fluid py-4">
          <div class="row index-ultimos-anuncios">
            <div class="col-12">
              <div class="card mb-4 row">
                <div class="card-header pb-0 p-3">
                  <div class="row">
                    <div class="col-6 d-flex align-items-center">
                      <h6 class="mb-0">Meus anúncios</h6>
                    </div>
                    <div class="col-6 text-end">
                      <Link
                        to="/novoAnuncio"
                        class="btn bg-gradient-dark mb-0 btn-color"
                      >
                        <i class="fas fa-plus"></i>&nbsp;&nbsp;Novo Anúncio
                      </Link>
                    </div>
                  </div>
                  <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">{meusAnuncios()}</div>
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
