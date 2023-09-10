import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";
import coinimg from "../img/coin.svg";
import coincashimg from "../img/cash-coin.svg";
import unionimg from "../img/Union.svg";
import { useAtom } from "jotai";
import { actualContract } from "../store/store";
import axios from "axios";

export default function MetodoPagamento() {
  const [currentContract] = useAtom(actualContract);
  const navigate = useNavigate();

  const updateContract = async () => {
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/contract/update`;
    try {
      const res = await axios.put(url, {
        contractID: currentContract.contractId,
        offerOfferId: currentContract.offerOfferId,
        status: "pago",
      });
      if (res.status === 200) navigate("/minhasCompras");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid py-4" id="pagamento">
      <div className="card shadow-lg mx-4 card-profile-bottom">
        <h5 className="text-center titulo_pagar">
          Qual é a forma de pagamento?
        </h5>
        <div className="card-body d-flex caixa">
          <div className="pagar d-flex">
            <div className="pagamento">
              <div
                className="borda d-flex justify-content-center"
                onClick={() => {
                  updateContract();
                }}
              >
                <img src={coinimg} alt="" />
              </div>
              <h6 className="text-center">Pague agora</h6>
            </div>
          </div>
          <div className="pagar d-flex">
            <div className="pagamento">
              <div
                className="borda d-flex justify-content-center"
                onClick={() => {
                  updateContract();
                }}
              >
                <img src={coincashimg} alt="" />
              </div>
              <h6 className="text-center">Pague depois</h6>
            </div>
          </div>
          <div className="pagar d-flex">
            <div className="pagamento">
              <div
                className="borda d-flex justify-content-center"
                onClick={() => {
                  updateContract();
                }}
              >
                <img src={unionimg} alt="" />
              </div>
              <h6 className="text-center">Cartão de Débito</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
