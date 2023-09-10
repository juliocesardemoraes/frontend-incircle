import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavHComponent from "./navbarhori";
import navCompraComponent from "./navbarComprador";
import MetodoPagamento from "./MetodoPagamento";

export default function PageMetodoPagamento() {
  return (
    <div className="g-sidenav-show   bg-gray-100">
      <div
        id="gradiente"
        className="min-height-300 bg-primary position-absolute w-100"
      ></div>
      {navCompraComponent()}
      <main class="main-content position-relative border-radius-lg ">
        <NavHComponent></NavHComponent>
        <div class="container-fluid py-4">
          <div class="row index-ultimos-anuncios">
            <MetodoPagamento></MetodoPagamento>
          </div>
        </div>
      </main>
    </div>
  );
}
