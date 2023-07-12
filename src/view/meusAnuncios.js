
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function MeusAnuncios() {
  const [dataOffer, setdataOffer] = useState([]);

  useEffect(() => {
    LoadOffer();
  }, []);
  function LoadOffer() {
    const url = "http://localhost:3000/offer/list";
    axios.get(url)
      .then(res => {
        if (res.data.success) {
          const data = res.data.data;
          setdataOffer(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch(error => {
        alert(error)
      });
  }

  function LoadFillData() {
    return dataOffer.map((data, index) => {
      const vendUser = 2;
      if (data.UserUserId == vendUser)
        return (
          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">{data.publishDate}</h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-xs font-weight-bold mb-0">{data.quantity}</p>
            </td>
            <td class="align-middle text-center text-sm">
              <p class="text-xs font-weight-bold mb-0">{data.priceEnergy}</p>
            </td>
            <td class="align-middle text-center">
              <p class="text-xs font-weight-bold mb-0">{data.totalPrice}</p>
            </td>
            <td class="align-middle">
              <Link
                to="/editeAnuncio"
                class="text-secondary font-weight-bold text-xs"
                data-toggle="tooltip"
                data-original-title="Edit user"
              >
                Edit
              </Link>
            </td>
          </tr>

        );
    });
  }


  return (
    <table class="table align-items-center mb-0">
      <thead>
        <tr>
          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Data</th>
          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
            Quantidade anunciada
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Valor por kw
          </th>
          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
            Total
          </th>

          <th class="text-secondary opacity-7"></th>
        </tr>
      </thead>
      <tbody>
        <LoadFillData />
      </tbody>
    </table>

  );
}



