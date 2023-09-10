import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import NavHComponent from "./navbarhori";
import navVendaComponent from "./navbarVendedor";
import MinhasVendas from "./MinhasVendas";

export default function pageMinhasVendas() {
  return (
    <div className="g-sidenav-show   bg-gray-100">
      <div
        id="gradiente"
        className="min-height-300 bg-primary position-absolute w-100"
      ></div>
      {navVendaComponent()}
      <main class="main-content position-relative border-radius-lg ">
        <NavHComponent></NavHComponent>
        <div class="container-fluid py-4">
          <div class="row index-ultimos-anuncios">
            <MinhasVendas></MinhasVendas>
          </div>
        </div>
      </main>
    </div>
  );
}
