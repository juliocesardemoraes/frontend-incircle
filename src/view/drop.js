import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import '../js/argon-dashboard.js';
import '../js/argon-dashboard.js.map'
import '../js/argon-dashboard.min.js'
export default function dropComp() {
    return (
        <div id="gradiente" class="min-height-300 bg-primary position-absolute w-100">
            <div className="fixed-plugin">
                <Link to="/login" className="fixed-plugin-button text-dark position-fixed px-3 py-2">
                    <i className="fa fa-cog py-2"> </i>
                </Link>
                <div className="card shadow-lg card-menu">
                    <div className="card-header pb-0 pt-3 card-menu-header">
                        <div className="float-start">
                            <h5 className="mt-3 mb-0 card-menu-texto">Menu</h5>
                        </div>
                        <div className="float-end mt-4">
                            <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                                <i className="fa fa-close card-menu-texto"></i>
                            </button>
                        </div>
                        {/* End Toggle Button */}
                    </div>
                    <hr className="horizontal dark my-1" />
                    <div className="card-body pt-sm-3 pt-0 overflow-auto">
                        {/* Sidebar Backgrounds */}
                        <div className="d-flex my-3">
                            <img className="img-logo" src="assets/img/Favoritos.svg" alt="Página para os Favoritos" />
                            <h6 className="mb-0 card-menu-texto">Favoritos</h6>
                        </div>
                        <div className="d-flex my-3">
                            <img className="card-menu-img" src="assets/img/Ajuda.svg" alt="Página para Ajuda" />
                            <h6 className="mb-0 card-menu-texto">Ajuda</h6>
                        </div>
                        <div className="d-flex my-3">
                            <img className="card-menu-img" src="assets/img/Termos_Uso.svg" alt="Página para os Termos de Uso" />
                            <h6 className="mb-0 card-menu-texto">Termos de Uso</h6>
                        </div>
                        <div className="d-flex my-3">
                            <img
                                className="card-menu-img"
                                src="assets/img/Mudar_Conta.svg"
                                alt="Página para Mudar de Conta"
                            />
                            <h6 className="mb-0 card-menu-texto">Mudar Conta</h6>
                        </div>
                        <div className="d-flex my-3">
                            <img
                                className="card-menu-img"
                                src="assets/img/Remover_Conta.svg"
                                alt="Página para Remover Conta"
                            />
                            <h6 className="mb-0 card-menu-texto">Remover Conta</h6>
                        </div>
                        <div className="d-flex my-3">
                            <img className="card-menu-img" src="assets/img/Log_Out.svg" alt="Página para fazer Log Out" />
                            <h6 className="mb-0 card-menu-texto">Log Out</h6>
                        </div>
                    </div>
                </div>

                <script src="./js/core/popper.min.js"></script>
                <script src="./js/core/bootstrap.min.js"></script>
                <script src="./js/plugins/perfect-scrollbar.min.js"></script>
                <script src="./js/plugins/smooth-scrollbar.min.js"></script>
                <script src="./js/plugins/chartjs.min.js"></script>
               
            </div>
        </div>
    );
};