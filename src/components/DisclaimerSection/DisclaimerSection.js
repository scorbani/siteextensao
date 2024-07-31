import React from 'react';
import './DisclaimerSection.css';

function DisclaimerSection() {
    return (
        <div className="disclaimer-container">
            <div className="disclaimer-text-container">
                <div className="disclaimer-text">

                    <p className="bold">Isenção de Responsibilidade:</p>
                    Os autores e a UFRJ não são responsáveis ​​por qualquer uso indevido do programa. Os acima
                    mencionados não assumem qualquer responsabilidade perante qualquer pessoa ou empresa por danos
                    diretos ou indiretos resultantes da utilização de qualquer informação ou da utilização do software aqui disponibilizado.
                </div>
                <div className="disclaimer-text">
                    <p className='bold'>Atenção:</p> O software ainda está em fase inicial e pode ter inconsistência.
                    Caso haja algum erro, pedimos que nos contacte por e-mail.
                </div>

                <div className="disclaimer-text"><p className='bold'>Agradecemos suas contribuições.</p></div>

                <div className="disclaimer-text"><p className='bold'>E-mail: pycasa.contato@poli.ufrj.br</p></div>
            </div>
        </div>
    );
} export default DisclaimerSection;