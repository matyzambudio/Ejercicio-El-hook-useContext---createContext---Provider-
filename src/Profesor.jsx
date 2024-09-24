import './App.css'
import React,{ useContext } from 'react';
import Contexto from '../contexto/Contexto';

function Profesor(){

    const {profesor} = useContext(Contexto);
    const idioma = profesor[3].idioma;

    const imagen = require(`../idiomas/${profesor[idioma].foto}`);
   
    return(
        <div>
           <div><img src={imagen} className='img-profe'/></div>

           <h3>{profesor[idioma].nombre}</h3>
        </div>
    )
}

export default Profesor;