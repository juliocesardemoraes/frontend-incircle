
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import relogioimg from '../img/relógio.png'
import favoritos from '../img/favoritos.png'
import fotoT3 from '../img/team-3.jpg'

export default function ListComponent() {
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
            return (
                
                <div className="col anuncio_margem">
                <div class="card">
                    <div class="d-flex justify-content-end align-items-center">
                        <div class="tempo d-flex justify-content-between">
                            <img src={relogioimg} alt="" class="relogio" />
                            <p>{data.publishDate}</p>
                        </div>
                    </div>

                    <div class="card-body comprar4 ">
                        <div class="d-flex align-items-center cabecalho" >
                            <img src={fotoT3} alt="" />
                            <h6>{data.User.name}</h6>
                        </div>


                        <p class="card-text">Energia limpa e sustentável para todos.</p>
                        <p class="card-text"><strong>Quantidade:</strong> {data.quantity}</p>
                        <div class="d-flex block1 p-2 align-items-center comprar justify-content-between">
                            <div>
                                <h5>{data.totalPrice}</h5>
                            </div>
                            <div class="botoes_comprar">
                                <img src={favoritos} alt="" />
                                <a href="#" class="btn btn-primary">COMPRAR</a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            );
        });
    }
    

    return (
       
                <LoadFillData />
    );
}




