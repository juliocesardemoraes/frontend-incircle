import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import imageLeandro from "../img/leandro-faria.png";

export default function AdmimTabela() {
  const [dataUser, setdataUser] = useState([]);

  useEffect(() => {
    LoadUser();
  }, []);

  async function deleteUser(email) {
    console.log(email);
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/user/delete`;
    try {
      const res = await axios.delete(url, { data: { email: email } });
      console.log("RESPONSE", res);
      LoadUser();
    } catch (error) {
      console.log(error);
    }
  }

  function LoadUser() {
    const url = `${process.env.REACT_APP_BACKEND_HOST_URL}/user/list`;
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataUser(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  function LoadFillData() {
    return dataUser.map((data, index) => {
      return (
        <tr>
          <td>
            <div className="d-flex px-2 py-1 perfil">
              <div className="d-flex flex-column justify-content-center">
                <img className="img-tamanho" src={imageLeandro} alt="" />
              </div>
              <h6 className="mb-0 text-sm texto-perfil">{data.name}</h6>
            </div>
          </td>
          <td>
            <p className="text-xs font-weight-bold mb-0">{data.email}</p>
          </td>
          <td className="align-middle text-center text-sm">
            <p className="text-xs font-weight-bold mb-0">{data.userId}</p>
          </td>

          <td className="align-middle text-center text-sm">
            <button
              type="button"
              className="btn btn-primary btn-descaregar"
              onClick={async () => {
                await deleteUser(data.email);
              }}
            >
              Eliminar
            </button>
          </td>
          <td className="align-middle">
            <Link to="/profile" className="btn btn-outline-primary btn-anexar">
              Ver Perfil
            </Link>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="container-fluid py-4">
      <div className="row row-position">
        <div className="col-12">
          <div className="card mb-4 row">
            <div className="card-header pb-0 p-3">
              <div className="row filtros-meus-anuncios">
                <div className="col-6 d-flex align-items-center">
                  <h6 className="mb-0">Utilizadores</h6>
                </div>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Perfil
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                          Email
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Id
                        </th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                          Opções
                        </th>
                        <th className="text-secondary opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <LoadFillData />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
