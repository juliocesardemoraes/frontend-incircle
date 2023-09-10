import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

export default function EditarAnuncioComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const data = JSON.parse(searchParams.get("data"));
  const [campQuantity, setcampQuantity] = useState(data.quantity || "");
  const [campEnergy, setcampEnergy] = useState(data.priceEnergy || "");
  const [campPrice, setcampPrice] = useState(data.totalPrice || "");

  const navigate = useNavigate();

  /*
        updateDate: updateDate,
  */

  async function SendSave() {
    if (campQuantity === 0) {
      alert("Escolha a quantidade vendida.");
    } else if (campEnergy === 0) {
      alert("Escolha o preço por kw.");
    } else if (campPrice === "") {
      alert("Escolha o preço total.");
    } else {
      const baseUrl = `${process.env.REACT_APP_BACKEND_HOST_URL}/offer/update`;
      const datapost = {
        quantity: campQuantity,
        priceEnergy: campEnergy,
        totalPrice: campPrice,
        id: data.offerId,
      };
      const request = await axios
        .put(baseUrl, datapost)
        .then((response) => {
          if (response.data.success == true) {
            alert(response.data.message);
            navigate("/vendedor");
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          alert("Error 34 " + error);
        });
    }
  }

  return (
    <div className="col-xl-6 col-md-7 d-flex flex-column mx-auto criar">
      <div className="container-fluid py-4 form">
        <div className="card shadow-lg mx-4 form-card-padding">
          <h4 className="text-center font-weight-bolder">Editar Anúncio</h4>
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

              <button
                onClick={async (event) => {
                  event.preventDefault();
                  await SendSave();
                }}
                className="btn btn-primary"
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
