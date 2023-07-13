import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import imageeolic from "../img/Producao-eolica.svg";
import imagesolar from "../img/Producao-solar.svg";
import imagehidraulic from "../img/Producao-hidrica.svg";
import imageoutro from "../img/Producao-outra.svg";
import imagePerfilEx from "../img/Foto_Perfil.svg";

export default function FormRegistroComponent() {
  const [dataUser, setdataUser] = useState("");
  const [dataUser2, setdataUser2] = useState("");
  const [campName, setcampName] = useState("");
  const [campEmail, setcampEmail] = useState("");
  const [campPassword, setcampPassword] = useState("");
  const [campAddress, setcampAddress] = useState("");
  const [campCodigoPostal, setcampCodigoPostal] = useState("");
  const [campDistrito, setcampDistrito] = useState("");
  const [campPhoto, setcampPhoto] = useState("");
  const [stringRole, setstringRole] = useState("");
  const [selectRole, setselectRole] = useState(null);
  const [selectCapacity, setSelectCapacity] = useState(null);
  const [selectType, setSelectType] = useState(null);
  const [selectArea, setSelectArea] = useState(null);
  const navigate = useNavigate();

  const loadFile = (event) => {
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  async function SendSave() {
    if (!selectRole) {
      alert("Escolha um Perfil!");
    } else if (campPassword === "") {
      alert("Escolha sua palavra-chave");
    } else {
      const baseUrl = "http://localhost:3000/form/create";
      const datapost = {
        name: campName,
        email: campEmail,
        password: campPassword,
        address: campAddress,
        codigoPostal: campCodigoPostal,
        distrito: campDistrito,
        role: selectRole,
        capacity: selectCapacity,
        productionType: selectType,
        productionArea: selectArea,
      };

      await axios
        .post(baseUrl, datapost)
        .then((response) => {
          if (response.data.success === true) {
            alert(response.data.message);
            navigate("/fimRegistro");
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
    <main className="main-content position-relative border-radius-lg">
      <div className="container-fluid py-4 container-position">
        <div className="row card-position">
          <div className="col-12 col-width">
            <form
              onSubmit={async (event) => {
                event.preventDefault();
                await SendSave();
              }}
            >
              <div className="card mb-4">
                <div className="row form-position padding_form">
                  <h4 className="titulo-termos">Queremos conhecê-lo melhor</h4>
                  <h6 className="titulo-termos form-subtitulo">
                    Confirme os seus dados pessoais
                  </h6>
                  <div className="col form-space">
                    <div className="card-position">
                      <div className="row g-3 row-width">
                        <div className="col-md-4 col-position">
                          <div>
                            <div className="mb-4 d-flex justify-content-center foto-margin">
                              <img
                                id="output"
                                src={imagePerfilEx}
                                accept="image/*"
                                onChange={loadFile}
                                alt="example placeholder"
                                width="150"
                              />
                            </div>
                            <div className="d-flex justify-content-center">
                              <div className="btn btn-primary btn-rounded escolher-img">
                                <label
                                  className="form-label text-white m-1"
                                  htmlFor="customFile1"
                                >
                                  Inserir Imagem
                                </label>
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={loadFile}
                                  className="form-control d-none"
                                  id="customFile1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label form-space fs-6 form-texto"
                          >
                            Primeiro Nome
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="eg. Michael"
                            aria-label="First name"
                            value={campName}
                            required={true}
                            onChange={(value) =>
                              setcampName(value.target.value)
                            }
                          />

                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label form-space fs-6 form-texto"
                          >
                            NIF
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="eg. 303515400"
                            pattern="[0-9]{9}"
                            aria-label="Number"
                          />

                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label form-space fs-6 form-texto"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            required={true}
                            value={campEmail}
                            onChange={(value) =>
                              setcampEmail(value.target.value)
                            }
                          />

                          <div className="mb-3 form-check mt-5">
                            <div className="form-group col-md-6">
                              <label htmlFor="inputState">Perfil</label>
                              <select
                                id="inputState"
                                className="form-control"
                                onChange={(value) =>
                                  setselectRole(value.target.value)
                                }
                              >
                                <option defaultValue>Escolha...</option>
                                <option value="comprador">Comprador</option>
                                <option value="vendedor">Vendedor</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label form-space fs-6 form-texto"
                          >
                            Palavra-chave
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="eg. Prior"
                            aria-label="Último Nome"
                            value={campPassword}
                            required={true}
                            onChange={(value) =>
                              setcampPassword(value.target.value)
                            }
                          />

                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label form-space fs-6 form-texto"
                          >
                            Telemóvel
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="eg. 969293148"
                            pattern="[0-9]{9}"
                            aria-label="Number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="titulo-termos form-titulo">
                    Diga-nos os seus dados de morada
                  </h4>

                  <div className="row card-position">
                    <div className="col-8">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label fs-6 form-texto form-space"
                        >
                          Código-Postal
                        </label>
                        <input
                          type="text"
                          className="form-control form-codigo-postal"
                          id="postalCode"
                          placeholder="eg. 0000-000"
                          pattern="^\d{4}-\d{3}?$"
                          value={campCodigoPostal}
                          onChange={(value) =>
                            setcampCodigoPostal(value.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label fs-6 form-texto form-space"
                        >
                          Morada
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="eg. Rua Nuno Álvares Pereira"
                          value={campAddress}
                          onChange={(value) =>
                            setcampAddress(value.target.value)
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label fs-6 form-texto form-space"
                        >
                          Complemento
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="eg. Bloco b1, apartamento 5D"
                        />
                      </div>
                      <div className="row g-3">
                        <div className="col">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label fs-6 form-texto form-space"
                          >
                            Freguesia
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder="eg. Bloco b1, apartamento 5D"
                          />
                        </div>
                        <div className="col">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label fs-6 form-texto form-space"
                          >
                            Conselho
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder="eg. Bloco b1, apartamento 5D"
                          />
                        </div>
                        <div className="col">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label fs-6 form-texto form-space"
                          >
                            Distrito
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder="eg. Bloco b1, apartamento 5D"
                            value={campDistrito}
                            onChange={(value) =>
                              setcampDistrito(value.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="titulo-termos form-titulo">
                    Qual o seu tipo de produção?
                  </h4>

                  <div className="row card-position mx-auto card_energia">
                    <div className="card-body card_energia2">
                      <div
                        className={"pagar d-flex producao-align"}
                        onClick={() => {
                          setSelectType("Eólica");
                        }}
                      >
                        <div className="pagamento">
                          <div
                            className={`borda d-flex justify-content-center ${
                              selectType === "Eólica" && "selected__image"
                            }`}
                          >
                            <img src={imageeolic} alt="" />
                          </div>
                          <h6 className="text-center">Eólica</h6>
                        </div>
                      </div>
                      <div
                        className="pagar d-flex producao-align"
                        onClick={() => {
                          setSelectType("Solar");
                        }}
                      >
                        <div className="pagamento">
                          <div
                            className={`borda d-flex justify-content-center ${
                              selectType === "Solar" && "selected__image"
                            }`}
                          >
                            <img src={imagesolar} alt="" />
                          </div>
                          <h6 className="text-center">Solar</h6>
                        </div>
                      </div>
                      <div
                        className="pagar d-flex producao-align"
                        onClick={() => {
                          setSelectType("Hídrica");
                        }}
                      >
                        <div className="pagamento">
                          <div
                            className={`borda d-flex justify-content-center ${
                              selectType === "Hídrica" && "selected__image"
                            }`}
                          >
                            <img src={imagehidraulic} alt="" />
                          </div>
                          <h6 className="text-center">Hídrica</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="titulo-termos form-titulo">Dados energia</h4>
                  <div className="row card-position">
                    <div className="col-8">
                      <div className="row g-3">
                        <div className="col">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label fs-6 form-texto form-space"
                          >
                            Área de Produção
                          </label>
                          <div className="valor-producao">
                            <input
                              type="text"
                              className="form-control form-codigo-producao"
                              id="postalCode"
                              placeholder="eg. 25"
                              onChange={(e) => {
                                setSelectArea(e.target.value);
                              }}
                            />
                            <span className="form-text text-producao">ha</span>
                          </div>
                        </div>
                        <div className="col"></div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label fs-6 form-texto form-space"
                        >
                          Capacidade de geração de energia
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="eg. 3000"
                          onChange={(e) => {
                            setSelectCapacity(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label fs-6 form-texto form-space"
                        >
                          Comprovante
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          placeholder="eg. Repeseses"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 text-end btn-guardar-avancar">
                  <button
                    className="btn bg-gradient-dark mb-0 btn-color"
                    type="submit"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
