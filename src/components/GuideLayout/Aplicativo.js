import React from 'react';
import './Aplicativo.css';

import appImage from '../../assets/App_PyCasas_Materiais.png';




function Aplicativo() {


    return (
        <div className="app-container">
            <div className="text-container">
                <h2 className="title">PyCasa - Entrada de Dados</h2>
                <p className="introduction">O PyCasa é um software dedicado a auxiliar na definição das dimensões dos
                    elementos estruturais de edificações térreas para moradias unifamiliares.

                </p>
                <p className="introduction">
                    Ele oferece estimativas precisas da quantidade de material necessária e
                    das dimensões mínimas das peças estruturais. Atualmente,
                    o PyCasa suporta dois tipos de materiais para estruturas: madeira e aço.
                </p>

                <p className="introduction">
                    As entradas de dados incluem a localização da construção e a definição do material (aço ou madeira).
                    Para madeira, é necessário especificar o tipo de madeira e a telha. No caso do aço, atualmente está disponível apenas o perfil laminado.
                </p>

            </div>

            <div >
                <img className="img-class" alt="" src={appImage}></img>
            </div>
        </div>
    );
}

export default Aplicativo;