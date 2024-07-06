import React from 'react';
import './Aplicativo.css';

import appImage from '../../assets/App_PyCasas_Materiais.png';




function Aplicativo() {


    return (
        <div className="app-container">
            <div className="texto">
                <h2>Título</h2>
                <p>texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                </p>
            </div>

            <div >
                <img  className="img-class" alt="" src={appImage}></img>
            </div>
        </div>
    );
}

export default Aplicativo;