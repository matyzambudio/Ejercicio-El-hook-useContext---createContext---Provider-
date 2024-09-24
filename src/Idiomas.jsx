import "./App.css";
import imgspanish from "../idiomas/spain.jpg";
import imgfrances from "../idiomas/francia.png";
import imgingles from "../idiomas/uk.png";
import React, { useContext } from "react";
import Contexto from "../contexto/Contexto";
import Provider from "../contexto/Provider";

function Idiomas() {
  const { profesor, setProfesor } = useContext(Contexto);
  const sustituir = (languaje) => {
    setProfesor(
      profesor.map((info, i) =>
        i == 3 ? { ...info, idioma: languaje } : { ...info }
      )
    );
  };
  const spanish = () => {
    sustituir(0);
  };
  const inglish = () => {
    sustituir(1);
  };
  const frances = () => {
    sustituir(2);
  };

  return (
    <div className="idiomas">
      <div onClick={spanish} className="idiomas-caja">
        <img src={imgspanish} />
      </div>
      <div onClick={inglish} className="idiomas-caja">
        <img src={imgingles} />
      </div>
      <div onClick={frances} className="idiomas-caja">
        <img src={imgfrances} />
      </div>
    </div>
  );
}

export default Idiomas;
