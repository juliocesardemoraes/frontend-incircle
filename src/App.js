import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./view/login";
import FormRegistro from "./view/formRegistro";
import FimRegistro from "./view/fimRegistro";
import Comprador from "./view/pageInicioComprador";
import Vendedor from "./view/InicioVendedor";
import NovoAnuncio from "./view/pageNovoAnuncio";
import MinhasVendas from "./view/pageMinhasVendas";
import MinhasCompras from "./view/pageMinhasCompras";
import ContratoComprador from "./view/pageContratosComprador";
import PageMetodoPagamento from "./view/PageMetodoPagamento";
import PageContratosVendedor from "./view/pageContratosVendedor";
import PageInicioAdmin from "./view/pageInicioAdmin";
import EditarAnuncio from "./view/pageEditarAnuncio";
import ProtectedRouter from "./view/ProtectedRoute";
import { useAtom } from "jotai";
import { userLoggedIn } from "./store/store";

function App() {
  const [, setUser] = useAtom(userLoggedIn);

  useEffect(() => {
    let data = sessionStorage.getItem("user");
    const user = JSON.parse(data);
    setUser(user);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/formRegistro" element={<FormRegistro />} />
          <Route path="/fimRegistro" element={<FimRegistro />} />

          <Route element={<ProtectedRouter userType={"vendedor"} />}>
            <Route path="/vendedor" element={<Vendedor />} />
            <Route path="/novoAnuncio" element={<NovoAnuncio />} />
            <Route path="/editarAnuncio" element={<EditarAnuncio />} />
            <Route path="/minhasVendas" element={<MinhasVendas />} />
            <Route
              path="/contratoVendedor"
              element={<PageContratosVendedor />}
            />
          </Route>
          <Route element={<ProtectedRouter userType={"comprador"} />}>
            <Route path="/comprador" element={<Comprador />} />
            <Route path="/minhasCompras" element={<MinhasCompras />} />
            <Route path="/contratoComprador" element={<ContratoComprador />} />
            <Route
              path="/pageMetodoPagamento"
              element={<PageMetodoPagamento />}
            />
          </Route>
          <Route element={<ProtectedRouter userType={"admin"} />}>
            <Route path="/Admin" element={<PageInicioAdmin />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
