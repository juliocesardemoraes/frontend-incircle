import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import groupImage from '../img/Group.png';
import groupHome from '../img/Home.svg';
import imageAnuncio from '../img/Meus_Anuncios_pg.svg'
import imageVendas from '../img/Minhas_Vendas_pg.svg'
import imageEstatistica from '../img/Estatisticas_pg.svg'

export default function navCompraComponent() {

    return (    
            <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <Link className="navbar-brand m-0" to="" target="_blank">
                        <img src={groupImage} className="navbar-brand-img h-100" alt="main_logo" />
                    </Link>
                </div>
                <hr className="horizontal dark mt-0" />
                <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                            <Link className="nav-link" to="index.html" target="_blank">
                                <img src={groupHome} className="nav-link-text ms-1 img-logo" alt="Pagina Inícial" />
                                <span className="ms-1 font-weight-bold fs-5"><strong>Início</strong></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/comprador">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <img className="img-logo" src={imageAnuncio} alt="Página para os Meus Anúncios" />
                                </div>
                                <span className="nav-link-text ms-1">Anúncios</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/minhasCompras">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <img className="img-logo" src={imageVendas} alt="Página para as Minhas Vendas" />
                                </div>
                                <span className="nav-link-text ms-1">Minhas Compras</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contratoComprador">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <img className="img-logo" src={imageEstatistica} alt="Página para as Minhas Estatisticas" />
                                </div>
                                <span className="nav-link-text ms-1">Contratos</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    };