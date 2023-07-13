import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./view/login";
import FormRegistro from "./view/formRegistro";
import FimRegistro from "./view/fimRegistro";
import Comprador from "./view/pageInicioComprador";
import Vendedor from "./view/pageInicioVendedor";
import NovoAnuncio from "./view/pageNovoAnuncio";
import MinhasVendas from "./view/pageMinhasVendas";
import MinhasCompras from "./view/pageMinhasCompras";
import ContratoComprador from "./view/pageContratosComprador";
import PageMetodoPagamento from "./view/pageMetodoPagamento";
import PageContratosVendedor from "./view/pageContratosVendedor";
import PageInicioAdmin from "./view/pageInicioAdmin";
import EditarAnuncio from "./view/pageEditarAnuncio";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/formRegistro" element={<FormRegistro />} />
          <Route path="/fimRegistro" element={<FimRegistro />} />
          <Route path="/comprador" element={<Comprador />} />
          <Route path="/vendedor" element={<Vendedor />} />
          <Route path="/novoAnuncio" element={<NovoAnuncio />} />
          <Route path="/editarAnuncio" element={<EditarAnuncio />} />
          <Route path="/minhasVendas" element={<MinhasVendas />} />
          <Route path="/minhasCompras" element={<MinhasCompras />} />
          <Route path="/contratoComprador" element={<ContratoComprador />} />
          <Route
            path="/pageMetodoPagamento"
            element={<PageMetodoPagamento />}
          />
          <Route path="/contratoVendedor" element={<PageContratosVendedor />} />
          <Route path="/Admin" element={<PageInicioAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
