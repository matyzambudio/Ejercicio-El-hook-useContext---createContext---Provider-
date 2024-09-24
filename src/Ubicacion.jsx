import './App.css'
import React , {useContext} from 'react';
import Contexto from '../contexto/Contexto';

function Ubicacion(){
    const {profesor} = useContext(Contexto);
    const idioma = profesor[3].idioma;
    return (
        <div>
            <h1>{profesor[idioma].boton2}</h1>
            <div>
            <h2>{profesor[idioma].direccion}</h2>
            </div>
           
        </div>
    )
}

export default Ubicacion;