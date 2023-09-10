import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import perfilExemplo from "../img/ana-soares.png";
import axios from "axios";
import { userLoggedIn } from "../store/store";
import { useAtom } from "jotai";

export default function MinhasCompras() {
  const [sales, setSales] = useState([]);
  const [actualUser] = useAtom(userLoggedIn);

  useEffect(() => {
    if (!actualUser) return;

    const getSales = async () => {
      const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/contract/list`;
      try {
        const res = await axios.get(url, {
          params: { paid: true, buyerId: actualUser.userId },
        });
        console.log("RES", res.data.data);
        setSales(res.data.data);
      } catch (error) {
        console.log("ERROR", error);
      }
    };
    getSales();
  }, [actualUser]);

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Minhas Compras</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Vendedores
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                        Quantidade comprada
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Valor total
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Data compra
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Contrato
                      </th>
                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sales.map((sale) => {
                      return (
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
                                  src={perfilExemplo}
                                  className="avatar avatar-sm me-3"
                                  alt="user1"
                                />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">
                                  {sale.sellerInfo.name}
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">
                              {`${sale.contractDetails.quantity}KW`}
                            </p>
                          </td>
                          <td className="align-middle text-center">
                            <p className="text-xs font-weight-bold mb-0">
                              {`${sale.contractDetails.totalPrice}€`}
                            </p>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">
                              {Date(sale.contractDetails.publishDate)}
                            </span>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">
                              Efectuado
                            </span>
                          </td>
                          <td className="align-middle">
                            <Link
                              to="/editar"
                              className="text-secondary font-weight-bold text-xs"
                              data-toggle="tooltip"
                              data-original-title="Edit user"
                            >
                              Editar
                            </Link>
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
  );
}
