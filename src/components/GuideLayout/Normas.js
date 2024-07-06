import React from 'react';
import './Normas.css';



function Normas() {
    return (
        <div className="normas-container">
            <h3>Normas brasileiras que o projeto segue:</h3>
            <ul>
                <li class='norma'>
                ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 6120: ações para o cálculo de estruturas de edificações. Rio de Janeiro, 2019.
                </li>
                <li class='norma'>
                ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 6123: forças devidas ao vento em edificações. Rio de Janeiro, 1988.
                </li>
                <li class='norma'>
                ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 8681: ações e segurança nas estruturas - procedimento. Rio de Janeiro, 2003.
                </li>
                <li class='norma'>
                ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 7190-1: projeto de estruturas de madeira – parte 1: critérios de dimensionamento. Rio de Janeiro, 2022.

                </li>
                <li class='norma'>
                ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 8800: projeto de estruturas de aço e de estruturas mistas de aço e concreto de edifícios. Rio de Janeiro, 2008.
                </li>
            </ul>
        </div>
    );
}

export default Normas;