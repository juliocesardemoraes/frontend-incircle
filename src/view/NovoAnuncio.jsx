import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userLoggedIn } from "../store/store";

export default function NovoAnuncio() {
  const [campQuantity, setcampQuantity] = useState("");
  const [campEnergy, setcampEnergy] = useState("");
  const [campPrice, setcampPrice] = useState("");
  const [userLogged] = useAtom(userLoggedIn);

  const navigate = useNavigate();

  return (
    <div className="col-xl-6 col-md-7 d-flex flex-column mx-auto criar">
      <div className="container-fluid py-4 form">
        <div className="card shadow-lg mx-4 form-card-padding">
          <h4 className="text-center font-weight-bolder">Novo Anúncio</h4>
          <div className="card-body">
            <form>
              <div className="mb-3 text-center">
                <label className="form-label">Quantidade</label>
                <input
                  className="form-control"
                  placeholder="eg. 45"
                  value={campQuantity}
                  onChange={(value) => setcampQuantity(value.target.value)}
                />
              </div>

              <div className="mb-3 text-center">
                <label className="form-label">Preço por kw</label>
                <input
                  className="form-control"
                  placeholder="eg. 45"
                  value={campEnergy}
                  onChange={(value) => setcampEnergy(value.target.value)}
                />
              </div>
              <div className="mb-3 text-center">
                <label className="form-label">Preço</label>
                <input
                  className="form-control"
                  placeholder="eg. 30"
                  value={campPrice}
                  onChange={(value) => setcampPrice(value.target.value)}
                />
              </div>

              <button onClick={(e) => SendSave(e)} className="btn btn-primary">
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  function SendSave(event) {
    event.preventDefault();
    if (campQuantity === 0) {
      alert("Escolha a quantidade vendida.");
    } else if (campEnergy === 0) {
      alert("Escolha o preço por kw.");
    } else if (campPrice === "") {
      alert("Escolha o preço total.");
    } else {
      const baseUrl = `${process.env.REACT_APP_BACKEND_HOST_URL}/offer/create`;
      const datapost = {
        quantity: campQuantity,
        priceEnergy: campEnergy,
        totalPrice: campPrice,
        userId: userLogged.userId,
      };
      axios
        .post(baseUrl, datapost)
        .then((response) => {})
        .catch((error) => {
          alert("Error 34 " + error);
        })
        .finally(() => {
          navigate("/vendedor");
          return;
        });
    }
  }
}
