import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import relogioimg from '../img/relógio.png'



export default function anunciosComp() {
    return (
        
            <div className="col anuncio_margem">
                <div class="card">
                    <div class="d-flex justify-content-end align-items-center">
                        <div class="tempo d-flex justify-content-between">
                            <img src={relogioimg} alt="" class="relogio" />
                            <p>07h:35 min</p>
                        </div>
                    </div>

                    <div class="card-body comprar4 ">
                        <div class="d-flex align-items-center cabecalho" >
                            <img src="assets/img/team-3.jpg" alt="" />
                            <h6>Luís Almeida</h6>
                        </div>


                        <p class="card-text">Energia limpa e sustentável para todos.</p>
                        <p class="card-text"><strong>Quantidade:</strong> 400KW</p>
                        <div class="d-flex block1 p-2 align-items-center comprar justify-content-between">
                            <div>
                                <h5>€ 0,1315</h5>
                            </div>
                            <div class="botoes_comprar">
                                <img src="assets/img/favoritos.png" alt="" />
                                <a href="#" class="btn btn-primary">COMPRAR</a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            
    );
};

