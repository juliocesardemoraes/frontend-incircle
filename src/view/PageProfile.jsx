import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import NavHComponent from "./navbarhori";
import navCompraComponent from "./navbarComprador";
import AdmimTabela from "./AdminTabela";
import Profile from "./Profile";

export default function PageProfile() {
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
            <div className="row margem_anuncios">
              <Profile></Profile>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
