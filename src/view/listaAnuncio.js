import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import relogioimg from "../img/relógio.png";
import favoritos from "../img/favoritos.png";
import fotoT3 from "../img/team-3.jpg";
import { useAtom } from "jotai";
import { userLoggedIn } from "../store/store";

export default function ListComponent() {
  const [dataOffer, setdataOffer] = useState([]);
  const [currentUser] = useAtom(userLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    LoadOffer();
  }, []);

  function LoadOffer() {
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/offer/list`;
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataOffer(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  const createContract = async (e, data) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/contract/create`;

    try {
      const res = await axios.post(url, {
        offerId: data.offerId,
        sellerId: data.UserUserId,
        buyerId: currentUser.userId,
      });
      if (res) {
        navigate("/contratoComprador");
      }
    } catch (error) {
      console.log("ERRROR", error);
    }
  };

  function LoadFillData() {
    return dataOffer.map((data, index) => {
      return (
        <div className="col anuncio_margem" key={index}>
          <div class="card">
            <div class="d-flex justify-content-end align-items-center">
              <div class="tempo d-flex justify-content-between">
                <img src={relogioimg} alt="" class="relogio" />
                <p>{data.publishDate}</p>
              </div>
            </div>

            <div class="card-body comprar4 ">
              <div class="d-flex align-items-center cabecalho">
                <img src={fotoT3} alt="" />
                <h6>{data.User.name}</h6>
              </div>

              <p class="card-text">Energia limpa e sustentável para todos.</p>
              <p class="card-text">
                <strong>Quantidade:</strong> {data.quantity}
              </p>
              <div class="d-flex block1 p-2 align-items-center comprar justify-content-between">
                <div>
                  <h5>{data.totalPrice}</h5>
                </div>
                <div class="botoes_comprar">
                  <img src={favoritos} alt="" />
                  <button
                    onClick={(e) => {
                      createContract(e, data);
                    }}
                    className="btn btn-primary"
                  >
                    COMPRAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return <LoadFillData />;
}
