import './App.css';
import Profesor from './Profesor';
import Ubicacion from './Ubicacion';
import React,{useContext,useState} from 'react';
import Contexto from '../contexto/Contexto';

function Pagina(){
    const {profesor} = useContext(Contexto);
    const idioma = profesor[3].idioma;
    
    const [ocultar1,setOcultar1] = useState(false);
    const [ocultar2,setOcultar2] = useState(false);
    const mostrar1 =()=>{
        setOcultar1(!ocultar1);
        setOcultar2(false)
    }
    const mostrar2 =()=>{
        setOcultar2(!ocultar2)
        setOcultar1(false);
    }
    
    return(
        <div className='contenido'>
           <h1>{profesor[idioma].titulo}</h1>
           <h2>{profesor[idioma].texto}</h2>
            <div >
                <button onClick={mostrar1}>{profesor[idioma].boton1}</button>
                <button onClick={mostrar2}>{profesor[idioma].boton2}</button>
            </div>
           {ocultar1 ?  <Profesor/> : null }
            {ocultar2 ? <Ubicacion/> : null}
        </div>
    )
}

export default Pagina;