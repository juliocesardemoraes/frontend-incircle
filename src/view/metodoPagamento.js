import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import coinimg from '../img/coin.svg';
import coincashimg from '../img/cash-coin.svg';
import unionimg from '../img/Union.svg';

export default function metodoPagamento(){
    return (
        <div className="container-fluid py-4" id="pagamento">
        <div className="card shadow-lg mx-4 card-profile-bottom">
          <h5 className="text-center titulo_pagar">Qual é a forma de pagamento?</h5>
          <div className="card-body d-flex caixa">
            <div className="pagar d-flex">
              <div className="pagamento">
                <div className="borda d-flex justify-content-center">
                  <img src={coinimg} alt="" />
                </div>
                <h6 className="text-center">Pague agora</h6>
              </div>
            </div>
            <div className="pagar d-flex">
              <div className="pagamento">
                <div className="borda d-flex justify-content-center">
                  <img src={coincashimg} alt="" />
                </div>
                <h6 className="text-center">Pague depois</h6>
              </div>
            </div>
            <div className="pagar d-flex">
              <div className="pagamento">
                <div className="borda d-flex justify-content-center">
                  <img src={unionimg} alt="" />
                </div>
                <h6 className="text-center">Cartão de Débito</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };