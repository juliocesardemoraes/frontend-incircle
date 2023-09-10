import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import imageleandro from "../img/leandro-faria.png";
import { useAtom } from "jotai";
import { userLoggedIn } from "../store/store";
import axios from "axios";

export default function ContratosVendedor() {
  const [contracts, setContracts] = useState([]);
  const [currentUser] = useAtom(userLoggedIn);

  useEffect(() => {
    if (!currentUser) return;

    const fetchContracts = async () => {
      try {
        const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/contract/list`;

        const res = await axios.get(url, {
          params: { sellerId: currentUser.userId },
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
                  <h6 className="mb-0">Últimas Compras</h6>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Comprador
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
                          return (
                            <tr>
                              <td>
                                <div className="d-flex px-2 py-1">
                                  <div>
                                    <img
                                      src={imageleandro}
                                      className="avatar avatar-sm me-3"
                                      alt="user1"
                                    />
                                  </div>
                                  <div className="d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {contract.buyerInfo.name}
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="text-xs font-weight-bold mb-0 text-center">
                                  {`${contract.contractDetails.quantity}KW`}
                                </p>
                              </td>
                              <td className="align-middle text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  {`${contract.contractDetails.priceEnergy}€`}
                                </p>
                              </td>
                              <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">
                                  {`${contract.contractDetails.totalPrice}€`}
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
                              </td>
                              <td className="align-middle">
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
