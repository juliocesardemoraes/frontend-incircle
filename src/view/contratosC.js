import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import imagemana from "../img/ana-soares.png";
import axios from "axios";
import { useAtom } from "jotai";
import { userLoggedIn, actualContract } from "../store/store";

export default function ContratosComp() {
  const [contracts, setContracts] = useState([]);
  const [currentUser] = useAtom(userLoggedIn);
  const [, setActualContractId] = useAtom(actualContract);

  const handleContractId = (contractId, offerOfferId) => {
    setActualContractId({ contractId: contractId, offerOfferId: offerOfferId });
  };

  useEffect(() => {
    if (!currentUser) return;

    const fetchContracts = async () => {
      try {
        const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/contract/list`;

        const res = await axios.get(url, {
          params: { buyerId: currentUser.userId },
        });

        if (res.status === 200) {
          setContracts(res.data.data);
        } else {
          alert("Error Web Service!");
        }
      } catch (error) {
        setContracts([]);
      }
    };
    fetchContracts();
  }, [currentUser]);
  return (
    <div className="container-fluid py-4">
      <div className="row index-ultimos-anuncios">
        <div className="col-12">
          <div className="card mb-4 row">
            <div className="card-header pb-0 p-3">
              <div className="row ultimas-compras">
                <div className="col-6 d-flex align-items-center">
                  <h6 className="mb-0">Últimos Contratos</h6>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Vendedor
                          </th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Quantidade comprada
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Valor por Kw:
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Valor Total:
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Contrato
                          </th>
                          <th className="text-secondary opacity-7"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {contracts.map((contract) => {
                          const contractDetails = contract.contractDetails;

                          return (
                            <tr>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div>
                                    <img
                                      src={imagemana}
                                      className="avatar avatar-sm me-3"
                                      alt="user1"
                                    />
                                  </div>
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {contract.sellerInfo.name}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="text-xs font-weight-bold mb-0 text-center">
                                  {`${contractDetails.quantity}KW`}
                                </p>
                              </td>
                              <td className="align-middle text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  {`${contractDetails.priceEnergy}€`}
                                </p>
                              </td>
                              <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">
                                  {`${contractDetails.totalPrice}€`}
                                </span>
                              </td>
                              <td className="align-middle text-center text-sm">
                                <button
                                  type="button"
                                  className="btn btn-primary btn-descaregar"
                                >
                                  Descarregar
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-primary btn-anexar"
                                >
                                  <img
                                    className="img-logo"
                                    src="assets/img/Anexar.svg"
                                    alt=""
                                  />
                                  Anexar
                                </button>
                                <Link to="/pageMetodoPagamento">
                                  <button
                                    type="button"
                                    className="btn btn-danger btn-pay"
                                    onClick={() => {
                                      handleContractId(
                                        contract.contractID,
                                        contract.OfferOfferId
                                      );
                                    }}
                                  >
                                    pagar
                                  </button>
                                </Link>
                              </td>
                              <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">
                                  Contrato Pendente
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
