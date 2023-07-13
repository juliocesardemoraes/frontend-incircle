import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import imageFundoTurbo from '../img/energia-eolica-com-fundo-de-turbinas-eolicas 1.jpg';

export default function fimRegistro(){
  return (
    <main className="main-content mt-0">
      <section>
        <div className="page-header min-vh-100" style={{ backgroundImage: `url(${imageFundoTurbo})`}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-7 d-flex flex-column mx-auto">
                <div className="card z-index-0">
                  <div className="card card-plain">
                    <div className="card-header pb-0 text-start">
                      <h4 className="font-weight-bolder text-center">OBRIGADO POR SE REGISTAR!</h4>
                      <p className="mb-0 text-center mt-5">Um e-mail de verificação foi enviado para a sua caixa de entrada.</p>
                    </div>
                    <div className="card-body"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};


